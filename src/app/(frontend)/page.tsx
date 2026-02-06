import Link from "next/link";
import { Title } from "@/components/title";

import { FaArrowCircleRight } from "react-icons/fa";

export default async function Page() {
  return (
    <section className="w-full bg-gray-300 grid grid-cols-1 gap-6 py-12">
      <div className="container max-w-6xl mx-auto ">
        <Title>Balans sibira</Title>
      </div>
      <div className="container max-w-6xl mx-auto ">
        <Link href="/posts">
          <span className="flex items-center justify-start">
            Svi proizvodi{" "}
            <span className="inline-block ml-2">
              <FaArrowCircleRight size={24} />
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
