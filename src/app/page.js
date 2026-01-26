import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Globe from "../components/Globe";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Globe />
      <Products />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
