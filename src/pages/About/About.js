import React from "react";
import "./style.css";
import * as image from "../../utils/image";
import * as text from "../../component/text/text";

export default function About() {
  return (
    <section className='about'>
      <div className='header'>
        <img src={image.campusCrop} alt='img-campus' />
      </div>
      <div className='container' id='munas'>
        <section className='title-event' style={{ fontSize: "2rem" }}>
          <h2>Apa itu MUNAS IKATA ?</h2>
        </section>
        <section className='content-munas'>
          <div className='question'>
            <img src={image.question} alt='img-question' />
          </div>
          <div className='text'>{text.ikata1}</div>
        </section>
        <section className='content-munas'>
          <div className='text'>{text.ikata2}</div>
          <div className='evoting'>
            <img src={image.evoting} alt='img-question' />
          </div>
        </section>
        <section className='yel'>
          <h3>IKATA TANGGUH !!!</h3>
          <h3>VIVA TAMBANG MANTAP SKALIII !!!</h3>
        </section>
      </div>
    </section>
  );
}
