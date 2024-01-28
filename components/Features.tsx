import SparklesCore from "./ui/sparkles";
import Spotlight from "./ui/Spotlight";
import { FaBolt, FaCubes, FaListUl, FaMaximize, FaSliders } from "react-icons/fa6";
const Features = () => {
  return (
    <div className="mx-auto max-w-screen-lg space-y-12 px-4 pb-40 sm:px-6 sm:pb-44 lg:items-center lg:px-8">
      <div className="text-md relative mx-auto flex w-fit items-center justify-center space-x-2 rounded-full bg-neutral-800 p-1 pr-3 font-sf-pro-rounded-regular text-neutral-100">
        <span className="rounded-full bg-neutral-700 p-1">
          <FaBolt size={18} />
        </span>
        <span>Features</span>
        <div className="absolute h-fit w-full">
          <SparklesCore
            id="tsparticlesfeatures"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
      <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
        <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800/50 p-10 transition hover:border-neutral-700/50">
          <Spotlight className="absolute h-fit w-full" />
          <div className="flex h-full w-full">
            <div className="text-start">
              <div>
                <FaCubes size={20} className="mb-2 text-neutral-100" />
              </div>
              <h3 className="font-sf-pro-rounded-medium text-xl text-neutral-100">
                Rich Components
              </h3>
              <p className="mt-4 font-sf-pro-rounded-regular text-neutral-400">
                Explore a variety of ready-to-use components such as buttons,
                cards, and input fields, offering extensive customization
                options to seamlessly integrate into every layout of your
                Flutter application.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800/50 p-10 transition hover:border-neutral-700/50">
          <div className="flex h-full w-full">
            <div className="text-start">
              <div>
                <FaSliders size={20} className="mb-2 text-neutral-100" />
              </div>
              <h3 className="font-sf-pro-rounded-medium text-xl text-neutral-100">
                Custom Theming
              </h3>
              <p className="mt-4 font-sf-pro-rounded-regular text-neutral-400">
                Dive into our advanced theming system that allows users to
                effortlessly customize the look of their user interface. Choose
                from vibrant color palettes and font options to bring your
                application to life.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800/50 p-10 transition hover:border-neutral-700/50">
          <div className="flex h-full w-full">
            <div className="text-start">
              <div>
                <FaMaximize
                  size={20}
                  className="mb-2 text-neutral-100"
                />
              </div>
              <h3 className="font-sf-pro-rounded-medium text-xl text-neutral-100">
                Responsive Layout Components
              </h3>
              <p className="mt-4 font-sf-pro-rounded-regular text-neutral-400">
                Utilize components designed for responsive layouts, ensuring
                seamless adaptability across various devices including phones
                and tablets. Create consistent user experiences that dynamically
                adjust to different screen sizes.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800/50 p-10 transition hover:border-neutral-700/50">
          <div className="flex h-full w-full">
            <div className="text-start">
              <div>
                <FaListUl size={20} className="mb-2 text-neutral-100" />
              </div>
              <h3 className="font-sf-pro-rounded-medium text-xl text-neutral-100">
                Explore Clear Documentation
              </h3>
              <p className="mt-4 font-sf-pro-rounded-regular text-neutral-400">
                Discover clear, interactive documentation directly integrated
                into our library. Dive into guides, examples, and live demos for
                efficient understanding and enhanced development.Elevate your
                development experience with accessible and user-friendly
                documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
