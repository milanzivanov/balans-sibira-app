import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { FaViber, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export default async function Page() {
  return (
    <>
      <section className="w-full h-[calc(100dvh-99.1px)] relative flex flex-col items-center justify-center gap-6 px-4">
        <Image
          fill
          src={"/siberian-nature.jpg"}
          alt="siberian wild"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-700 dark:bg-blue-100 opacity-10 dark:opacity-5"></div>
        <div className="relative z-10 px-4">
          <h1>
            {/* Light mode title */}
            <Image
              src="/title-light-mode.svg"
              alt="Balans Sibira logo"
              width={700}
              height={250}
              className="mx-auto dark:hidden max-w-[80vw] sm:max-w-175 lg:max-w-225 xl:max-w-250 h-auto"
            />

            {/* Dark mode title */}
            <Image
              src="/title-dark-mode.svg"
              alt="Balans Sibira light logo"
              width={700}
              height={250}
              className="mx-auto hidden dark:block max-w-[80vw] sm:max-w-175 lg:max-w-225 xl:max-w-250 h-auto"
            />
          </h1>

          <p className="bg-gray-200/25 font-bold text-gray-100 text-xs sm:text-base md:text-md max-w-full sm:max-w-100 mx-auto mt-4 text-center tracking-wide rounded-2xl px-4 sm:px-3 py-3">
            Balans nije samo reč, balans je stil života. <br />
            Zato budi u svom balansu!
          </p>
        </div>
      </section>

      {/* about */}
      <section className="container max-w-6xl mx-auto px-4 py-12">
        <h2 className="uppercase text-xl sm:text-2xl font-bold text-blue-900 tracking-wider text-left mb-6">
          o nama
        </h2>
        <div className="grid md:grid-cols-2 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-100 leading-relaxed">
              <strong className="text-blue-900 dark:text-gray-100">
                Balans Sibira
              </strong>{" "}
              nije samo stranica, to je stil života. To je tvoj partner u
              optimizaciji svakodnevice.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-100 leading-relaxed mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              Živimo u svetu koji od nas zahteva konstantnu prisutnost, visoku
              produktivnost i fizičku spremnost. Često zaboravljamo da naš
              &quot;unutrašnji sistem&quot; zahteva redovan servis kako bi mogao
              da isprati taj tempo.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 dark:text-gray-100">
              <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-100 leading-relaxed">
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
        <h2 className="uppercase text-xl sm:text-2xl font-bold text-blue-900 tracking-wider text-left mb-6">
          naš fokus
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative flex flex-col items-left gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Image
                src="/detoks.png"
                alt="Detoks"
                width={75}
                height={75}
                className="mb-2 rounded-full w-16 h-16 sm:w-18.75 sm:h-18.75"
              />
              <h3 className="font-bold text-sm sm:text-base pb-3 text-green-400 relative z-10">
                Detoks (Čist organizam)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-100 relative leading-relaxed z-10">
              Verujemo da svaki napredak počinje od nule. Da bi tvoj organizam
              radio punim kapacitetom, prvo mora da se oslobodi svega što ga
              usporava. Naši programi detoksikacije rade na ćelijskom nivou,
              vršeći &quot;factory reset&quot; tvog tela.
            </p>
          </div>
          <div className="relative flex flex-col items-left gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Image
                src="/energija.png"
                alt="Energija"
                width={75}
                height={75}
                className="mb-2 rounded-full w-16 h-16 sm:w-18.75 sm:h-18.75"
              />
              <h3 className="font-bold text-sm sm:text-base pb-3 text-amber-400 relative z-10">
                Energija (Snaga u pokretu)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-100 relative leading-relaxed z-10">
              Bilo da osvajaš planinske vrhove ili završavaš zahtevan radni
              sprint, tvoja energija mora biti stabilna. Fokusiramo se na
              rešenja koja ti pružaju dugotrajnu snagu bez naglih padova,
              hraneći tvoje ćelije premium sastojcima iz netaknute prirode.
            </p>
          </div>
          <div className="relative flex flex-col items-left gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-5 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Image
                src="/fokus.png"
                alt="Fokus"
                width={75}
                height={75}
                className="mb-2 rounded-full w-16 h-16 sm:w-18.75 sm:h-18.75"
              />
              <h3 className="font-bold text-sm sm:text-base pb-3 text-blue-300 relative z-10">
                Koncentracija (Oštar um)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-100 relative leading-relaxed z-10">
              U svetu punom distrakcija, fokus je tvoja najvrednija valuta. Naša
              rešenja za koncentraciju su dizajnirana da podrže tvoj mozak,
              poboljšaju mikrocirkulaciju i omoguće ti &quot;deep work&quot;
              stanje bez osećaja mentalnog umora.
            </p>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 md:p-12 text-center border border-gray-200 dark:border-gray-700">
          <div className="relative h-[30vh] sm:h-[40dvh] bg-[url('/bg-interest.jpg')] bg-cover bg-center mb-5 rounded-xl">
            <div className="relative z-10 p-5 opacity-20 dark:opacity-30">
              {/* Light mode title */}
              <Image
                src="/title-light-mode.svg"
                alt="Balans Sibira logo"
                width={500}
                height={100}
                className="mx-auto dark:hidden w-full max-w-[80vw] sm:max-w-125 h-auto"
              />

              {/* Dark mode title */}
              <Image
                src="/title-dark-mode.svg"
                alt="Balans Sibira light logo"
                width={500}
                height={100}
                className="mx-auto hidden dark:block w-full max-w-[80vw] sm:max-w-125 h-auto"
              />
            </div>
            <div className="absolute inset-0 rounded-xl bg-black/30"></div>
          </div>

          <h2 className="text-blue-900 dark:text-gray-100 uppercase text-xl sm:text-2xl font-bold mb-4">
            Zainteresovani za naše proizvode?
          </h2>
          <p className="text-gray-500 dark:text-gray-100 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Kontaktirajte me direktno za više informacija, personalizovane
            preporuke i porudžbine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 w-full sm:w-auto sm:min-w-37.5 justify-center"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </Link>
            <Link
              href={`viber://chat?number=${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 w-full sm:w-auto sm:min-w-37.5 justify-center"
            >
              <FaViber className="text-lg" />
              Viber
            </Link>
            <Link
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 w-full sm:w-auto sm:min-w-37.5 justify-center"
            >
              <MdOutlineMailOutline className="text-lg" />
              Email
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <BackToTopButton />
    </>
  );
}
