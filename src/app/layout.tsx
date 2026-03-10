import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.balanssibira.com"
  ),
  title: "Balans Sibira",
  description: "Balans Sibira - prirodni proizvodi iz srca Sibira."
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
