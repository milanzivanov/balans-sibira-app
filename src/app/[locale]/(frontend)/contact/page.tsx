import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Kontaktirajte nas",
  description: "Kontaktirajte nas za sva pitanja i informacije.",
  openGraph: {
    images: ["/siberian-nature.jpg"]
  }
};

export default function ContactPage() {
  return <ContactForm />;
}
