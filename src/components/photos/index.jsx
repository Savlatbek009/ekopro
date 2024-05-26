import { FiArrowUpRight } from "react-icons/fi";
import "./style.scss";
import { GoArrowDown, GoArrowUp, GoArrowUpLeft } from "react-icons/go";

const Photos = () => {
  return (
    <>
      <section id="photos" className="photos">
        <h1 data-aos="fade-up" className="section_title">
          Rasmlar
        </h1>
        <div className="container">
          <div className="row">
            <img data-aos="fade-up" src="/images/jpg/seolit1.jpg" alt="" />
            <div data-aos="fade-up" className="arrow arrow-to-right">
              <div className="appear">
                <GoArrowDown />
              </div>
              <div className="disappear">
                <FiArrowUpRight />
              </div>
            </div>

            <img data-aos="fade-up" src="/images/jpg/seolit2.jpg" alt="" />
            <div data-aos="fade-up" className="arrow arrow-to-left">
              <div className="disappear">
                <GoArrowUpLeft />
              </div>
              <div className="appear">
                <GoArrowUp />
              </div>
            </div>
            <img data-aos="fade-up" src="/images/jpg/about.jpg" alt="" />
          </div>
          <center>
            <button data-aos="fade-up">Yana o`qish</button>
          </center>
        </div>
      </section>
    </>
  );
};

export default Photos;
