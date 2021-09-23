import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import * as image from '../../utils/image';

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
      <nav >
        <div className={`${navbar ? "scroll_color" : "no-scroll"}`} >
         <div className='nav-container'>
          <img src={image.munas3} alt='munas-logo' />
        </div>
        <div className={`bar-menu ${menuBar? 'change' : ''}`} onClick={() => menuButton()}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
        <div className={`nav-menu ${menuBar?'nav-menu' : 'hidden'}`}>
          <ul>
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to='/'>Home</Link>
            </li>
            <li className={splitLocation[1] === "tentangMunas" ? "active" : ""}>
              <Link to='/tentangMunas'>Tentang Munas 2021</Link>
            </li>
            <li className={splitLocation[1] === "events" ? "active" : ""}>
              <Link to='/events'>Events</Link>
            </li>
            <li className={splitLocation[1] === "contactUs" ? "active" : ""}>
              <Link to='/contactUs'>Contact Us</Link>
            </li>
          </ul>
        </div>
        </div>

      </nav>
    </header>
  );
}
