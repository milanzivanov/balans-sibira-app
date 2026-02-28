import Image from 'next/image'

 const HeroSection = () => {
  return (
          <section className="w-full h-dvh relative flex flex-col items-center justify-center gap-6 px-4 -mt-17 sm:-mt-[99.1px] pt-17 sm:pt-[99.1px]">
            <Image
              fill
              src={"/siberian-nature.jpg"}
              alt="siberian wild"
              className="object-cover"
              priority
              quality={75}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
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
    
              <p className="bg-white/80 dark:bg-gray-900/80 font-bold text-gray-900 dark:text-gray-100 text-xs sm:text-base md:text-md max-w-full sm:max-w-100 mx-auto mt-4 text-center tracking-wide rounded-2xl px-4 sm:px-3 py-3">
                Balans nije samo reč, balans je stil života. <br />
                Zato budi u svom balansu!
              </p>
            </div>
          </section>
  )
}


export default HeroSection
