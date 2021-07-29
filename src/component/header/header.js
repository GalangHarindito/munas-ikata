import React, { useEffect, useState } from "react";
import "./style.css";
import ikata from "../../assets/img-ikata.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header>
      <nav className={navbar ? "scroll_color" : "no-scroll"}>
        <div className='nav-container'>
          <img src={ikata} alt='ikata-logo' />
          <h4>MUNAS IKATA 2021</h4>
        </div>
        <div className='nav-menu'>
          <ul>
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to='/'>Home</Link>
            </li>
            <li className={splitLocation[1] === "event" ? "active" : ""}>
              <a href='#event'>Event</a>
            </li>
            <li className={splitLocation[1] === "kontak" ? "active" : ""}>
              <Link to='/event '>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
