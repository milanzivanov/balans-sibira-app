"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const locales = [
  { id: "sr", label: "SR" },
  { id: "en", label: "EN" },
];

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: string) => {
    if (nextLocale === locale) return;
    // Replace current locale prefix with new one
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div className="flex items-center gap-1 border border-slate-300 dark:border-slate-600 rounded-full px-1 py-0.5">
      {locales.map((l, i) => (
        <span key={l.id} className="flex items-center">
          <button
            onClick={() => switchLocale(l.id)}
            disabled={isPending}
            className={`text-xs font-semibold px-1.5 py-0.5 rounded-full transition-colors cursor-pointer ${
              locale === l.id
                ? "bg-blue-600 text-white"
                : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            {l.label}
          </button>
          {i < locales.length - 1 && (
            <span className="text-slate-300 dark:text-slate-600 text-xs">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
