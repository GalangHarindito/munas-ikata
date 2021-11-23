import React, { useEffect, useState, useContext, useRef } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import * as image from '../../utils/image';
import axios from 'axios';
import { Context } from '../../store';
import useOutsideClick from "./useOutsideClick";
import { URL } from "../../utils/fetch";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [navbar, setNavbar] = useState(false);
  const [menuBar, setMenuBar] = useState(false);
  const [state, dispatch] = useContext(Context);

  const getdataCandidate = () => {
  
    const options = {
      method: 'GET',
      url: `${URL}candidate`,
      headers: {  
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YmY1NTY3OS0yZWQ1LTRmYTgtYjFjNS1jNjg4YjBiYmRlMGEiLCJpYXQiOjE2MzI5NzExNTIsImV4cCI6MTYzMzE0Mzk1Mn0.g_e6cg7P_hCT9YiBNmadzlZJaaUKD1NH-cs-MiIs25Y'
      }
    };

    axios(options)
    .then((res) => {
      const { status, data } = res.data;

      dispatch({type:'CANDIDATE', payload:data})

    })
    .catch(err => {
      const { status, message } = err.response.data
      //if(status === 401){
      //  window.location.href = '/login'
      //}
      //const messageStatus = status > 401 && status <= 500 ? 'Sedang ada masalah, silahkan refresh halaman' : message;
    });


}
useEffect(() => {
getdataCandidate()
},[])

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

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (menuBar) setMenuBar(false);
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
        <div className={`nav-menu ${menuBar?'nav-menu' : 'hidden'}`} ref={ref}>
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
            <li className='login-button'>
              <a href="https://evoting.munasikataupn.com">Login</a>
            </li>
          </ul>
        </div>
        </div>

      </nav>
    </header>
  );
}
