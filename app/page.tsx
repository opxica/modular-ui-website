import Header from "@/components/Header";

export default function Home() {
  return (
    <div className=" h-[2000px] bg-black">
      <section>
        <Header />
        <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-sf-pro-rounded-medium bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl text-transparent sm:text-5xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
