module.exports = {
  apps: [
    {
      name: "mbstack-api",
      cwd: "./backend",
      script: "dist/main.js",
      env: {
        NODE_ENV: "production",
        PORT: 3711,
      },
      kill_timeout: 8000,
      max_memory_restart: "512M",
    },
    {
      name: "mbstack-web",
      cwd: "./frontend",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3710",
      env: {
        NODE_ENV: "production",
        PORT: 3710,
        HOSTNAME: "0.0.0.0",
      },
      kill_timeout: 8000,
      max_memory_restart: "800M",
    },
    {
      name: "mbstack-admin",
      cwd: "./admin",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3712",
      env: {
        NODE_ENV: "production",
        PORT: 3712,
        HOSTNAME: "0.0.0.0",
      },
      kill_timeout: 8000,
      max_memory_restart: "600M",
    },
  ],
};
