"use client";

import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";
import BackToTopButton from "@/components/BackToTopButton";
import { useState, useRef } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Poruka je uspešno poslata!"
        });
        formRef.current?.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Greška pri slanju poruke. Pokušajte ponovo."
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Greška pri slanju poruke. Pokušajte ponovo."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container max-w-4xl mx-auto px-4 py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 tracking-wider mb-3 sm:mb-4">
          Kontakt
        </h1>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
          Imate pitanje? Pošaljite nam poruku i odgovorićemo vam u najkraćem
          mogućem roku.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 dark:border-gray-700">
        <form
          ref={formRef}
          className="space-y-4 sm:space-y-6"
          onSubmit={handleSubmit}
        >
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
                       transition-colors text-sm sm:text-base"
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
                       transition-colors text-sm sm:text-base"
              placeholder="email@email.com"
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
                       transition-colors resize-none text-sm sm:text-base"
              placeholder="Napišite vašu poruku ovde..."
            />
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                submitStatus.type === "success"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1b88c3] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 
                       text-white font-semibold py-3 px-6 rounded-lg transition-colors 
                       focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                       disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isSubmitting ? "Šalje se..." : "Pošalji poruku"}
            </button>
          </div>
        </form>
      </div>

      {/* Back Button */}
      <div className="flex justify-end items-center mt-8 sm:mt-12">
        <Link
          href="/"
          className="flex items-center bg-[#1b88c3] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 
                   text-white text-center py-3 px-6 sm:px-10 rounded-lg transition-colors 
                   font-semibold text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          <FaArrowCircleLeft className="mr-2" />
          <span>Vrati se na početak</span>
        </Link>
      </div>

      <BackToTopButton />
    </main>
  );
}
