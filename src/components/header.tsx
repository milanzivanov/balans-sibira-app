"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import { useLocale, useTranslations } from "next-intl";

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const tNav = useTranslations("nav");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 fixed top-0 left-0 right-0 z-50">
        <header className="flex items-center justify-between p-2 sm:p-3 container max-w-6xl mx-auto">
          <Link
            className="md:text-xl font-bold tracking-tight"
            href={`/${locale}`}
          >
            <Image
              src="/bs-logo-light-mode-v2.svg"
              alt="Balans Sibira logo"
              width={75}
              height={75}
              className="mx-auto dark:hidden w-14 h-14 sm:w-18.75 sm:h-18.75"
            />
            <Image
              src="/bs-logo-dark-mode-v2.svg"
              alt="Balans Sibira logo"
              width={75}
              height={75}
              className="mx-auto hidden dark:block w-14 h-14 sm:w-18.75 sm:h-18.75"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-4 font-medium text-slate-700 dark:text-slate-100">
            <li>
              <Link
                className={`hover:underline ${pathname === `/${locale}` ? "underline text-blue-300" : ""} transition-colors`}
                href={`/${locale}`}
              >
                {tNav("home")}
              </Link>
            </li>

            <li>
              <Link
                className={`hover:underline ${pathname === `/${locale}/posts` ? "underline text-blue-300" : ""} transition-colors`}
                href={`/${locale}/posts`}
              >
                {tNav("posts")}
              </Link>
            </li>

            <li>
              <Link
                className={`hover:underline ${pathname === `/${locale}/contact` ? "underline text-blue-300" : ""} transition-colors`}
                href={`/${locale}/contact`}
              >
                {tNav("contact")}
              </Link>
            </li>

            <li>
              <Link className="transition-colors" href="/studio">
                {tNav("admin")}
              </Link>
            </li>

            <LocaleSwitcher />
            <ThemeToggle />
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2 sm:gap-3">
            <LocaleSwitcher />
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-slate-700 dark:text-slate-100 focus:outline-none z-50 relative"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // Close Icon
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
                // Hamburger Icon
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
        </header>
      </div>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-17 sm:h-[99.1px]" />

      {/* Mobile Navigation Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop - clicking closes menu */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-30"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Menu */}
          <nav className="md:hidden fixed inset-0 bg-gray-50 dark:bg-gray-800 z-40 pt-17 sm:pt-[99.1px]">
            <ul className="flex flex-col font-medium text-slate-700 dark:text-slate-100 h-full justify-center pb-17 sm:pb-[99.1px]">
              <li>
                <Link
                  className={`block px-6 py-6 text-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                    pathname === `/${locale}`
                      ? "bg-gray-200 dark:bg-gray-700 text-blue-500"
                      : ""
                  }`}
                  href={`/${locale}`}
                  onClick={closeMobileMenu}
                >
                  {tNav("home")}
                </Link>
              </li>

              <li>
                <Link
                  className={`block px-6 py-6 text-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                    pathname === `/${locale}/posts`
                      ? "bg-gray-200 dark:bg-gray-700 text-blue-500"
                      : ""
                  }`}
                  href={`/${locale}/posts`}
                  onClick={closeMobileMenu}
                >
                  {tNav("posts")}
                </Link>
              </li>

              <li>
                <Link
                  className={`block px-6 py-6 text-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                    pathname === `/${locale}/contact`
                      ? "bg-gray-200 dark:bg-gray-700 text-blue-500"
                      : ""
                  }`}
                  href={`/${locale}/contact`}
                  onClick={closeMobileMenu}
                >
                  {tNav("contact")}
                </Link>
              </li>

              <li>
                <Link
                  className="block px-6 py-6 text-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="/studio"
                  onClick={closeMobileMenu}
                >
                  {tNav("admin")}
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
