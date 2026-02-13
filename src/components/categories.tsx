import { POST_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<POST_QUERYResult>["categories"];
};

const colorClasses: Record<string, string> = {
  green: "bg-green-500",
  orange: "bg-orange-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500"
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => {
    const colorClass = colorClasses[category.color || "blue"] || "bg-blue-500";

    return (
      <span
        key={category._id}
        className={`${colorClass} rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-white`}
      >
        {category.title}
      </span>
    );
  });
}
