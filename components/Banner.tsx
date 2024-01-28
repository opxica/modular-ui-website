import Image from "next/image";
import Link from "next/link";
import { FaCodeBranch, FaStar } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[url('/banner-pattern.svg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="mx-auto max-w-2xl py-40 sm:py-44">
          <Link href="https://github.com/opxica/modular-ui" target="_blank" className="mb-8 flex justify-center">
            <div className="relative flex items-center rounded-full border border-neutral-800/50 bg-neutral-800/50 p-0.5 font-sf-pro-rounded-regular text-sm leading-6 text-neutral-100 shadow-inner backdrop-blur transition-all hover:border-neutral-700">
              <div className="mr-2 flex w-fit items-center gap-1 rounded-full bg-black px-3 py-1 font-sf-pro-rounded-regular">
                <FaCodeBranch size={10} />
                <span className="font-sf-pro-rounded-regular text-xs">
                  New feature
                </span>
              </div>
              <div className="mr-2 flex items-center font-sf-pro-rounded-regular text-xs">
                <p>Check our next feature.</p>
              </div>
            </div>
          </Link>

          <div className="text-center">
            <h1 className="font-sf-pro-rounded-medium text-4xl tracking-tight text-neutral-100 sm:text-5xl md:text-6xl">
              Instant Flutter Elegance. Consistent by design
            </h1>
            <p className="md:text-md mt-6 font-sf-pro-rounded-medium text-sm leading-8 text-neutral-300 sm:px-16">
              Create consistent and responsive cross-platform Flutter app
              interfaces in a snap with Modular UI&apos;s flexible building
              blocks.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-8">
              <Link
                className="text-md flex w-36 items-center justify-center gap-2 rounded-full border border-neutral-800 bg-gray-100 bg-neutral-800/50 py-3 font-sf-pro-rounded-regular text-neutral-100 transition-all hover:border-neutral-500/10 hover:text-neutral-100/75 hover:shadow-xl hover:shadow-neutral-700/10"
                href="https://pub.dev/packages/modular_ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/dart-logo.png"
                  width={14}
                  height={14}
                  alt="dart logo"
                />
                <span className="font-sf-pro-rounded-regular">pub.dev</span>
              </Link>
              <Link
                className="text-md flex items-center justify-center gap-2 rounded-full font-sf-pro-rounded-regular text-neutral-100 transition hover:text-neutral-100/75"
                href="https://github.com/opxica/modular-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaStar size={16} className="text-[#E3B341]" />
                <span className="">Github star</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
