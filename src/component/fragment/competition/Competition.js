import React from 'react';
import "./style.css";
import * as image from '../../../utils/image';
import DetailEvent from "../DetailEvent/DetailEvent";

export default function Competition(props) {
  const { data }= props;
  return(
    <section className='competition'>
      {data.length >= 1 ? (
        <section>
          <section className='content-competition'>
            <DetailEvent data={data} />
          </section>
        </section>
      ) : (
        <img src={image.comingSoon} alt='img-coming-soon' />
      )}
    </section>
  )
}