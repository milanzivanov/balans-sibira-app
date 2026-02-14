import { PropsWithChildren } from "react";

export function Title(props: PropsWithChildren) {
  return (
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 dark:text-gray-100 text-pretty tracking-wider">
      {props.children}
    </h1>
  );
}
