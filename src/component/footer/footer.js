import React from "react";
import "./style.css";
import ikata from '../../assets/img-ikata.png';

export default function Footer() {
  return (
    <footer>
    <section className='container'>
      <section className='content1'>
        <img src={ikata} alt='ikata-logo' />
        <section className='footer-text'>
          <p>Ikatan Alumni Tambang UPN "Veteran" Yogyakarta</p>
          <p>
            Ruko Malibu Square Blok B No.8 Kel. Lengkong Gudang Serpong
            Tangerang Selatan 15321
          </p>
        </section>
      </section>
      <section className='socmed'>
        <i className='fa fa-instagram'></i>
        <i className='fa fa-facebook'></i>
        <i className='fa fa-youtube'></i>
        <i className='fa fa-twitter'></i>
        <i className='fa fa-globe'></i>
      </section>
      <section className='credit-title'>
        <i className='fa fa-copyright'></i> <span>copyright 2021</span>
        <p>Build & Design by Galang Harindito </p>
      </section>
    </section>
  </footer>
  )
}