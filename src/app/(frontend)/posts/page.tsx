import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import type { POSTS_QUERYResult } from "@/sanity/types";

import "../../globals.css";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import BackToTopButton from "@/components/BackToTopButton";
import { Categories } from "@/components/categories";
// import { Categories } from "@/components/categories";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="container max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 tracking-wider mb-8">
        Balans ponuda?
      </h1>
      <ul className="grid grid-cols-3 gap-6 mb-8">
        {posts.map((post: POSTS_QUERYResult[number]) => (
          <div
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            key={post._id}
          >
            <div className="flex p-5">
              <Categories categories={post.categories} />
            </div>
            <div className="flex justify-center items-center relative h-64 bg-gray-200 dark:bg-gray-800">
              {post.mainImage ? (
                <div className="overflow-hidden">
                  <Image
                    src={urlFor(post.mainImage).width(200).height(200).url()}
                    width={200}
                    height={200}
                    alt={post.mainImage.alt || post.title || ""}
                    className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                  />
                </div>
              ) : (
                <div className="w-full h-64 bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-blue-400 text-sm">Nema slike</span>
                </div>
              )}
            </div>

            <div className="p-6">
              {/* <div className="mb-2">
                <Categories categories={post.categories} />
              </div> */}
              <h3 className="font-bold text-blue-900 dark:text-gray-100 line-clamp-1 text-lg mb-5">
                {post.title}
              </h3>

              <Link
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg transition-colors font-semibold"
                href={`/posts/${post?.slug?.current}`}
              >
                <span className="font-medium">Detaljnije</span>
                <FaArrowCircleRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </ul>
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
