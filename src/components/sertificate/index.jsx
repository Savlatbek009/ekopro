import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import "./style.scss";
const Sertificatte = () => {
  return (
    <section id="sertificatte">
      <h1 data-aos="fade-up" className="section_title">
        Sertifikat
      </h1>
      <div className="container">
        <center>
          <div className="sertificatte-img">
            <div className="arrow">
              <FiArrowUpRight />
              <br />
              <b>ISO</b>
            </div>
            <img
              data-aos="fade-up"
              width={"300px"}
              src="https://www.belgelendirme.com/images/so-9001-nasl.jpg"
              alt=""
            />

            <div className="arrow">
              <FiArrowUpLeft />
              <br />
              <b>SERTIFIKATI</b>
            </div>
          </div>
          <br />
          <p data-aos="fade-up">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            aut repudiandae reiciendis, unde aliquid ratione aperiam consectetur
            quia sequi debitis! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sed blanditiis perferendis molestias dolore.
          </p>
        </center>
      </div>
    </section>
  );
};

export default Sertificatte;
