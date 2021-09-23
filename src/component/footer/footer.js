import React from "react";
import "./style.css";
import ikata from "../../assets/img-ikata.png";
import scYoutube from "../../assets/sc-youtube.svg";
import scInstagram from "../../assets/sc-instagram.svg";
import scWeb from "../../assets/sc-web.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <section className='container-footer'>
          <section className='content1'>
            <div>
              <img src={ikata} alt='ikata-logo' />
              <div>
                <p>Ikatan Alumni Tambang UPN "Veteran" Yogyakarta</p>
              </div>
            </div>

            <p>
              Jl. Kemang Raya No.43, RT.9/RW.1, Bangka, Kec. Mampang Prpt., Kota
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730
            </p>
          </section>

          <section className='socmed'>
            <a href='https://www.instagram.com/munasikata2021/'>
              <img src={scInstagram} alt='' />
            </a>
            <a href='https://www.youtube.com/channel/UCd-fUSOU5V8Mz1rUf2m0SfA/videos'>
              <img src={scYoutube} alt='' />
            </a>
            <a href='https://ikata.or.id/'>
              <img src={scWeb} alt='' />
            </a>
          </section>
        </section>
      </footer>
      <section className='credit-title'>
        <i className='fa fa-copyright'></i> <span>copyright 2021</span>
      </section>
    </>
  );
}
