import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import "./style.scss";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="container">
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
