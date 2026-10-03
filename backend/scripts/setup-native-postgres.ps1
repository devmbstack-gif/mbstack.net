# Prepare local PostgreSQL 18 for MB Stack.
# Re-launches as Administrator when needed to set postgres password and create mbstack_db.

param(
  [string]$NewPassword = "admin",
  [string]$DatabaseName = "mbstack_db",
  [string]$PgVersion = "18",
  [string]$ServiceName = "postgresql-x64-18",
  [string]$LogFile = ""
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$envFile = Join-Path $root ".env"
$defaultLogFile = Join-Path $env:TEMP "mbstack-postgres-setup.log"
if ([string]::IsNullOrWhiteSpace($LogFile)) {
  $LogFile = $defaultLogFile
}
$psql = "C:\Program Files\PostgreSQL\$PgVersion\bin\psql.exe"
$createdb = "C:\Program Files\PostgreSQL\$PgVersion\bin\createdb.exe"
$dataDir = "C:\Program Files\PostgreSQL\$PgVersion\data"
$pgHba = Join-Path $dataDir "pg_hba.conf"

function Test-PostgresLogin {
  param(
    [string]$Password,
    [string]$Database = "postgres"
  )

  if (-not (Test-Path $psql)) {
    return $false
  }

  $previous = $env:PGPASSWORD
  $env:PGPASSWORD = $Password

  try {
    & $psql -U postgres -h localhost -d $Database -tAc "SELECT 1" | Out-Null
    return $LASTEXITCODE -eq 0
  } finally {
    $env:PGPASSWORD = $previous
  }
}

function Ensure-Database {
  param([string]$Password)

  $env:PGPASSWORD = $Password
  $dbExists = & $psql -U postgres -h localhost -d postgres -tAc "SELECT 1 FROM pg_database WHERE datname='$DatabaseName'"
  if ($dbExists -ne "1") {
    & $createdb -U postgres -h localhost $DatabaseName
    if ($LASTEXITCODE -ne 0) { throw "Failed to create database $DatabaseName." }
    Write-Host "Created database: $DatabaseName"
  } else {
    Write-Host "Database already exists: $DatabaseName"
  }
}

function Read-DatabasePasswordFromEnv {
  if (-not (Test-Path $envFile)) {
    return $null
  }

  $line = Get-Content $envFile | Where-Object { $_ -match '^DATABASE_URL=' } | Select-Object -First 1
  if (-not $line) {
    return $null
  }

  if ($line -match 'postgresql://postgres:([^@]+)@') {
    return [uri]::UnescapeDataString($matches[1])
  }

  return $null
}

if (-not (Test-Path $psql)) {
  throw "PostgreSQL $PgVersion not found. Install PostgreSQL $PgVersion first."
}

$configuredPassword = Read-DatabasePasswordFromEnv
if ($configuredPassword -and (Test-PostgresLogin -Password $configuredPassword)) {
  Write-Host "PostgreSQL login OK with credentials from backend/.env"
  Ensure-Database -Password $configuredPassword
  Write-Host "PostgreSQL ready on localhost:5432"
  exit 0
}

if ($configuredPassword -and (Test-PostgresLogin -Password $configuredPassword -Database $DatabaseName)) {
  Write-Host "Database $DatabaseName is already reachable."
  exit 0
}

$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole(
  [Security.Principal.WindowsBuiltInRole]::Administrator
)

if (-not $isAdmin) {
  Write-Host "Administrator access required to configure PostgreSQL password."
  Write-Host "Re-launching setup as Administrator (approve the UAC prompt)..."

  if (Test-Path $LogFile) { Remove-Item $LogFile -Force }

  $process = Start-Process powershell -Verb RunAs -PassThru -Wait -ArgumentList @(
    "-ExecutionPolicy", "Bypass",
    "-File", $PSCommandPath,
    "-NewPassword", $NewPassword,
    "-DatabaseName", $DatabaseName,
    "-LogFile", $LogFile
  )

  if (Test-Path $LogFile) {
    Get-Content $LogFile | Write-Host
  }

  if ($process.ExitCode -ne 0) {
    throw "PostgreSQL setup failed. Open PowerShell as Administrator in the project folder and run: npm run db:native"
  }

  exit 0
}

if ($isAdmin -and (Test-Path (Split-Path $LogFile -Parent))) {
  Start-Transcript -Path $LogFile -Force | Out-Null
}

if (-not (Test-Path $pgHba)) {
  throw "pg_hba.conf not found at $pgHba"
}

$backup = "$pgHba.bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Copy-Item $pgHba $backup
Write-Host "Backup: $backup"

$content = Get-Content $pgHba -Raw
$trustContent = $content -replace "scram-sha-256", "trust"
Set-Content -Path $pgHba -Value $trustContent -NoNewline

try {
  Restart-Service $ServiceName -Force
  Start-Sleep -Seconds 3

  & $psql -U postgres -h localhost -d postgres -c "ALTER USER postgres WITH PASSWORD '$NewPassword';"
  if ($LASTEXITCODE -ne 0) { throw "Failed to set postgres password." }

  Ensure-Database -Password $NewPassword

  Write-Host "PostgreSQL ready on localhost:5432"
  Write-Host "DATABASE_URL=postgresql://postgres:$NewPassword@localhost:5432/$DatabaseName"
}
finally {
  if (Test-Path $backup) {
    Copy-Item $backup $pgHba -Force
  }

  Restart-Service $ServiceName -Force
  Write-Host "pg_hba.conf restored."
}
