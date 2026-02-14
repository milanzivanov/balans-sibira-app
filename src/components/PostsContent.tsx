"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";
import { Categories } from "@/components/categories";
import type { POSTS_QUERYResult, CATEGORIES_QUERYResult } from "@/sanity/types";

type PostsContentProps = {
  posts: POSTS_QUERYResult;
  categories: CATEGORIES_QUERYResult;
};

const colorClasses: Record<string, string> = {
  green: "bg-green-500 hover:bg-green-600",
  orange: "bg-orange-500 hover:bg-orange-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  purple: "bg-purple-500 hover:bg-purple-600",
  red: "bg-red-500 hover:bg-red-600",
  yellow: "bg-yellow-500 hover:bg-yellow-600"
};

export default function PostsContent({ posts, categories }: PostsContentProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredPosts = activeFilter
    ? posts.filter((post) =>
        post.categories.some((cat) => cat.slug?.current === activeFilter)
      )
    : posts;

  return (
    <>
      {/* Filter Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all ${
              activeFilter === null
                ? "bg-blue-900 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Svi proizvodi
          </button>
          {categories.map((category) => {
            const colorClass =
              colorClasses[category.color || "blue"] ||
              "bg-blue-500 hover:bg-blue-600";
            const isActive = activeFilter === category.slug?.current;

            return (
              <button
                key={category._id}
                onClick={() => setActiveFilter(category.slug?.current || null)}
                className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all ${
                  isActive
                    ? `${colorClass} text-white shadow-lg`
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Nema proizvoda u ovoj kategoriji.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPosts.map((post) => (
            <div
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              key={post._id}
            >
              <div className="flex gap-2 p-5">
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
                <h3 className="font-bold text-blue-900 dark:text-gray-100 line-clamp-1 text-lg mb-5">
                  {post.title}
                </h3>

                <Link
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-[#1b88c3] hover:bg-blue-900 text-white py-3 rounded-lg transition-colors font-semibold"
                  href={`/posts/${post?.slug?.current}`}
                >
                  <span className="font-medium">Detaljnije</span>
                  <FaArrowCircleRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}
