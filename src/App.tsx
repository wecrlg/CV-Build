import { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import { documentTitle } from "./data/data";
import { PortfolioContextProvider } from "./utilities/contextAPI";

function App() {
  useEffect(() => {
    document.title = documentTitle;
  }, []);

  return (
    <PortfolioContextProvider>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Testimonial />
      <Footer />
    </PortfolioContextProvider>
  );
}

export default App;
