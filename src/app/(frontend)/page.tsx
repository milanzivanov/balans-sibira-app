import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FocusSection from "@/components/home/FocusSection";
import ContactCTASection from "@/components/home/ContactCTASection";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Balans Sibira | Budi u svom balansu",
  description:
    "Snaga sibirske prirode za tvoje maksimalne performanse. Detoks, energija, fokus i zdravlje - sve u jednom. Otkrij moć prirode s Balans Sibira.",
  openGraph: {
    images: ["/siberian-nature.jpg"]
  }
};

export default async function Page() {
  return (
    <>
      {/* hero */}
      <HeroSection />

      {/* about */}
      <AboutSection />

      {/* focus */}
      <FocusSection />

      {/* Contact/CTA Section */}
      <ContactCTASection />

      <Footer />

      <BackToTopButton />
    </>
  );
}
