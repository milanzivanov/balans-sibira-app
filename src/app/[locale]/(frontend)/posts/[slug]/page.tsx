import { cache } from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/post";

import { notFound } from "next/navigation";
import Link from "next/link";

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import { FaArrowCircleLeft } from "react-icons/fa";
import BackToTopButton from "@/components/BackToTopButton";
import { client } from "@/sanity/lib/client";

const getPost = cache(async (slug: string, locale: string) => {
  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: { slug, language: locale }
  });
  return data;
});

export default async function Page({
  params
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "posts" });

  const post = await getPost(slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <main className="container max-w-6xl mx-auto grid grid-cols-1 gap-6 px-4 py-12">
      <Post {...post} />

      <div className="flex justify-end items-center mt-8 sm:mt-12">
        <Link
          href={`/${locale}/posts`}
          rel="noopener noreferrer"
          className="flex items-center bg-[#1b88c3] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-center py-3 px-6 sm:px-10 rounded-lg transition-colors font-semibold text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          <FaArrowCircleLeft className="mr-2" />
          <span>{t("backToPosts")}</span>
        </Link>
      </div>

      <BackToTopButton />
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await client.fetch<Array<{ slug: string; language: string }>>(
    `*[_type == "post" && defined(slug.current) && defined(language)][0...100]{ "slug": slug.current, language }`
  );
  return posts.map((post) => ({
    locale: post.language,
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getPost(slug, locale);

  if (!post) {
    const t = await getTranslations({ locale, namespace: "meta.posts" });
    return { title: t("title") };
  }

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title ?? undefined,
      description: post.excerpt ?? undefined,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "article",
      publishedTime: post.publishedAt ?? undefined
    }
  };
}
