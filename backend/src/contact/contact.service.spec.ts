import { Test, TestingModule } from "@nestjs/testing";
import { ContactService } from "./contact.service";
import { PrismaService } from "../prisma/prisma.service";
import { MailService } from "../mail/mail.service";

describe("ContactService", () => {
  let service: ContactService;
  const prisma = {
    contactInquiry: { create: jest.fn() },
  };
  const mail = { sendNotificationEmail: jest.fn() };

  beforeEach(async () => {
    jest.clearAllMocks();
    prisma.contactInquiry.create.mockResolvedValue({ id: "test-id" });
    mail.sendNotificationEmail.mockResolvedValue(undefined);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactService,
        { provide: PrismaService, useValue: prisma },
        { provide: MailService, useValue: mail },
      ],
    }).compile();

    service = module.get(ContactService);
  });

  it("saves inquiry and sends email", async () => {
    const result = await service.create({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hello from unit test",
    });

    expect(prisma.contactInquiry.create).toHaveBeenCalled();
    expect(mail.sendNotificationEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        customerName: "Jane Doe",
        subject: expect.stringContaining("Jane Doe"),
      }),
    );
    expect(result.success).toBe(true);
    expect(result.message).toBe("Message sent!");
  });
});
