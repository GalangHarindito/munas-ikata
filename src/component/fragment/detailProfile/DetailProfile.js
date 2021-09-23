import React from 'react';
import "./style.css";
import * as image from '../../../utils/image';

export default function DetailProfile() {
  return(
    <section className='detailProfile'>
      <img src={image.comingSoon} alt="img-coming-soon" />
    </section>
  )
}