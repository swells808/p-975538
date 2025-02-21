
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features as FeaturesSection } from "@/components/sections/Features";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
