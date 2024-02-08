import Banner from "@/components/Banner";
import FAQS from "@/components/FAQS";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <FAQS />
      <Footer />
    </div>
  );
}
