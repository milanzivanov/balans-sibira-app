import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return <ContactForm />;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.contact" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website"
    }
  };
}
