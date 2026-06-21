function resolveApiUrl(): string {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  return "/api";
}

const API_URL = resolveApiUrl();

export type ApiResponse = {
  success: boolean;
  message: string;
};

function parseApiError(body: unknown, fallback: string): string {
  if (!body || typeof body !== "object") return fallback;
  const message = (body as { message?: string | string[] }).message;
  if (Array.isArray(message)) return message.join(", ");
  if (typeof message === "string" && message.length > 0) return message;
  return fallback;
}

export async function submitContact(data: {
  name: string;
  email: string;
  message: string;
}): Promise<ApiResponse> {
  if (process.env.NEXT_PUBLIC_E2E_MOCK_FORMS === "1") {
    return { success: true, message: "Message sent!" };
  }

  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(
      parseApiError(body, "Could not send your message. Please try again."),
    );
  }

  return body as ApiResponse;
}

export async function submitConsultancy(data: {
  name: string;
  email: string;
  type: string;
  budget: string;
  description: string;
}): Promise<ApiResponse> {
  if (process.env.NEXT_PUBLIC_E2E_MOCK_FORMS === "1") {
    return {
      success: true,
      message:
        "Consultancy request sent successfully! We'll reach out within 24 hours.",
    };
  }

  const res = await fetch(`${API_URL}/consultancy`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(
      parseApiError(
        body,
        "Something went wrong. Please try again or email info@mbsoftsolution.com directly.",
      ),
    );
  }

  return body as ApiResponse;
}
