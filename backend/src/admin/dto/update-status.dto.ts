import { IsIn, IsNotEmpty, IsString } from "class-validator";

const STATUSES = ["pending", "contacted", "closed"] as const;

export class UpdateStatusDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(STATUSES)
  status!: (typeof STATUSES)[number];
}
