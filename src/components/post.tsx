import { PortableText } from "next-sanity";
import Image from "next/image";

import { Author } from "@/components/author";
import { Categories } from "@/components/categories";
import { components } from "@/sanity/portableTextComponents";
import { POST_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/published-at";
import { Title } from "@/components/title";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

import { FaCartArrowDown } from "react-icons/fa";

export function Post(props: NonNullable<POST_QUERYResult>) {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="grid lg:grid-cols-12 gap-y-6 sm:gap-y-8 lg:gap-y-12 p-4 sm:p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl">
      <header className="lg:col-span-12 flex flex-col gap-3 sm:gap-4 items-start">
        <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
          <Categories categories={categories} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <Title>{title}</Title>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure className="lg:col-span-4 flex flex-col gap-4 items-start w-full">
          <Image
            src={urlFor(mainImage)
              .width(800)
              .height(800)
              .quality(85)
              .auto("format")
              .url()}
            width={800}
            height={800}
            alt={title || "Post image"}
            className="rounded-lg object-cover w-full h-auto bg-gray-100 dark:bg-gray-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            loading="lazy" // or "eager" if above fold
          />
          <div className="flex justify-start w-full">
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#1b88c3] hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-center py-3 px-6 sm:px-10 rounded-lg transition-colors font-semibold text-sm sm:text-base w-full sm:w-auto"
            >
              <span>Poruči</span>
              <FaCartArrowDown className="ml-2" />
            </Link>
          </div>
        </figure>
      ) : null}
      {body ? (
        <div className="lg:col-span-7 lg:col-start-6 prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none">
          <PortableText value={body} components={components} />
        </div>
      ) : null}
    </article>
  );
}
