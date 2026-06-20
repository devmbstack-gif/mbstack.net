import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MailService } from "../mail/mail.service";
import { CreateConsultancyDto } from "./dto/create-consultancy.dto";

@Injectable()
export class ConsultancyService {
  private readonly logger = new Logger(ConsultancyService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
  ) {}

  async create(dto: CreateConsultancyDto) {
    try {
      const request = await this.prisma.consultancyRequest.create({
        data: {
          name: dto.name,
          email: dto.email,
          type: dto.type,
          budget: dto.budget,
          description: dto.description,
          packageName: dto.packageName,
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
        subject: `New Strategy Session: ${dto.name}`,
        customerName: dto.name,
        details: {
          Email: dto.email,
          "Service Type": dto.type,
          "Budget Range (USD)": dto.budget,
          "Request Date": formattedDate,
        },
        message: dto.description,
      });

      return {
        success: true,
        message:
          "Consultancy request sent successfully! We'll reach out within 24 hours.",
        id: request.id,
      };
    } catch (error) {
      this.logger.error("Failed to create consultancy request", error);
      throw new InternalServerErrorException(
        "Could not save your request. Please try again later.",
      );
    }
  }
}
