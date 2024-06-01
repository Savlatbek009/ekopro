import "./style.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-black">
        <div className="hero-container">
          <div className="row">
            <div className="text_side">
              <h1 data-aos="fade-up" data-aos-delay="1000">
                Seliolit
              </h1>
              <p data-aos="fade-up" data-aos-delay="1100">
                Seliolit bu lorem ipsum dolor sit amet consectetur adipisicing{" "}
                elit. Quibusdam deleniti.
              </p>
              <button data-aos="fade-up" data-aos-delay="1200">
                Bog`lanish
              </button>
            </div>
            <div data-aos="fade-up" data-aos-delay="1300" className="img_side">
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <LazyLoadImage
                    effect="blur"
                    width={"100%"}
                    src="/images/jpg/seolit2.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <LazyLoadImage
                    effect="blur"
                    width={"100%"}
                    src="https://www.jalonzeolite.com/wp-content/uploads/elementor/thumbs/1-1-1-pu23m0ktj7ty6360kmpt4a1wtaq3wwbss7d56ttehs.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <LazyLoadImage
                    effect="blur"
                    width={"100%"}
                    src="https://www.jalonzeolite.com/wp-content/uploads/elementor/thumbs/s02-img-10-1-pu23m1inq1v8hp4nf54fortdeolh4lfj4c0mo3s0bk.jpg"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
