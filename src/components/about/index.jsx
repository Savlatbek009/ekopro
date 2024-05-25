import "./style.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about_header">
          <h1 className="section_title">Biz haqimizda</h1>
        </div>
        <div className="about_body">
          <div className="row">
            <div className="row_img">
              <img src="/images/png/mahsulot.png" alt="" />
            </div>
            <div className="row_text">
              <h1>Kilikant</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                voluptates corporis dignissimos. Quae praesentium iusto ut
                quaerat! Voluptate commodi esse dolor rem nemo cum eligendi
                suscipit officia ad, sapiente quasi!
              </p>
              <h1 className="about_use">
                <span>01</span> Lorem, ipsum.
              </h1>
              <h1 className="about_use">
                <span>02</span> Lorem, ipsum.
              </h1>
              <h1 className="about_use">
                <span>03</span> Lorem, ipsum.
              </h1>
              {/* <button>Hoziroq buyurtma qilish</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
