import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { HeaderNav } from "./HeaderNav";

export async function Header({ locale }: { locale: string }) {
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const showAdmin = process.env.NEXT_PUBLIC_SHOW_ADMIN === "true";

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
              priority
            />
            <Image
              src="/bs-logo-dark-mode-v2.svg"
              alt="Balans Sibira logo"
              width={75}
              height={75}
              className="mx-auto hidden dark:block w-14 h-14 sm:w-18.75 sm:h-18.75"
            />
          </Link>

          <HeaderNav
            locale={locale}
            showAdmin={showAdmin}
            labels={{
              home: tNav("home"),
              posts: tNav("posts"),
              contact: tNav("contact"),
              admin: tNav("admin")
            }}
          />
        </header>
      </div>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-17 sm:h-[99.1px]" />
    </>
  );
}
