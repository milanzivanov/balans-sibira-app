import Image from "next/image";

export default async function Page() {
  return (
    <>
      <section className="w-full h-[50dvh] bg-[url('/siberian-nature.jpg')] bg-cover bg-bottom relative flex flex-col items-center justify-center gap-6">
        <div className="before:absolute before:inset-0 before:bg-blue-700 before:opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-white text-xl uppercase font-bold tracking-wider">
            Dobrodošli na
          </h1>
        </div>
        <div className="relative z-10">
          <Image
            src="/title-logo.svg"
            alt="Balans Sibira logo"
            width={600}
            height={150}
            className="mx-auto"
          />
        </div>
      </section>

      {/* about */}
      <section className="container max-w-6xl mx-auto px-4 py-12">
        <h2 className="uppercase text-2xl font-bold text-blue-900 tracking-wider text-left mb-6">
          o nama
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-gray-100 p-5 rounded-lg">
          <Image
            src="/O_meni.png"
            alt="Detoks"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <div>
            <p className="text-black text-left max-w-2xl mx-auto text-sm md:text-base">
              Balans Sibira nije samo stranica, to je stil zivota. To je tvoj
              partner u optimizaciji svakodnevice. Živimo u svetu koji od nas
              zahteva konstantnu prisutnost, visoku produktivnost i fizičku
              spremnost. Često zaboravljamo da naš &quot;unutrašnji sistem&quot;
              zahteva redovan servis kako bi mogao da isprati taj tempo. Naša
              misija je jednostavna: Pomoći ti da postigneš maksimalne
              performanse koristeći najčistiju snagu sibirske prirode.
            </p>
          </div>
        </div>
      </section>

      {/* focus */}
      <section className="container max-w-6xl mx-auto px-4 py-12">
        <h2 className="uppercase text-2xl font-bold text-blue-900 tracking-wider text-left mb-6">
          naš fokus
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col items-left gap-4 bg-gray-100 rounded-lg p-3 pb-15">
            <div className="flex items-center gap-2">
              <Image
                src="/detoks.png"
                alt="Detoks"
                width={75}
                height={75}
                className="mb-2 rounded-full"
              />
              <h3 className="font-bold pb-3">Detoks (Čist organizam) 🌿</h3>
            </div>
            <p className="text-sm">
              Verujemo da svaki napredak počinje od nule. Da bi tvoj organizam
              radio punim kapacitetom, prvo mora da se oslobodi svega što ga
              usporava. Naši programi detoksikacije rade na ćelijskom nivou,
              vršeći &quot;factory reset&quot; tvog tela.
            </p>
          </div>
          <div className="flex flex-col items-left gap-4 bg-gray-100 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Image
                src="/energija.png"
                alt="Detoks"
                width={75}
                height={75}
                className="mb-2 rounded-full"
              />
              <h3 className="font-bold pb-3">Energija (Snaga u pokretu) 🔋</h3>
            </div>
            <p className="text-sm">
              Bilo da osvajaš planinske vrhove ili završavaš zahtevan radni
              sprint, tvoja energija mora biti stabilna. Fokusiramo se na
              rešenja koja ti pružaju dugotrajnu snagu bez naglih padova,
              hraneći tvoje ćelije premium sastojcima iz netaknute prirode.
            </p>
          </div>
          <div className="flex flex-col items-left gap-4 bg-gray-100 rounded-lg p-5 ">
            <div className="flex items-center gap-2">
              <Image
                src="/fokus.png"
                alt="Detoks"
                width={75}
                height={75}
                className="mb-2 rounded-full"
              />
              <h3 className="font-bold pb-3">Koncentracija (Oštar um) 🧠</h3>
            </div>
            <p className="text-sm">
              U svetu punom distrakcija, fokus je tvoja najvrednija valuta. Naša
              rešenja za koncentraciju su dizajnirana da podrže tvoj mozak,
              poboljšaju mikrocirkulaciju i omoguće ti &quot;deep work &quot;
              stanje bez osećaja mentalnog umora.
            </p>
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
                  Balans Sibira
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
            <div className="text-center text-sm text-blue-200">
              &copy; {new Date().getFullYear()} Balans Sibira. Sva prava
              zadržana.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
