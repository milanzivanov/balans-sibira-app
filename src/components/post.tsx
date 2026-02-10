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

import { FaArrowCircleRight } from "react-icons/fa";

export function Post(props: NonNullable<POST_QUERYResult>) {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="grid lg:grid-cols-12 gap-y-12">
      <header className="lg:col-span-12 flex flex-col gap-4 items-start">
        <div className="flex gap-4 items-center">
          <Categories categories={categories} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <Title>{title}</Title>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure className="lg:col-span-4 flex flex-col gap-2 items-start">
          <Image
            src={urlFor(mainImage).width(400).height(400).url()}
            width={400}
            height={400}
            alt=""
          />
          <Link
            href="https://wa.me/381649646048"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-blue-800 hover:bg-blue-900 text-white text-center py-3 px-10
             rounded-lg transition-colors font-semibold"
          >
            <span>Poruči</span>
            <FaArrowCircleRight className="ml-2" />
          </Link>
        </figure>
      ) : null}
      {body ? (
        <div className="lg:col-span-7 lg:col-start-6 prose lg:prose-lg">
          <PortableText value={body} components={components} />
        </div>
      ) : null}
    </article>
  );
}
