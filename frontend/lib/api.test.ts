import { submitContact, submitConsultancy } from "./api";

describe("frontend api client", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch = originalFetch;
    delete process.env.NEXT_PUBLIC_E2E_MOCK_FORMS;
  });

  it("returns mock contact success in E2E mode", async () => {
    process.env.NEXT_PUBLIC_E2E_MOCK_FORMS = "1";
    const result = await submitContact({
      name: "Jane",
      email: "jane@example.com",
      message: "Hello",
    });
    expect(result.message).toBe("Message sent!");
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("posts contact payload to backend API", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, message: "Message sent!" }),
    });

    await submitContact({
      name: "Jane",
      email: "jane@example.com",
      message: "Hello",
    });

    expect(global.fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("returns mock consultancy success in E2E mode", async () => {
    process.env.NEXT_PUBLIC_E2E_MOCK_FORMS = "1";
    const result = await submitConsultancy({
      name: "Jane",
      email: "jane@example.com",
      type: "Web Development",
      budget: "10k",
      description: "Need help",
    });
    expect(result.success).toBe(true);
  });
});
