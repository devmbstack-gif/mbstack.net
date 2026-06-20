import { SITE, SEO, RATING, BRAND_COLOR, HERO_CLIENT_IMAGES } from "./site";

describe("site constants", () => {
  describe("SITE", () => {
    it("has required keys", () => {
      expect(SITE).toHaveProperty("name");
      expect(SITE).toHaveProperty("tagline");
      expect(SITE).toHaveProperty("description");
      expect(SITE).toHaveProperty("consultancyHref", "/consultancy");
      expect(SITE).toHaveProperty("contactHref", "/contact");
    });

    it("has non-empty name and description", () => {
      expect(SITE.name.length).toBeGreaterThan(0);
      expect(SITE.description.length).toBeGreaterThan(0);
    });
  });

  describe("SEO", () => {
    it("includes site name in default title", () => {
      expect(SEO.defaultTitle).toContain(SITE.name);
    });

    it("has title template with %s", () => {
      expect(SEO.titleTemplate).toContain("%s");
    });

    it("has keywords string", () => {
      expect(typeof SEO.keywords).toBe("string");
      expect(SEO.keywords.length).toBeGreaterThan(0);
    });
  });

  describe("RATING", () => {
    it("has numeric value between 0 and 5", () => {
      expect(typeof RATING.value).toBe("number");
      expect(RATING.value).toBeGreaterThanOrEqual(0);
      expect(RATING.value).toBeLessThanOrEqual(5);
    });
  });

  describe("BRAND_COLOR", () => {
    it("is a hex color", () => {
      expect(BRAND_COLOR).toMatch(/^#[0-9A-Fa-f]{6}$/);
    });
  });

  describe("HERO_CLIENT_IMAGES", () => {
    it("is a non-empty array of strings", () => {
      expect(Array.isArray(HERO_CLIENT_IMAGES)).toBe(true);
      expect(HERO_CLIENT_IMAGES.length).toBeGreaterThan(0);
      HERO_CLIENT_IMAGES.forEach((path) => {
        expect(typeof path).toBe("string");
        expect(path.startsWith("/")).toBe(true);
      });
    });
  });
});
