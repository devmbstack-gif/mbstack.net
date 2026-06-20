import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { MailModule } from "./mail/mail.module";
import { ContactModule } from "./contact/contact.module";
import { ConsultancyModule } from "./consultancy/consultancy.module";
import { AdminModule } from "./admin/admin.module";
import { HealthController } from "./health.controller";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    MailModule,
    ContactModule,
    ConsultancyModule,
    AdminModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
