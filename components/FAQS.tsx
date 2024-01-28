import SparklesCore from "./ui/sparkles";
import { FaCirclePlus, FaQuestion } from "react-icons/fa6";
const FAQS = () => {
  return (
    <div id="faqs" className="mx-auto max-w-screen-lg space-y-12 px-4 pb-40 sm:px-6 sm:pb-44 lg:items-center lg:px-8">
      <div className="text-md relative mx-auto flex w-fit items-center justify-center space-x-2 rounded-full bg-neutral-800 p-1 pr-3 font-sf-pro-rounded-regular text-neutral-100">
        <span className="rounded-full bg-neutral-700 p-1">
          <FaQuestion size={18} />
        </span>
        <span>FAQs</span>
        <div className="absolute h-fit w-full">
          <SparklesCore
            id="tsparticlesfaqs"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
      <div className="divide-y divide-neutral-800/50 rounded-2xl border border-neutral-800 bg-neutral-800/50">
        <details
          className="group p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="group flex cursor-pointer items-center justify-between gap-1.5 text-neutral-100 hover:text-neutral-100/85">
            <h2 className="text-md font-sf-pro-rounded-medium sm:text-lg">
              How to use Modular UI?
            </h2>
            <div className="block text-nowrap group">
              <FaCirclePlus size={20} />
            </div>
          </summary>

          <p className="mt-4 font-sf-pro-rounded-regular leading-relaxed text-neutral-400">
            To use Modular UI, follow the detailed steps outlined in our
            official documentation. We provide comprehensive guides to help
            seamlessly integrate Modular UI into your Flutter project.
          </p>
        </details>
        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="group flex cursor-pointer items-center justify-between gap-1.5 text-neutral-100 hover:text-neutral-100/85">
            <h2 className="text-md font-sf-pro-rounded-medium sm:text-lg">
              What are the main features of Modular UI?
            </h2>
            <div className="block text-nowrap group">
              <FaCirclePlus size={20} />
            </div>
          </summary>

          <p className="mt-4 font-sf-pro-rounded-regular leading-relaxed text-neutral-400">
            Modular UI offers a variety of features, including rich components,
            custom theming, integrated state management, and smooth animations.
            Explore our documentation to learn more about each feature.
          </p>
        </details>
        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="group flex cursor-pointer items-center justify-between gap-1.5 text-neutral-100 hover:text-neutral-100/85">
            <h2 className="text-md font-sf-pro-rounded-medium sm:text-lg">
              How do I manage dependencies for Modular UI in my Flutter project?
            </h2>
            <div className="block text-nowrap group">
              <FaCirclePlus size={20} />
            </div>
          </summary>

          <p className="mt-4 font-sf-pro-rounded-regular leading-relaxed text-neutral-400">
            Managing dependencies for Modular UI is straightforward. Refer to
            our documentation, where we provide clear instructions on adding
            Modular UI to your Flutter project using package management tools
            like Pub.
          </p>
        </details>
        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="group flex cursor-pointer items-center justify-between gap-1.5 text-neutral-100 hover:text-neutral-100/85">
            <h2 className="text-md font-sf-pro-rounded-medium sm:text-lg">
              How to contribute to Modular UI?
            </h2>
            <div className="block text-nowrap group">
              <FaCirclePlus size={20} />
            </div>
          </summary>

          <p className="mt-4 font-sf-pro-rounded-regular leading-relaxed text-neutral-400">
            We welcome contributions! Check our GitHub contribution guide for
            step-by-step instructions. Your suggestions and contributions are
            valuable in enhancing Modular UI.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQS;
