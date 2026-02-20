import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Balans Sibira",
  description:
    "Balans Sibira - prirodni proizvodi iz srca Sibira. Otkrijte moć sibirskih biljaka i prirodnih sastojaka za zdravlje i dobrobit. Naša ponuda uključuje biljne čajeve, tinkture, kreme i dodatke prehrani, pažljivo izrađene kako bi vam pružile najbolje iz prirode. Iskusite snagu sibirske prirode s Balans Sibira."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
