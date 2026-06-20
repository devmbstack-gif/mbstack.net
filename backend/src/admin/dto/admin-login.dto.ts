import { IsNotEmpty, IsString } from "class-validator";

export class AdminLoginDto {
  @IsString()
  @IsNotEmpty()
  apiKey!: string;
}
