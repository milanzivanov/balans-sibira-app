import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import type { POSTS_QUERYResult } from "@/sanity/types";

import "../../globals.css";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaArrowCircleRight } from "react-icons/fa";
// import { Categories } from "@/components/categories";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="container max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-900 tracking-wider mb-8">
        Nasi proizvodi
      </h1>
      <ul className="grid grid-cols-3 gap-6 mb-8">
        {posts.map((post: POSTS_QUERYResult[number]) => (
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            key={post._id}
          >
            <div className="flex justify-center items-center relative h-64 bg-gray-200">
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
              <h3 className="font-bold text-blue-900 line-clamp-1 text-lg mb-5">
                {post.title}
              </h3>

              <Link
                rel="noopener noreferrer"
                className="flex justify-center items-center bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-lg transition-colors font-semibold"
                href={`/posts/${post?.slug?.current}`}
              >
                <span>Detaljnije</span>
                <FaArrowCircleRight className="ml-2" />
              </Link>
            </div>
          </div>

          // <li key={post._id} className="group">
          //   <Link
          //     className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50"
          //     href={`/posts/${post?.slug?.current}`}
          //   >
          //     <div className="flex justify-between gap-4 p-4">
          //       <div className="p-4 flex-1">
          //         <div className="md:col-span-2 md:pb-2">
          //           <Categories categories={post.categories} />
          //         </div>
          //         <h2 className="text-md font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
          //           {post.title}
          //         </h2>
          //       </div>

          //       {post.mainImage ? (
          //         <div className="overflow-hidden">
          //           <Image
          //             src={urlFor(post.mainImage).width(200).height(200).url()}
          //             width={200}
          //             height={200}
          //             alt={post.mainImage.alt || post.title || ""}
          //             className=" object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
          //           />
          //         </div>
          //       ) : (
          //         <div className="w-full h-64 bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center">
          //           <span className="text-blue-400 text-sm">Nema slike</span>
          //         </div>
          //       )}
          //     </div>
          //   </Link>
          // </li>
        ))}
      </ul>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        &larr; Vrati se na početak
      </Link>
    </main>
  );
}
