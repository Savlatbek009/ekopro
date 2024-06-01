import { useEffect } from "react";
import Contact from "./components/contact";

import AOS from "aos";

import "aos/dist/aos.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Header />
      <div style={{ height: "88.27px" }}></div>
      <Hero />
      <About />
      <Contact />
    </>
  );
};

export default App;
