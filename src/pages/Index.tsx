import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Team />
      <Pricing />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <Disclaimer />
    </div>
  );
};

export default Index;
