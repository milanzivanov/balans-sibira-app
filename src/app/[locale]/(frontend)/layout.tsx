import { Header } from "@/components/header";
import { SanityLive } from "@/sanity/lib/live";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

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

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <section className="bg-white min-h-screen">
        <Header />
        {children}
        <SanityLive />
      </section>
    </NextIntlClientProvider>
  );
}
