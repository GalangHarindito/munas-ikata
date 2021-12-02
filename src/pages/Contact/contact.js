import React, { useEffect } from "react";
import "./style.css";
import * as image from "../../utils/image";
import ContactUs from "../../component/form/contactUs/ContactUs";
import StickySponsor from "../../component/stickySponsor/StickySponsor";
import icperson from '../../assets/Landing Page-Iconly-Light-Profile.svg';
import icWhatssapp from '../../assets/Landing Page-Vector.svg'
import icMail from '../../assets/Landing Page-Iconly-Light-Message.svg'

export default function Contact() {
  const contactPerson = [
    { name: "Okky Chandra", phoneNum: "082149122112", email: "okkychandra1981@gmail.com" },
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
              <span><img src={icperson} alt='' /><p>{el.name}</p></span>
              <span><img src={icWhatssapp} alt='' /><p>{el.phoneNum}</p></span>
              <span><img src={icMail} alt='' /><p>{el.email}</p></span>
            </div>
          );
        })}
      </div>
    );
  };

  const content =(
      <div className='contentBody'>
          <div className="contentBody2">
          <h3>Kirim Pesan</h3>
            <ContactUs />
          </div>
          <div className="contentBody3">
            <h3>Kontak Panitia</h3>
            {table()}
            <br />
          </div>
        </div>
  )

  return (
    <>
    <StickySponsor />
    <section className='contact'>
      <div className='header'>
        <img src={image.campus} alt='img-campus' />
      </div>
      <div> 
      {content}
      </div>
    </section>
    </>
  );
}
