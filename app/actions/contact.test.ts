import { submitContactForm } from "./contact";

jest.mock("@/lib/prisma", () => ({
  __esModule: true,
  default: {
    contactInquiry: {
      create: jest.fn(),
    },
  },
}));

jest.mock("@/lib/mail", () => ({
  sendNotificationEmail: jest.fn().mockResolvedValue(undefined),
}));

const prisma = require("@/lib/prisma").default;
const sendNotificationEmail = require("@/lib/mail").sendNotificationEmail;

function formData(overrides: Record<string, string> = {}) {
  const data = {
    name: "Jane Doe",
    email: "jane@example.com",
    message: "Hello, I need help with a project.",
    ...overrides,
  };
  const fd = new FormData();
  Object.entries(data).forEach(([k, v]) => fd.append(k, v));
  return fd;
}

describe("submitContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    prisma.contactInquiry.create.mockResolvedValue({});
  });

  it("returns error when name is missing", async () => {
    const result = await submitContactForm(null, formData({ name: "" }));
    expect(result).toEqual({
      success: false,
      message: "Please fill in all fields",
    });
    expect(prisma.contactInquiry.create).not.toHaveBeenCalled();
  });

  it("returns error when email is missing", async () => {
    const result = await submitContactForm(null, formData({ email: "" }));
    expect(result?.success).toBe(false);
    expect(result?.message).toContain("fill in all fields");
  });

  it("returns error when message is missing", async () => {
    const result = await submitContactForm(null, formData({ message: "" }));
    expect(result?.success).toBe(false);
  });

  it("creates contact inquiry and sends email when all fields valid", async () => {
    const fd = formData();
    const result = await submitContactForm(null, fd);

    expect(prisma.contactInquiry.create).toHaveBeenCalledWith({
      data: {
        name: "Jane Doe",
        email: "jane@example.com",
        message: "Hello, I need help with a project.",
      },
    });
    expect(sendNotificationEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: expect.stringContaining("Jane Doe"),
        customerName: "Jane Doe",
      })
    );
    expect(result?.success).toBe(true);
    expect(result?.message).toBe("Message sent!");
  });

  it("returns error on prisma failure", async () => {
    prisma.contactInquiry.create.mockRejectedValue(new Error("DB error"));
    const result = await submitContactForm(null, formData());
    expect(result?.success).toBe(false);
    expect(result?.message).toBe("Something went wrong.");
  });
});
