import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";

import "../../globals.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import BackToTopButton from "@/components/BackToTopButton";
import PostsContent from "@/components/PostsContent";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });

  return (
    <main className="container max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 tracking-wider mb-8">
        Balans ponuda
      </h1>

      <PostsContent posts={posts} categories={categories} />

      <div className="flex justify-start items-center">
        <Link
          href="/"
          rel="noopener noreferrer"
          className="flex items-center bg-[#1b88c3] hover:bg-blue-900 text-white text-center py-3 px-10
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
