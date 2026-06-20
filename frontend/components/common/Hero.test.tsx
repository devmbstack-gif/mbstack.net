import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: function MockImage({
    src,
    alt,
  }: {
    src: string;
    alt: string;
  }) {
    return <img src={src} alt={alt} />;
  },
}));

describe("Hero", () => {
  it("renders without crashing", () => {
    render(<Hero />);
  });

  it("renders Get Consultancy CTA with correct href", () => {
    render(<Hero />);
    const consultancyLink = screen.getByRole("link", { name: /get consultancy/i });
    expect(consultancyLink).toHaveAttribute("href", "/consultancy");
  });

  it("renders Contact Us CTA with correct href", () => {
    render(<Hero />);
    const contactLink = screen.getByRole("link", { name: /contact us/i });
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
