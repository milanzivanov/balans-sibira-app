import Image from "next/image"

const FocusSection = () => {
    return (
      <section className="container max-w-6xl mx-auto px-4 py-12">
        <h2 className="uppercase text-xl sm:text-2xl font-bold text-blue-900  tracking-wider text-left mb-6">
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
    )
}

export default FocusSection