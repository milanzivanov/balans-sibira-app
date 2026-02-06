import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/post";

import { notFound } from "next/navigation";
import Link from "next/link";

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
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}
