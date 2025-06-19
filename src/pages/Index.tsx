import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ImageCarousel from "@/components/ImageCarousel";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ImageCarousel />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
