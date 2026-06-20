import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "./page";

const mockSubmitContact = jest.fn();
const mockToastSuccess = jest.fn();
const mockToastError = jest.fn();

jest.mock("@/lib/api", () => ({
  submitContact: (...args: unknown[]) => mockSubmitContact(...args),
}));

jest.mock("react-hot-toast", () => ({
  __esModule: true,
  default: {
    success: (...args: unknown[]) => mockToastSuccess(...args),
    error: (...args: unknown[]) => mockToastError(...args),
  },
}));

describe("ContactPage form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSubmitContact.mockResolvedValue({
      success: true,
      message: "Message sent!",
    });
  });

  it("renders the contact form fields", () => {
    render(<ContactPage />);
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /your name/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email address/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /message/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("submits form data through the API client", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.type(screen.getByRole("textbox", { name: /your name/i }), "Jane Doe");
    await user.type(
      screen.getByRole("textbox", { name: /email address/i }),
      "jane@example.com",
    );
    await user.type(
      screen.getByRole("textbox", { name: /message/i }),
      "Need help with a web app.",
    );
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockSubmitContact).toHaveBeenCalledWith({
        name: "Jane Doe",
        email: "jane@example.com",
        message: "Need help with a web app.",
      });
    });
  });

  it("shows success toast after successful submission", async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    await user.type(screen.getByRole("textbox", { name: /your name/i }), "Jane Doe");
    await user.type(
      screen.getByRole("textbox", { name: /email address/i }),
      "jane@example.com",
    );
    await user.type(screen.getByRole("textbox", { name: /message/i }), "Hello");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith("Message sent!");
    });
  });

  it("shows error toast when submission fails", async () => {
    mockSubmitContact.mockRejectedValue(new Error("Please fill in all fields"));

    const user = userEvent.setup();
    render(<ContactPage />);

    await user.type(screen.getByRole("textbox", { name: /your name/i }), "Jane Doe");
    await user.type(
      screen.getByRole("textbox", { name: /email address/i }),
      "jane@example.com",
    );
    await user.type(screen.getByRole("textbox", { name: /message/i }), "Hello");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith("Please fill in all fields");
    });
  });
});
