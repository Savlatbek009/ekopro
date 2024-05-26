import { useEffect } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Hero from "./components/hero";
import Photos from "./components/photos";
import Sertificatte from "./components/sertificate";
import AOS from "aos";

import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Photos />
      <Sertificatte />
      <Contact />
    </>
  );
};

export default App;
