import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  login(apiKey: string) {
    if (!process.env.ADMIN_API_KEY || apiKey !== process.env.ADMIN_API_KEY) {
      throw new UnauthorizedException("Invalid admin API key");
    }

    return { success: true, message: "Authenticated" };
  }

  async getStats() {
    const [contacts, consultancy, pendingContacts, pendingConsultancy] =
      await Promise.all([
        this.prisma.contactInquiry.count(),
        this.prisma.consultancyRequest.count(),
        this.prisma.contactInquiry.count({ where: { status: "pending" } }),
        this.prisma.consultancyRequest.count({ where: { status: "pending" } }),
      ]);

    return {
      contacts,
      consultancy,
      pendingContacts,
      pendingConsultancy,
    };
  }

  listContacts() {
    return this.prisma.contactInquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  listConsultancy() {
    return this.prisma.consultancyRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  updateContactStatus(id: string, status: string) {
    return this.prisma.contactInquiry.update({
      where: { id },
      data: { status },
    });
  }

  updateConsultancyStatus(id: string, status: string) {
    return this.prisma.consultancyRequest.update({
      where: { id },
      data: { status },
    });
  }
}
