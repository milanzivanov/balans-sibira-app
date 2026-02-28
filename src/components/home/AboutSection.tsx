import Image from 'next/image'

 const AboutSection = () => {
    return (
        <section className="container max-w-6xl mx-auto px-4 py-12">
        <h2 className="uppercase text-xl sm:text-2xl font-bold text-blue-900  tracking-wider text-left mb-6">
          o nama
        </h2>
        <div className="grid md:grid-cols-2 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {/* Image Side */}
          <div className="relative h-64 md:h-auto">
            <div className="absolute inset-0 bg-blue-700 opacity-10 dark:opacity-5 z-10"></div>
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
    )
}

export default AboutSection