import { submitConsultancy } from "./consultancy";

jest.mock("@/lib/prisma", () => ({
  __esModule: true,
  default: {
    consultancyRequest: {
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
    name: "Test User",
    email: "test@example.com",
    type: "web",
    budget: "5000-10000",
    description: "Need a website.",
    ...overrides,
  };
  const fd = new FormData();
  Object.entries(data).forEach(([k, v]) => fd.append(k, v));
  return fd;
}

describe("submitConsultancy", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    prisma.consultancyRequest.create.mockResolvedValue({});
  });

  it("returns error when required fields are missing", async () => {
    const result = await submitConsultancy(null, formData({ name: "" }));
    expect(result).toEqual({
      success: false,
      message: "Please fill in all fields",
    });
    expect(prisma.consultancyRequest.create).not.toHaveBeenCalled();
  });

  it("returns error when email is missing", async () => {
    const result = await submitConsultancy(null, formData({ email: "" }));
    expect(result?.success).toBe(false);
    expect(result?.message).toContain("fill in all fields");
  });

  it("creates consultancy request and sends email when all fields valid", async () => {
    const fd = formData();
    const result = await submitConsultancy(null, fd);

    expect(prisma.consultancyRequest.create).toHaveBeenCalledWith({
      data: {
        name: "Test User",
        email: "test@example.com",
        type: "web",
        budget: "5000-10000",
        description: "Need a website.",
      },
    });
    expect(sendNotificationEmail).toHaveBeenCalled();
    expect(result?.success).toBe(true);
    expect(result?.message).toBeDefined();
  });

  it("returns error on prisma failure", async () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    prisma.consultancyRequest.create.mockRejectedValue(new Error("DB error"));
    const result = await submitConsultancy(null, formData());
    expect(result?.success).toBe(false);
    expect(result?.message).toContain("Something went wrong");
    spy.mockRestore();
  });
});
