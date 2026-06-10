"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  { href: "/team", label: "Team" },
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isSalesActive = pathname === "/sales";

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="MB Stack"
                width={140}
                height={44}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
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
                            ? "text-[#31B574] font-semibold border-b-2 border-[#31B574]"
                            : "text-stone-600 hover:text-[#31B574]"
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
                        <div className="bg-white rounded-b-lg shadow-lg border border-stone-200 border-t-2 border-t-[#31B574] min-w-[200px] py-2">
                          {item.dropdown.map((sub, index) => (
                            <Link
                              key={index}
                              href={sub.href}
                              className={`block px-4 py-2 text-sm font-medium transition-colors ${
                                pathname === sub.href
                                  ? "text-[#31B574] font-semibold bg-stone-50"
                                  : "text-[#31B574] hover:bg-stone-50"
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
                        ? "text-[#31B574] font-semibold border-b-2 border-[#31B574]"
                        : "text-stone-600 hover:text-[#31B574]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block flex-shrink-0">
              <Link
                href="/sales"
                className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 ${
                  isSalesActive
                    ? "bg-[#2a9d63] ring-2 ring-[#31B574]"
                    : "bg-[#31B574] hover:bg-[#2a9d63]"
                }`}
              >
                Get Consultancy
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => {
                const next = !menuOpen;
                setMenuOpen(next);
                if (!next) setPortfolioExpanded(false);
              }}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
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

      {/* Mobile full-screen menu */}
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
          className={`relative flex flex-col items-center justify-center min-h-full gap-6 px-6 transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "translate-y-4"
          }`}
        >
          {navItems.map((item, index) => {
            if ("dropdown" in item && item.dropdown) {
              const isPortfolioActive =
                isActive(item.href) ||
                item.dropdown.some((d) => pathname === d.href);
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPortfolioExpanded((e) => !e)}
                    className={`inline-flex items-center gap-1.5 text-xl font-medium transition-colors ${
                      isPortfolioActive
                        ? "text-[#31B574] font-semibold"
                        : "text-stone-600 hover:text-[#31B574]"
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
                    className={`overflow-hidden transition-all duration-200 ${
                      portfolioExpanded
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3 pt-2 border-t border-stone-200 w-full">
                      {item.dropdown.map((sub, index) => (
                        <Link
                          key={index}
                          href={sub.href}
                          onClick={closeMenu}
                          className={`text-lg font-medium transition-colors ${
                            pathname === sub.href
                              ? "text-[#31B574] font-semibold"
                              : "text-stone-600 hover:text-[#31B574]"
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
                className={`text-xl font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-[#31B574] font-semibold"
                    : "text-stone-600 hover:text-[#31B574]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/sales"
            onClick={closeMenu}
            className={`mt-4 inline-flex items-center justify-center px-8 py-3 rounded-xl text-base font-semibold text-white transition-all ${
              isSalesActive
                ? "bg-[#2a9d63]"
                : "bg-[#31B574] hover:bg-[#2a9d63]"
            }`}
          >
            Get Consultancy
          </Link>
        </nav>
      </div>
    </>
  );
}
