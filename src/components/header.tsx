"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 fixed top-0 left-0 right-0 z-50">
        <header className="flex items-center justify-between p-3 container max-w-6xl mx-auto">
          <Link className="md:text-xl font-bold tracking-tight" href="/">
            <Image
              src="/bs-logo-light-mode.svg"
              alt="Balans Sibira logo"
              width={75}
              height={75}
              className="mx-auto dark:hidden"
            />
            <Image
              src="/bs-logo-dark-mode.svg"
              alt="Balans Sibira logo"
              width={75}
              height={75}
              className="mx-auto hidden dark:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-4 font-medium text-slate-700 dark:text-slate-100">
            <li>
              <Link
                className={`hover:underline ${pathname === "/" ? "underline text-blue-300" : ""} transition-colors`}
                href="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className={`hover:underline ${pathname === "/posts" ? "underline text-blue-300" : ""} transition-colors`}
                href="/posts"
              >
                Proizvodi
              </Link>
            </li>

            <li>
              <Link
                className={`hover:underline ${pathname === "/contact" ? "underline text-blue-300" : ""} transition-colors`}
                href="/contact"
              >
                Kontakt
              </Link>
            </li>

            <li>
              <Link className="transition-colors" href="/studio">
                Admin
              </Link>
            </li>

            <ThemeToggle />
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-slate-700 dark:text-slate-100 focus:outline-none z-50 relative"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // Close Icon
                <svg
                  className="w-6 h-6"
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
                  className="w-6 h-6"
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
      <div className="h-[99.1px]" />

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
          <nav className="md:hidden fixed inset-0 top-[99.1px] bg-gray-50 dark:bg-gray-800 z-40">
            <ul className="flex flex-col font-medium text-slate-700 dark:text-slate-100 h-full">
              <li>
                <Link
                  className={`block px-6 py-6 text-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                    pathname === "/"
                      ? "bg-gray-200 dark:bg-gray-700 text-blue-500"
                      : ""
                  }`}
                  href="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className={`block px-6 py-6 text-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                    pathname === "/posts"
                      ? "bg-gray-200 dark:bg-gray-700 text-blue-500"
                      : ""
                  }`}
                  href="/posts"
                  onClick={closeMobileMenu}
                >
                  Proizvodi
                </Link>
              </li>

              <li>
                <Link
                  className={`block px-6 py-6 text-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                    pathname === "/contact"
                      ? "bg-gray-200 dark:bg-gray-700 text-blue-500"
                      : ""
                  }`}
                  href="/contact"
                  onClick={closeMobileMenu}
                >
                  Kontakt
                </Link>
              </li>

              <li>
                <Link
                  className="block px-6 py-6 text-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  href="/studio"
                  onClick={closeMobileMenu}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
