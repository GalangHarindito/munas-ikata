import React from 'react';
import "./style.css";
import * as image from '../../../utils/image';

export default function Golf() {
  return(
    <section className='event-compete'>
      <img src={image.comingSoon} alt="img-coming-soon" />
    </section>
  )
}