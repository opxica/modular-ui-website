import {
  IconArrowBarRight,
  IconGitMerge,
  IconBrandGithub,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-white/75 bg-[url('/banner-pattern.svg')] bg-cover bg-center bg-no-repeat"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="mx-auto max-w-2xl py-36 sm:py-40">
          <Link href="/" className="mb-8 flex justify-center">
            <div className="relative flex items-center rounded-full border border-neutral-700 bg-neutral-800/50 p-0.5 font-sf-pro-rounded-regular text-sm leading-6 text-neutral-100 shadow-inner backdrop-blur">
              <div className="mr-2 flex w-fit items-center gap-1 rounded-full bg-black px-3 py-1 font-sf-pro-rounded-regular">
                <IconGitMerge size={14} />
                <span className="font-sf-pro-rounded-regular text-xs">
                  New feature
                </span>
              </div>
              <div className="mr-2 flex items-center space-x-1 font-sf-pro-rounded-regular text-xs">
                <p>Check our next feature.</p>
                <IconArrowBarRight size={14} />
              </div>
            </div>
          </Link>

          <div className="text-center">
            <h1 className="font-sf-pro-rounded-medium text-4xl font-bold tracking-tight text-neutral-100 sm:text-6xl">
              Instant Flutter Elegance. Consistent by design
            </h1>
            <p className="mt-6 font-sf-pro-rounded-regular text-sm leading-8 text-neutral-300 md:text-lg">
              Create consistent and responsive cross-platform Flutter app
              interfaces in a snap with Modular UI&apos;s flexible building blocks.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                className="text-md flex w-36 items-center justify-center space-x-2 rounded-full border border-neutral-800 bg-gray-100 bg-neutral-800/50 py-2.5 font-sf-pro-rounded-regular text-neutral-100 shadow-xl transition-all hover:border-neutral-500/10 hover:text-neutral-100/75 hover:shadow-neutral-700/10"
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
                className="group relative flex w-36 items-center justify-center overflow-hidden rounded-full border border-neutral-800/50 bg-transparent py-3 text-center font-sf-pro-rounded-regular text-sm text-neutral-100 transition hover:border-neutral-800/85 hover:text-neutral-100/85"
                href="https://github.com/opxica/modular-ui-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <IconStarFilled size={14} className="text-yellow-500" />
                </span>
                <div className="flex items-center space-x-1">
                  <IconBrandGithub size={14} />
                  <span className="transition-all group-hover:me-4">
                    Github Star
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
