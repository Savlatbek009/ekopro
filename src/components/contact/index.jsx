import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import RegisterForm from "../form";
import "./style.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__row">
          <div className="contact__row__side contact__row__side--left">
            <h1>Bog'lanish</h1>
            <RegisterForm />
          </div>
          <div className="contact__row__side contact__row__side--right">
            <div className="contact__content">
              <iframe
                data-aos="fade-up"
                data-aos-delay="1300"
                src="https://yandex.ru/map-widget/v1/-/CDfmBHPq"
                width="100%"
                height="300px"
              ></iframe>
              <br />
              <div className="contact__details">
                <a
                  data-aos="fade-up"
                  data-aos-delay="1300"
                  href="https://t.me/savlatbek_coder"
                >
                  <FaTelegramPlane /> {`Telegramdan bog'lanish`}
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-delay="1300"
                  href="tel: +998990440807"
                >
                  <BsFillTelephoneFill /> +998990440807
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
