import Image from "next/image"
import Link from "next/link"
import { FaViber, FaWhatsapp } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"

const ContactCTASection = () => {
    return (
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6  sm:p-8 md:p-12 text-center border border-gray-200 dark:border-gray-700">
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
    )
}

export default ContactCTASection