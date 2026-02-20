import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/post";

import { notFound } from "next/navigation";
import Link from "next/link";

import { FaArrowCircleLeft } from "react-icons/fa";
import BackToTopButton from "@/components/BackToTopButton";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container max-w-6xl mx-auto grid grid-cols-1 gap-6 px-4 py-12">
      <Post {...post} />

      <div className="flex justify-end items-center mt-8 sm:mt-12">
        <Link
          href="/posts"
          rel="noopener noreferrer"
          className="flex items-center bg-[#1b88c3] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-center py-3 px-6 sm:px-10 rounded-lg transition-colors font-semibold text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          <FaArrowCircleLeft className="mr-2" />
          <span>Vrati se na proizvode</span>
        </Link>
      </div>

      <BackToTopButton />
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await client.fetch<Array<{ slug: { current: string } }>>(
    `*[_type == "post" && defined(slug.current)][0...100]{ "slug": slug.current }`
  );
  return posts.map((post) => ({ slug: post.slug }));
}

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params
  });

  return {
    title: post?.title || "Post",
    openGraph: post?.mainImage
      ? {
          images: [urlFor(post.mainImage).width(1200).height(630).url()]
        }
      : undefined
  };
}
