
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full bg-black opacity-80 text-white">
          <Navbar />
        </div>
      </div>
    </main>
  );
}