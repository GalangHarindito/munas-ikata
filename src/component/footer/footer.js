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
          Jl. Kemang Raya No.43, RT.9/RW.1, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
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