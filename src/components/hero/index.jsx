import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import "./style.scss";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="container">
          <center>
            <h2 data-aos="fade-up">Seolit</h2>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quibusdam!
            </p>
            <button data-aos="fade-up">Hoziroq buyurtma berish</button>
          </center>
          <center>
            <h1
              onClick={() => {
                window.scrollTo({
                  top: 600,
                  behavior: "smooth",
                });
              }}
            >
              <MdKeyboardDoubleArrowDown />
            </h1>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Hero;
