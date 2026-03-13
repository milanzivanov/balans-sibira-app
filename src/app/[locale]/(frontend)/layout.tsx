import { Header } from "@/components/header";
import { SanityLive } from "@/sanity/lib/live";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function FrontendLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "sr" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <NextIntlClientProvider messages={messages}>
      <section className="bg-white min-h-screen">
        <Header locale={locale} />
        {children}
        {isDraftMode ? <SanityLive /> : null}
        <SanityLive />
      </section>
    </NextIntlClientProvider>
  );
}
