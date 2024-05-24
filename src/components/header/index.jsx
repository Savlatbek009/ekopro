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
            <a href="#">Haqimizda</a>
            <a href="#">Sertifikat</a>
            <a href="#">Rasmlar</a>
            <a href="#">Bog`lanish</a>
          </div>
          <div className="action">
            <button>Bog`lanish</button>
          </div>
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
            <a href="#">Haqimizda</a>
            <a href="#">Sertifikat</a>
            <a href="#">Rasmlar</a>
            <a href="#">Bog`lanish</a>
          </div>
          <div className="action">
            <button>Bog`lanish</button>
          </div>
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
