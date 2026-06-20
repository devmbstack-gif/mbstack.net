import React from "react";
import { render, screen } from "@testing-library/react";
import SocialIcons from "./SocialIcons";

describe("SocialIcons", () => {
  it("renders without crashing", () => {
    render(<SocialIcons />);
  });

  it("renders links for each social platform", () => {
    render(<SocialIcons />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("links have correct attributes for external open", () => {
    render(<SocialIcons />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("applies custom className when provided", () => {
    const { container } = render(<SocialIcons className="custom-class" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("custom-class");
  });
});
