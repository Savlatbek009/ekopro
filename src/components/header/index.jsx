import { useState, useEffect } from "react";

import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import logo from "./logo.png";

import "./style.scss";

const Header = () => {
  const [themeDark, setThemeDark] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isShrink = window.scrollY > 100;
      setShrink(isShrink);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${shrink ? "shrink" : ""}`}>
      <div className="container">
        <nav className="nav">
          <button
            className="nav__toggle"
            onClick={() => setHeaderOpen(!headerOpen)}>
            <FaBarsStaggered size={25} />
          </button>
          <div className="nav__logo">
            <a href="/#">
              <img width={"50px"} src={logo} alt="logo" />
            </a>
          </div>
          <ul className={`${headerOpen ? "header-open" : ""}`}>
            <button
              className="nav__close"
              onClick={() => setHeaderOpen(!headerOpen)}>
              <MdClose size={30} />
            </button>
            <li className="nav__item">
              <a
                onClick={() => setHeaderOpen(!headerOpen)}
                to="/about"
                href="#about"
                className="nav__link">
                Haqimizda
              </a>
            </li>

            <li className="nav__item">
              <a
                onClick={() => setHeaderOpen(!headerOpen)}
                href="/#photos"
                className="nav__link">
                {`Rasmlar`}
              </a>
            </li>
            {/* <li className="nav__item">
              <a
                onClick={() => setHeaderOpen( !headerOpen )}
                to='/#projects'
                href="#projects"
                className="nav__link"
              >
                Proyektlar
              </a>
            </li> */}
            <li className="nav__item">
              <a
                onClick={() => setHeaderOpen(!headerOpen)}
                to="/#service"
                href="#service"
                className="nav__link">
                Xizmatlar
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={() => setHeaderOpen(!headerOpen)}
                href="/#contact"
                className="nav__link">
                {`Bog'lanish`}
              </a>
            </li>
          </ul>
          <div className="nav__actions">
            <button
              onClick={() => {
                // document.body.classList.toggle( "dark" );
                setThemeDark(!themeDark);
              }}>
              {themeDark ? <FaSun size={20} /> : <BsMoonFill size={20} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
