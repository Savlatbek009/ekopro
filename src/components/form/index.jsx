import InputMask from "react-input-mask";

import "./style.scss";

const RegisterForm = ({ closeModal, category, successCallback, endpoint }) => {
  //   const [loading, setLoading] = useState(false);
  //   const submit = (e) => {
  //     e.preventDefault();
  //     const form = document.forms["register-form"];
  //     const body = new FormData(form);
  //     body.append("category", category || "consultation");
  //     setLoading(true);
  //     fetch(
  //       endpoint ||
  //         "https://script.google.com/macros/s/AKfycbwZm9Htkji73_aDgExr-kk3mJYBnpJ8-WnVtyscKG2mVAkJkg_9CHTDoWxid2D3Ae5r/exec",
  //       { method: "POST", body }
  //     )
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then(({ row }) => {
  //         toast.success("Muvaffaqqiyatli ro'yxatdan o'tdingiz");
  //         closeModal?.();
  //         successCallback?.({ form, row });
  //       })
  //       .catch((error) => toast.error(error.message))
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   };
  return (
    <form name="register-form">
      <div className="register-input">
        <input name="firstName" type="text" required />
        <label>Ismingiz</label>
      </div>
      <div className="register-input">
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
      <button className="register-form__button">{`Buyurtma berish`}</button>
    </form>
  );
};

export default RegisterForm;
