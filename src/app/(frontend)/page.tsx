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
              Balans Sibira nije samo prodavnica suplemenata. To je tvoj partner
              u optimizaciji svakodnevice. Živimo u svetu koji od nas zahteva
              konstantnu prisutnost, visoku produktivnost i fizičku spremnost.
              Često zaboravljamo da naš &quot;unutrašnji sistem&quot; zahteva
              redovan servis kako bi mogao da isprati taj tempo. Naša misija je
              jednostavna: Pomoći ti da postigneš maksimalne performanse
              koristeći najčistiju snagu sibirske prirode.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-gray-100 py-6 mt-12">
          <div className="container max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Balans Sibira. Sva prava zadržana.
          </div>
        </div>
      </footer>
    </>
  );
}
