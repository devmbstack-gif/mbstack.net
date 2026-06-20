import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConsultancyPage from "./page";

const mockSubmitConsultancy = jest.fn();
const mockToastSuccess = jest.fn();
const mockToastError = jest.fn();

jest.mock("@/lib/api", () => ({
  submitConsultancy: (...args: unknown[]) => mockSubmitConsultancy(...args),
}));

jest.mock("react-hot-toast", () => ({
  __esModule: true,
  default: {
    success: (...args: unknown[]) => mockToastSuccess(...args),
    error: (...args: unknown[]) => mockToastError(...args),
  },
}));

describe("ConsultancyPage form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSubmitConsultancy.mockResolvedValue({
      success: true,
      message:
        "Consultancy request sent successfully! We'll reach out within 24 hours.",
    });
  });

  it("renders consultancy form fields", () => {
    render(<ConsultancyPage />);
    expect(screen.getByTestId("consultancy-form")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /full name/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /work email/i })).toBeInTheDocument();
  });

  it("submits consultancy data through the API client", async () => {
    const user = userEvent.setup();
    render(<ConsultancyPage />);

    await user.type(screen.getByRole("textbox", { name: /full name/i }), "Test User");
    await user.type(
      screen.getByRole("textbox", { name: /work email/i }),
      "test@example.com",
    );
    await user.type(screen.getByRole("textbox", { name: /estimated budget/i }), "10k");
    await user.type(
      screen.getByRole("textbox", { name: /project details/i }),
      "Need a website.",
    );
    await user.click(
      screen.getByRole("button", { name: /book my free strategy session/i }),
    );

    await waitFor(() => {
      expect(mockSubmitConsultancy).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "Test User",
          email: "test@example.com",
          budget: "10k",
          description: "Need a website.",
        }),
      );
    });
  });
});
