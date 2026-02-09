import { PropsWithChildren } from "react";

export function Title(props: PropsWithChildren) {
  return (
    <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-blue-900 text-pretty tracking-wider">
      {props.children}
    </h1>
  );
}
