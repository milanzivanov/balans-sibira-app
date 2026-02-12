"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <header className=" flex items-center justify-between p-3 container max-w-6xl mx-auto">
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
        <ul className="flex items-center gap-4 font-medium text-slate-700 dark:text-slate-100">
          <li>
            <Link
              className={`hover:underline ${pathname === "/" ? "underline text-blue-300" : ""} transition-colors `}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`hover:underline ${pathname === "/posts" ? "underline text-blue-300" : ""} transition-colors `}
              href="/posts"
            >
              Proizvodi
            </Link>
          </li>
          <li>
            <Link className="transition-colors" href="/studio">
              Admin
            </Link>
          </li>

          <ThemeToggle />
        </ul>
      </header>
    </div>
  );
}
