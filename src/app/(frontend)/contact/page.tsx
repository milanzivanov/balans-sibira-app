import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";
import BackToTopButton from "@/components/BackToTopButton";

export default function ContactPage() {
  return (
    <main className="container max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-900 tracking-wider mb-4">
          Kontakt
        </h1>
        <p className="text-gray-700 text-lg">
          Imate pitanje? Pošaljite nam poruku i odgovorićemo vam u najkraćem
          mogućem roku.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        <form className="space-y-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Ime *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-colors"
              placeholder="Vaše ime"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-colors"
              placeholder="vase.ime@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Poruka *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-colors resize-none"
              placeholder="Napišite vašu poruku ovde..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="flex-1 bg-[#1b88c3] hover:bg-blue-900 text-white font-semibold 
                       py-3 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 
                       focus:ring-offset-2"
            >
              Pošalji poruku
            </button>
          </div>
        </form>
      </div>

      {/* Back Button */}
      <div className="flex justify-end items-center mt-8">
        <Link
          href="/"
          className="flex items-center bg-[#1b88c3] hover:bg-blue-900 text-white text-center 
                   py-3 px-10 rounded-lg transition-colors font-semibold"
        >
          <FaArrowCircleLeft className="mr-2" />
          <span>Vrati se na početak</span>
        </Link>
      </div>

      <BackToTopButton />
    </main>
  );
}
