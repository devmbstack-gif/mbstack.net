import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByTestId("contact-form")).toBeVisible();
  });

  test("renders all required fields and submit button", async ({ page }) => {
    await expect(page.getByRole("textbox", { name: /your name/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /email address/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /message/i })).toBeVisible();
    await expect(
      page.getByRole("button", { name: /send message/i })
    ).toBeVisible();
  });

  test("blocks submit when required fields are empty", async ({ page }) => {
    await page.getByRole("button", { name: /send message/i }).click();
    await expect(page.getByText("Message sent!")).not.toBeVisible();
    await expect(page.getByRole("textbox", { name: /your name/i })).toBeFocused();
  });

  test("submits successfully with valid data", async ({ page }) => {
    await page.getByRole("textbox", { name: /your name/i }).fill("E2E Contact User");
    await page.getByRole("textbox", { name: /email address/i }).fill("e2e-contact@test.com");
    await page
      .getByRole("textbox", { name: /message/i })
      .fill("Automated end-to-end contact form test message.");

    await page.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByText("Message sent!")).toBeVisible({ timeout: 15_000 });
  });

  test("rejects invalid email format", async ({ page }) => {
    await page.getByRole("textbox", { name: /your name/i }).fill("Test User");
    await page.getByRole("textbox", { name: /email address/i }).fill("not-an-email");
    await page.getByRole("textbox", { name: /message/i }).fill("Test message");

    await page.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByText("Message sent!")).not.toBeVisible();
  });
});

test.describe("Consultancy form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/consultancy");
    await expect(page.getByTestId("consultancy-form")).toBeVisible();
  });

  test("renders all fields and submit button", async ({ page }) => {
    await expect(page.getByRole("textbox", { name: /full name/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /work email/i })).toBeVisible();
    await expect(page.getByRole("combobox", { name: /service interest/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /estimated budget/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /project details/i })).toBeVisible();
    await expect(
      page.getByRole("button", { name: /book my free strategy session/i })
    ).toBeVisible();
  });

  test("blocks submit when required fields are empty", async ({ page }) => {
    await page.getByRole("button", { name: /book my free strategy session/i }).click();
    await expect(
      page.getByText(/consultancy request sent successfully/i)
    ).not.toBeVisible();
    await expect(page.getByRole("textbox", { name: /full name/i })).toBeFocused();
  });

  test("submits successfully with valid data", async ({ page }) => {
    await page.getByRole("textbox", { name: /full name/i }).fill("E2E Consultancy User");
    await page.getByRole("textbox", { name: /work email/i }).fill("e2e-consultancy@test.com");
    await page.getByRole("combobox", { name: /service interest/i }).selectOption("Mobile App Development");
    await page.getByRole("textbox", { name: /estimated budget/i }).fill("$5,000 - $10,000");
    await page
      .getByRole("textbox", { name: /project details/i })
      .fill("Automated end-to-end consultancy form test.");

    await page.getByRole("button", { name: /book my free strategy session/i }).click();

    await expect(
      page.getByText(/consultancy request sent successfully/i)
    ).toBeVisible({ timeout: 15_000 });
  });

  test("works on mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    await page.getByRole("textbox", { name: /full name/i }).fill("Mobile E2E User");
    await page.getByRole("textbox", { name: /work email/i }).fill("mobile-e2e@test.com");
    await page.getByRole("combobox", { name: /service interest/i }).selectOption("Web Development");
    await page.getByRole("textbox", { name: /estimated budget/i }).fill("10k");
    await page.getByRole("textbox", { name: /project details/i }).fill("Mobile form test.");

    await page.getByRole("button", { name: /book my free strategy session/i }).click();

    await expect(
      page.getByText(/consultancy request sent successfully/i)
    ).toBeVisible({ timeout: 15_000 });
  });
});
