import "./style.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about_header">
          <h1 className="section_title">Haqimizda</h1>
        </div>
        <div className="about_body">
          <center className="row_img">
            <img src="/images/jpg/about.jpg" alt="" />
          </center>
          <div className="row_text">
            <h1>Silikant</h1>
            <center>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                voluptates corporis dignissimos. Quae praesentium iusto ut
                quaerat! Voluptate commodi esse dolor rem nemo cum eligendi
                suscipit officia ad, sapiente quasi!
              </p>
            </center>
            <h1 className="about_use">
              <span>01</span> Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi, provident?
            </h1>
            <h1 className="about_use">
              <span>02</span> Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi, provident?
            </h1>
            <h1 className="about_use">
              <span>03</span> Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi, provident?
            </h1>
            <center>
              <button>Hoziroq buyurtma qilish</button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
