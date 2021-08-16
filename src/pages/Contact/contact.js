import React, { useEffect } from "react";
import "./style.css";
import * as image from "../../utils/image";
import ContactUs from "../../component/form/contactUs/ContactUs";

export default function Contact() {
  const contactPerson = [
    { name: "Galang Harindito", phoneNum: "081349241901", email: "galang.harindito@gmail.com" },
    { name: "Name 2", phoneNum: "0814XXX", email: "XXXXX@XXX.com" },
    { name: "Name 3", phoneNum: "0814XXX", email: "XXXXX@XXX.com" },
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
    <section className='contact'>
      <div className='header'>
        <img src={image.campusCrop} alt='img-campus' />
      </div>
      <div className='body'>
        <h2>Contact Us</h2>
        <div className='contentBody'>
          <div>
          <h4>Email</h4>
            <ContactUs />
          </div>
          <div className="contentBody3">
            <h4>Kontak Panitia</h4>
            {table()}
            <br />
            <small style={{color:'red', fontWeight: 500, fontSize:'0.8rem'}}>*Untuk menghubungi nomer telepon harap menggunakan chat whatsapp</small>
          </div>
        </div>
      </div>
    </section>
  );
}
