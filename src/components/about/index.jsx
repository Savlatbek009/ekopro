import "./style.scss";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Write a compelling description about your company, mission, and values.
        Highlight what makes you unique and why users should choose you.
      </p>
      <img src="./team.jpg" alt="Our Team" className="team-image" />
      <h2>Meet the Team</h2>
      <p>
        Introduce your team members with their roles and expertise. You can use
        cards or a list format.
      </p>
      <button className="contact-btn">Contact Us</button>
    </div>
  );
};

export default About;
