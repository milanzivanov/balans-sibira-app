import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";

import "../../../globals.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import BackToTopButton from "@/components/BackToTopButton";
import PostsContent from "@/components/PostsContent";

export default async function Page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "posts" });

  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
    params: { language: locale }
  });
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });

  return (
    <main className="container max-w-6xl mx-auto px-4 py-12">
      <h1 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 tracking-wider mb-6 sm:mb-8">
        {t("title")}
      </h1>

      <PostsContent posts={posts} categories={categories} />

      <div className="flex justify-start items-center mt-8 sm:mt-12">
        <Link
          href={`/${locale}`}
          rel="noopener noreferrer"
          className="flex items-center bg-[#1b88c3] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-center py-3 px-6 sm:px-10 rounded-lg transition-colors font-semibold text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          <FaArrowCircleLeft className="mr-2" />
          <span>{t("backToHome")}</span>
        </Link>
      </div>

      <BackToTopButton />
    </main>
  );
}
