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
            <RegisterForm />
          </div>
          <div className="contact__row__side contact__row__side--right">
            <div className="contact__content">
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
                quia?
              </h1>
              <div className="contact__details">
                <a href="https://t.me/savlatbek_coder">
                  <FaTelegramPlane /> {`Telegramdan bog'lanish`}
                </a>
                <a href="tel: +998990440807">
                  <BsFillTelephoneFill /> +998 732 23 34
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
