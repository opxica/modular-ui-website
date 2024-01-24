import Banner from "@/components/Banner";
import Features from "@/components/Features";
import { Navbar } from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
    </div>
  );
}
