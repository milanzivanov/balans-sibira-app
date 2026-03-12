"use client";

import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";
import BackToTopButton from "@/components/BackToTopButton";
import { useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("contact");
  const formT = useTranslations("contact.form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    customMessage?: string;
  }>({ type: null });
  const [errors, setErrors] = useState<{
    firstName?: string;
    email?: string;
    message?: string;
  }>({});
  const formRef = useRef<HTMLFormElement>(null);

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name: string, value: string): string | undefined => {
    if (name === "firstName" && !value.trim()) return formT("nameRequired");
    if (name === "email") {
      if (!value.trim()) return formT("emailRequired");
      if (!EMAIL_REGEX.test(value)) return formT("emailInvalid");
    }
    if (name === "message" && !value.trim()) return formT("messageRequired");
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null });

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string
    };

    // Validate all fields before submitting
    const nextErrors = {
      firstName: validateField("firstName", data.firstName),
      email: validateField("email", data.email),
      message: validateField("message", data.message)
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success"
        });
        formRef.current?.reset();
      } else {
        setSubmitStatus({
          type: "error",
          customMessage:
            typeof result.error === "string" ? result.error : undefined
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        customMessage: undefined
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container max-w-4xl mx-auto px-4 py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 tracking-wider mb-3 sm:mb-4">
          {t("title")}
        </h1>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
          {t("description")}
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
              {formT("nameLabel")}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              aria-invalid={!!errors.firstName}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
              onBlur={handleBlur}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-colors text-sm sm:text-base"
              placeholder={formT("namePlaceholder")}
            />
            {errors.firstName && (
              <p
                id="firstName-error"
                role="alert"
                className="mt-1 text-xs text-red-600 dark:text-red-400"
              >
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              {formT("emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              onBlur={handleBlur}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-colors text-sm sm:text-base"
              placeholder={formT("emailPlaceholder")}
            />
            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="mt-1 text-xs text-red-600 dark:text-red-400"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              {formT("messageLabel")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              onBlur={handleBlur}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       transition-colors resize-none text-sm sm:text-base"
              placeholder={formT("messagePlaceholder")}
            />
            {errors.message && (
              <p
                id="message-error"
                role="alert"
                className="mt-1 text-xs text-red-600 dark:text-red-400"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              role="alert"
              aria-live="polite"
              className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                submitStatus.type === "success"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
              }`}
            >
              {submitStatus.customMessage ??
                (submitStatus.type === "success"
                  ? formT("success")
                  : formT("error"))}
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
              {isSubmitting ? formT("submitting") : formT("submit")}
            </button>
          </div>
        </form>
      </div>

      {/* Back Button */}
      <div className="flex justify-end items-center mt-8 sm:mt-12">
        <Link
          href={`/${locale}`}
          className="flex items-center bg-[#1b88c3] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 
                   text-white text-center py-3 px-6 sm:px-10 rounded-lg transition-colors 
                   font-semibold text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          <FaArrowCircleLeft className="mr-2" />
          <span>{t("back")}</span>
        </Link>
      </div>

      <BackToTopButton />
    </main>
  );
}
