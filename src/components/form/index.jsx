import InputMask from "react-input-mask";

import "./style.scss";

const RegisterForm = () => {
  return (
    <form name="register-form">
      <div data-aos="fade-up" className="register-input">
        <input name="firstName" type="text" required />
        <label>Ismingiz</label>
      </div>
      <div data-aos="fade-up" className="register-input">
        <InputMask
          className="register-mask-input"
          name="phoneNumber"
          mask={`+\\9\\98-99-999-99-99`}
          placeholder="Your Phone"
          maskChar=""
          defaultValue="+998-("
          type="text"
        />
        {/* <label>Your Phone</label> */}
      </div>
      <button
        data-aos="fade-up"
        className="register-form__button"
      >{`Buyurtma berish`}</button>
    </form>
  );
};

export default RegisterForm;
