import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import "./style.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      {isOpen ? (
        <div className="open">
          <div className="navigations">
            <a onClick={() => setIsOpen(false)} href="#about">
              Haqimizda
            </a>
            <a onClick={() => setIsOpen(false)} href="#sertificatte">
              Sertifikat
            </a>
            <a onClick={() => setIsOpen(false)} href="#photos">
              Rasmlar
            </a>
          </div>
          <a href="#contact" className="action">
            <button>Bog`lanish</button>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <nav>
          <a href="/" className="logo">
            <img src="/images/logo/logo.png" alt="logo" /> <h1>Ekopro</h1>
          </a>

          <div className="navigations">
            <a onClick={() => setIsOpen(false)} href="#">
              Haqimizda
            </a>
            <a onClick={() => setIsOpen(false)} href="#">
              Rasmlar
            </a>
            <a onClick={() => setIsOpen(false)} href="#">
              Sertifikat
            </a>
          </div>
          <a href="#contact" className="action">
            <button>Bog`lanish</button>
          </a>
          <div className="menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <img width={"30px"} src="/images/png/x.png" alt="" />
            ) : (
              <GiHamburgerMenu />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
