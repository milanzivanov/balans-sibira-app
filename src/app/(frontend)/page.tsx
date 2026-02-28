import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FocusSection from "@/components/home/FocusSection";
import ContactCTASection from "@/components/home/ContactCTASection";

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
