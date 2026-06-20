import { Module } from "@nestjs/common";
import { MailModule } from "../mail/mail.module";
import { ConsultancyController } from "./consultancy.controller";
import { ConsultancyService } from "./consultancy.service";

@Module({
  imports: [MailModule],
  controllers: [ConsultancyController],
  providers: [ConsultancyService],
})
export class ConsultancyModule {}
