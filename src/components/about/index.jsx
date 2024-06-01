import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.scss";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h1 className="section_title" data-aos="fade-up" data-aos-delay="1100">
          Biz haqimizda
        </h1>
        <div className="row">
          <div className="text_side">
            <h1 data-aos="fade-up" data-aos-delay="1200">
              Biz shu sohada 10yildan beri faoliyat yurutib kelamiz
            </h1>
            <p data-aos="fade-up" data-aos-delay="1300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              labore iste quasi aut cupiditate nisi eveniet corporis ducimus
              nobis maiores!
            </p>
            <br />
            <p data-aos="fade-up" data-aos-delay="1400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              labore iste quasi aut cupiditate nisi eveniet corporis ducimus
              nobis maiores!
            </p>
            <button data-aos="fade-up" data-aos-delay="1500">
              Bog`lanish
            </button>
          </div>
          <div className="img_side">
            <LazyLoadImage
              data-aos="fade-up"
              data-aos-delay="1600"
              src="/images/jpg/about.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
