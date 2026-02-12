import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div className="bg-gray-100">
      <header className=" flex items-center justify-between p-3 container max-w-6xl mx-auto">
        <Link className="md:text-xl font-bold tracking-tight" href="/">
          <Image
            src="/logo-web-2.svg"
            alt="Balans Sibira logo"
            width={75}
            height={75}
            className="inline-block mr-2"
          />
        </Link>
        <ul className="flex items-center gap-4 font-medium text-slate-700">
          <li>
            <Link className="hover:text-blue-700 transition-colors" href="/">
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
