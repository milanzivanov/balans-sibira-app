import Link from "next/link";
import Image from "next/image";
import { Title } from "@/components/title";

import { FaArrowCircleRight } from "react-icons/fa";

export default async function Page() {
  return (
    <section className="w-full h-[calc(100vh-105px)] bg-[url('/siberian-nature.jpg')] bg-cover bg-bottom relative before:absolute before:inset-0 before:bg-black before:opacity-30 flex flex-col items-center justify-center gap-6">
      <div className="relative z-10 text-center">
        <Image
          src="/title-logo.svg"
          alt="Balans Sibira logo"
          width={700}
          height={150}
          className="mx-auto"
        />
      </div>
      <div className="relative z-10">
        <Link href="/posts">
          <span className="flex items-center bg-blue-500 text-white px-5 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Svi proizvodi
            <span className="flex ml-2">
              <FaArrowCircleRight size={24} />
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
