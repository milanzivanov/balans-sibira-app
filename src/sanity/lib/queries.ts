import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]
  |order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "...",
  "categories": categories[]->{_id, slug, title, color},
  "author": author->{name, image}
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title,
      color
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const CATEGORIES_QUERY =
  defineQuery(`*[_type == "category"]|order(title asc){
  _id,
  title,
  slug,
  color
}`);
