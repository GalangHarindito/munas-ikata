import React, { useEffect } from "react";
import "./style.css";
import * as image from "../../utils/image";
import ContactUs from "../../component/form/contactUs/ContactUs";
import StickySponsor from "../../component/stickySponsor/StickySponsor";

export default function Contact() {
  const contactPerson = [
    { name: "Catur Gunadi", phoneNum: "081327166124", email: "cgndta92@gmail.com" },
    { name: "Andriyan Harizona", phoneNum: "081368675431", email: "ucupharizona@gmail.com" },
    { name: "Andi Haristiawan", phoneNum: "082153178877", email: "andi.haristiawan@gmail.com  " },
  ];

  const onbeforeunload = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    onbeforeunload()
  })

  const table = () => {
    return (
      <div className='contactPerson'>
        {contactPerson.map((el, idx) => {
          return (  
            <div key={idx} className={`person${idx+1}`}>
              {el.name ==='Andi Haristiawan' && <h3>Kontak Sponsorship</h3>}
              <span><i className="fa fa-user"></i><p>{el.name}</p></span>
              <span><i className='fa fa-whatsapp'></i><p>{el.phoneNum}</p></span>
              <span><i className="fa fa-envelope"></i><p>{el.email}</p></span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
    <StickySponsor />
    <section className='contact'>
      <div className='header'>
        <img src={image.campusCrop} alt='img-campus' />
      </div>
      <div className='body'>
        <h2>Contact Us</h2>
        <div className='contentBody'>
          <div className="contentBody2">
          <h3>Kirim Pesan</h3>
            <ContactUs />
          </div>
          <div className="contentBody3">
            <h3>Kontak Panitia</h3>
            {table()}
            <br />
            <small>*Untuk menghubungi nomer telepon harap menggunakan chat whatsapp</small>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
