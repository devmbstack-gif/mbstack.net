"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";

const portfolioDropdown = [
  { href: "/portfolio", label: "Website & Software" },
  { href: "/portfolio", label: "Mobile Apps" },
  { href: "/portfolio", label: "SEO & Marketing" },
  { href: "/portfolio", label: "Figma" },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/team", label: "Our Team" },
  { href: "/sales", label: "Join Us" },
  { href: "/portfolio", label: "Portfolio", dropdown: portfolioDropdown },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioExpanded, setPortfolioExpanded] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setPortfolioExpanded(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-stone-200/60 safe-top">
        <div className="page-container">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 min-w-0">
              <Image
                src="/logo.png"
                alt="MB Stack"
                width={140}
                height={44}
                className="h-8 sm:h-10 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-8">
              {navItems.map((item) => {
                if ("dropdown" in item && item.dropdown) {
                  const isPortfolioActive =
                    isActive(item.href) ||
                    item.dropdown.some((d) => pathname === d.href);
                  return (
                    <div key={item.label} className="relative group">
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                          isPortfolioActive
                            ? "text-brand font-semibold border-b-2 border-brand"
                            : "text-stone-600 hover:text-brand"
                        }`}
                      >
                        {item.label}
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Link>
                      <div className="absolute left-0 top-full pt-px z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="bg-white rounded-b-lg shadow-lg border border-stone-200 border-t-2 border-t-brand min-w-[200px] py-2">
                          {item.dropdown.map((sub, index) => (
                            <Link
                              key={index}
                              href={sub.href}
                              className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                                pathname === sub.href
                                  ? "text-brand font-semibold bg-stone-50"
                                  : "text-brand hover:bg-stone-50"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-brand font-semibold border-b-2 border-brand"
                        : "text-stone-600 hover:text-brand"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block flex-shrink-0">
              <Link
                href={SITE.consultancyHref}
                className="inline-flex items-center justify-center min-h-11 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-all duration-200"
              >
                Get Consultancy
              </Link>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => {
                const next = !menuOpen;
                setMenuOpen(next);
                if (!next) setPortfolioExpanded(false);
              }}
              className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-1.5 rounded-lg text-stone-700 hover:bg-stone-100 active:bg-stone-200 transition-colors touch-manipulation"
            >
              <span
                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-white/95 backdrop-blur-sm"
          onClick={closeMenu}
        />
        <nav
          className={`relative flex flex-col items-stretch min-h-full pt-[3.75rem] pb-[max(2rem,env(safe-area-inset-bottom))] px-6 overflow-y-auto overscroll-contain transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center gap-1 max-w-sm mx-auto w-full">
            {navItems.map((item, index) => {
              if ("dropdown" in item && item.dropdown) {
                const isPortfolioActive =
                  isActive(item.href) ||
                  item.dropdown.some((d) => pathname === d.href);
                return (
                  <div key={index} className="w-full flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setPortfolioExpanded((e) => !e)}
                      className={`w-full min-h-12 inline-flex items-center justify-center gap-1.5 text-lg font-medium transition-colors touch-manipulation ${
                        isPortfolioActive
                          ? "text-brand font-semibold"
                          : "text-stone-600 hover:text-brand"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 ${portfolioExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`w-full overflow-hidden transition-all duration-200 ${
                        portfolioExpanded
                          ? "max-h-56 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1 py-2 border-t border-stone-200 w-full">
                        {item.dropdown.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sub.href}
                            onClick={closeMenu}
                            className={`w-full min-h-11 inline-flex items-center justify-center text-base font-medium transition-colors touch-manipulation ${
                              pathname === sub.href
                                ? "text-brand font-semibold"
                                : "text-stone-600 hover:text-brand"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeMenu}
                  className={`w-full min-h-12 inline-flex items-center justify-center text-lg font-medium transition-colors touch-manipulation ${
                    isActive(item.href)
                      ? "text-brand font-semibold"
                      : "text-stone-600 hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={SITE.consultancyHref}
              onClick={closeMenu}
              className="mt-4 w-full min-h-12 inline-flex items-center justify-center px-8 py-3 rounded-xl text-base font-semibold text-white bg-brand hover:bg-brand-dark transition-all touch-manipulation"
            >
              Get Consultancy
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
