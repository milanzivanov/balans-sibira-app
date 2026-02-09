import { POST_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<POST_QUERYResult>["categories"];
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      key={category._id}
      className="bg-blue-400 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-white"
    >
      {category.title}
    </span>
  ));
}
