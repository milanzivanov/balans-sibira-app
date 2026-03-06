import Image from "next/image";
import siberianNature from "../../../public/siberian-nature.jpg";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("home.hero");
  return (
    <section className="w-full h-dvh relative flex flex-col items-center justify-center gap-6 px-4 -mt-17 sm:-mt-[99.1px] pt-17 sm:pt-[99.1px]">
      <Image
        fill
        src={siberianNature}
        alt="siberian wild"
        className="object-cover"
        priority
        quality={75}
        sizes="100vw"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-blue-700 dark:bg-blue-100 opacity-10 dark:opacity-5"></div>
      <div className="relative z-10 px-4">
        <h1>
          {/* Light mode title */}
          <Image
            src="/title-light-mode.svg"
            alt="Balans Sibira logo"
            width={700}
            height={250}
            className="mx-auto dark:hidden max-w-[80vw] sm:max-w-175 lg:max-w-225 xl:max-w-250 h-auto"
          />

          {/* Dark mode title */}
          <Image
            src="/title-dark-mode.svg"
            alt="Balans Sibira light logo"
            width={700}
            height={250}
            className="mx-auto hidden dark:block max-w-[80vw] sm:max-w-175 lg:max-w-225 xl:max-w-250 h-auto"
          />
        </h1>

        <p className="bg-gray-600/80 dark:bg-gray-900/80 font-bold text-xs sm:text-base md:text-md max-w-full sm:max-w-100 mx-auto mt-4 text-center tracking-wide rounded-2xl px-4 sm:px-3 py-3">
          <span
            className="bg-clip-text text-transparent whitespace-pre-line"
            style={{
              backgroundImage:
                "linear-gradient(275.88deg, #b795ff 34.78%, #89fcee 61.59%, #f4fe86 82.83%)"
            }}
          >
            {t("tagline")}
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
