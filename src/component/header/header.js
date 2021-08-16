import React, { useEffect, useState } from "react";
import "./style.css";
import munas from "../../assets/img-munas-3.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [navbar, setNavbar] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

  const changeBackground = () => {
    if (window.pageYOffset > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const menuButton = () => {
    setMenuBar(!menuBar);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header>
      <nav className={navbar ? "scroll_color" : "no-scroll"}>
        <div className='nav-container'>
          <img src={munas} alt='munas-logo' />
          <h4>MUNAS IKATA 2021</h4>
        </div>
        <div className={`bar-menu ${menuBar? 'change' : ''}`} onClick={() => menuButton()}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
        <div className={`nav-menu`}>
          <ul>
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to='/'>Home</Link>
            </li>
            <li className={splitLocation[1] === "munas" ? "active" : ""}>
              <Link to='/'>Munas 2021</Link>
            </li>
            <li className={splitLocation[1] === "event" ? "active" : ""}>
              <a href='/event'>Event</a>
            </li>
            <li className={splitLocation[1] === "contactUs" ? "active" : ""}>
              <Link to='/contactUs'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
