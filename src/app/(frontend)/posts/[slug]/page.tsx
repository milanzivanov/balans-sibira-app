import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/post";

import { notFound } from "next/navigation";
import Link from "next/link";

import { FaArrowCircleLeft } from "react-icons/fa";
import BackToTopButton from "@/components/BackToTopButton";

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
    <main className="container max-w-6xl mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
      <hr />
      <div className="flex justify-end items-center">
        <Link
          href="/"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-800 hover:bg-blue-900 text-white text-center py-3 px-10
             rounded-lg transition-colors font-semibold"
        >
          <FaArrowCircleLeft className="mr-2" />
          <span>Vrati se na početak</span>
        </Link>
      </div>
      <BackToTopButton />
    </main>
  );
}
