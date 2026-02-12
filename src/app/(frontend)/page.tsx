import BackToTopButton from "@/components/BackToTopButton";
import Image from "next/image";
import Link from "next/link";
import { FaViber, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default async function Page() {
  return (
    <>
      <section className="w-full h-[calc(100dvh-99.1px)] bg-[url('/siberian-nature.jpg')] bg-cover bg-bottom relative flex flex-col items-center justify-center gap-6">
        <div className="absolute inset-0 bg-blue-700 dark:bg-blue-100 opacity-10 dark:opacity-5"></div>
        <div className="relative z-10">
          <h1>
            {/* Light mode title */}
            <Image
              src="/title-light-mode.svg"
              alt="Balans Sibira logo"
              width={700}
              height={250}
              className="mx-auto dark:hidden"
            />

            {/* Dark mode title */}
            <Image
              src="/title-dark-mode.svg"
              alt="Balans Sibira light logo"
              width={700}
              height={250}
              className="mx-auto hidden dark:block"
            />
          </h1>

          <p className="bg-gray-200/25 font-bold text-gray-100 text-md max-w-100 mx-auto mt-4 text-center tracking-wide rounded-2xl px-6 py-3">
            Balans nije samo reč, balans je stil života. <br />
            Zato budi u svom balansu!
          </p>
        </div>
      </section>

      {/* about */}
      <section className="container max-w-6xl mx-auto px-4 py-12">
        <h2 className="uppercase text-2xl font-bold text-blue-900 tracking-wider text-left mb-6">
          o nama
        </h2>
        <div className="grid md:grid-cols-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          {/* Image Side */}
          <div className="relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-blue-700 dark:bg-blue-100 opacity-10 dark:opacity-5 z-10"></div>
            <Image
              src="/bg-about-us.jpg"
              alt="O balansu sibira"
              fill
              className="absolute inset-0 object-cover object-bottom"
            />
          </div>

          {/* Text Side */}
          <div className="p-8 flex flex-col justify-center">
            <p className="text-gray-600 dark:text-gray-100 leading-relaxed">
              <strong className="text-blue-900 dark:text-gray-100">
                Balans Sibira
              </strong>{" "}
              nije samo stranica, to je stil života. To je tvoj partner u
              optimizaciji svakodnevice.
            </p>
            <p className="text-gray-600 dark:text-gray-100 leading-relaxed mt-6 pt-6 border-t border-gray-200">
              Živimo u svetu koji od nas zahteva konstantnu prisutnost, visoku
              produktivnost i fizičku spremnost. Često zaboravljamo da naš
              &quot;unutrašnji sistem&quot; zahteva redovan servis kako bi mogao
              da isprati taj tempo.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:text-gray-100">
              <p className="font-medium text-gray-600 dark:text-gray-100 leading-relaxed">
                <span className="font-semibold">Naša misija</span>: Pomoći ti da
                postigneš maksimalne performanse koristeći najčistiju snagu
                sibirske prirode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* focus */}
      <section className="container max-w-6xl mx-auto px-4 py-12">
        <h2 className="uppercase text-2xl font-bold text-blue-900 tracking-wider text-left mb-6">
          naš fokus
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative flex flex-col items-left gap-4 bg-green-700 dark:bg-gray-800 rounded-lg p-3 pb-15">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="flex items-center gap-2">
              <Image
                src="/detoks.png"
                alt="Detoks"
                width={75}
                height={75}
                className="mb-2 rounded-full"
              />
              <h3 className="font-bold pb-3 text-green-300 relative z-10">
                Detoks (Čist organizam)
              </h3>
            </div>
            <p className="text-sm text-gray-100 relative leading-relaxed z-10">
              Verujemo da svaki napredak počinje od nule. Da bi tvoj organizam
              radio punim kapacitetom, prvo mora da se oslobodi svega što ga
              usporava. Naši programi detoksikacije rade na ćelijskom nivou,
              vršeći &quot;factory reset&quot; tvog tela.
            </p>
          </div>
          <div className="relative flex flex-col items-left gap-4 bg-yellow-600 dark:bg-gray-800 rounded-lg p-3">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="flex items-center gap-2">
              <Image
                src="/energija.png"
                alt="Detoks"
                width={75}
                height={75}
                className="mb-2 rounded-full"
              />
              <h3 className="font-bold pb-3 text-amber-200 relative z-10">
                Energija (Snaga u pokretu)
              </h3>
            </div>
            <p className="text-sm text-gray-100 relative leading-relaxed z-10">
              Bilo da osvajaš planinske vrhove ili završavaš zahtevan radni
              sprint, tvoja energija mora biti stabilna. Fokusiramo se na
              rešenja koja ti pružaju dugotrajnu snagu bez naglih padova,
              hraneći tvoje ćelije premium sastojcima iz netaknute prirode.
            </p>
          </div>
          <div className="relative flex flex-col items-left gap-4 bg-blue-800 dark:bg-gray-800 rounded-lg p-5">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="flex items-center gap-2">
              <Image
                src="/fokus.png"
                alt="Detoks"
                width={75}
                height={75}
                className="mb-2 rounded-full"
              />
              <h3 className="font-bold pb-3 text-blue-300 relative z-10">
                Koncentracija (Oštar um)
              </h3>
            </div>
            <p className="text-sm text-gray-100 relative leading-relaxed z-10">
              U svetu punom distrakcija, fokus je tvoja najvrednija valuta. Naša
              rešenja za koncentraciju su dizajnirana da podrže tvoj mozak,
              poboljšaju mikrocirkulaciju i omoguće ti &quot;deep work &quot;
              stanje bez osećaja mentalnog umora.
            </p>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 md:p-12 text-center">
          <div className="relative h-[40dvh] bg-[url('/bg-interest.jpg')] bg-cover bg-center mb-5 rounded-xl">
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <h2 className="text-blue-900 dark:text-gray-100 uppercase text-2xl font-bold mb-4 ">
            Zainteresovani za naše proizvode?
          </h2>
          <p className="text-gray-500 dark:text-gray-100 text-base mb-8 max-w-2xl mx-auto">
            Kontaktirajte me direktno za više informacija, personalizovane
            preporuke i porudžbine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://wa.me/381649646048"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 min-w-50 justify-center"
            >
              <FaWhatsapp />
              WhatsApp
            </Link>
            <Link
              href="viber://chat?number=381649646048"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 min-w-50 justify-center"
            >
              <FaViber />
              Viber
            </Link>
            <Link
              href="mailto:info@balanssibira.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 min-w-50 justify-center"
            >
              <MdOutlineMailOutline />
              Email
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-linear-to-br from-gray-900 to-gray-700 py-12 mt-12">
          <div className="container max-w-6xl mx-auto px-4">
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              {/* Brand Section */}
              <div className="text-center md:text-left">
                <h3 className="text-white font-bold text-xl mb-2">
                  <Image
                    src="/title-light-mode.svg"
                    alt="Balans Sibira logo"
                    width={250}
                    height={100}
                    className="mx-auto md:mx-0"
                  />
                </h3>
                <p className="text-white text-sm max-w-xs">
                  Snaga sibirske prirode za tvoje maksimalne performanse
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/balans.sibira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 hover:bg-white transition-all duration-300 rounded-full p-3 backdrop-blur-sm"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-pink-600 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/balanssibira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 hover:bg-white transition-all duration-300 rounded-full p-3 backdrop-blur-sm"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6 text-white group-hover:text-blue-600 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 mb-6"></div>

            {/* Copyright */}
            <div className="text-center text-sm text-white">
              &copy; {new Date().getFullYear()} Balans Sibira. Sva prava
              zadržana.
            </div>
          </div>
        </div>
      </footer>
      <BackToTopButton />
    </>
  );
}
