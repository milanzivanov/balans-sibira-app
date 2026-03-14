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

  const allMessages = await getMessages({ locale });

  const messages = {
    nav: allMessages.nav,
    home: allMessages.home,
    posts: allMessages.posts,
    contact: allMessages.contact,
    footer: allMessages.footer
  };

  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <section className="bg-white min-h-screen">
        <Header locale={locale} />
        {children}
        {isDraftMode ? <SanityLive /> : null}
      </section>
    </NextIntlClientProvider>
  );
}
