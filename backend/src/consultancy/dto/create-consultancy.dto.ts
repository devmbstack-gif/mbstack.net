import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateConsultancyDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  type!: string;

  @IsString()
  @IsNotEmpty()
  budget!: string;

  @IsString()
  @MinLength(3)
  description!: string;

  @IsOptional()
  @IsString()
  packageName?: string;
}
