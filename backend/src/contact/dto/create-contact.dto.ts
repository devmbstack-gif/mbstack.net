import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(3)
  message!: string;
}
