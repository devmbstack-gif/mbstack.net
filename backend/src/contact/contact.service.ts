import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MailService } from "../mail/mail.service";
import { CreateContactDto } from "./dto/create-contact.dto";

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
  ) {}

  async create(dto: CreateContactDto) {
    try {
      const inquiry = await this.prisma.contactInquiry.create({
        data: {
          name: dto.name,
          email: dto.email,
          message: dto.message,
        },
      });

      const formattedDate = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());

      await this.mail.sendNotificationEmail({
        subject: `New Contact Inquiry: ${dto.name}`,
        customerName: dto.name,
        details: {
          Source: "Contact Form",
          "Email Address": dto.email,
          "Sent At": formattedDate,
        },
        message:
          dto.message.length > 100
            ? `${dto.message.substring(0, 100)}...`
            : dto.message,
      });

      return {
        success: true,
        message: "Message sent!",
        id: inquiry.id,
      };
    } catch (error) {
      this.logger.error("Failed to create contact inquiry", error);
      throw new InternalServerErrorException(
        "Could not save your message. Please try again later.",
      );
    }
  }
}
