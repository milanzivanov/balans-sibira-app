"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

type NavLink = {
  href: string;
  label: string;
};

export function HeaderNavMobile({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="flex md:hidden items-center gap-2 sm:gap-3">
        <LocaleSwitcher />
        <ThemeToggle />
        <button
          onClick={toggleMobileMenu}
          className="text-slate-700 dark:text-slate-100 focus:outline-none z-50 relative"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-7 h-7 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-30"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <nav
            className="md:hidden fixed inset-0 bg-gray-50 dark:bg-gray-800 z-40 pt-17 sm:pt-[99.1px]"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col font-medium text-slate-700 dark:text-slate-100 h-full justify-center pb-17 sm:pb-[99.1px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={link.href === "/studio" ? false : undefined}
                    onClick={closeMobileMenu}
                    className={
                      "block px-6 py-6 text-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors " +
                      (pathname === link.href
                        ? "bg-gray-200 dark:bg-gray-700 text-blue-500"
                        : "")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
