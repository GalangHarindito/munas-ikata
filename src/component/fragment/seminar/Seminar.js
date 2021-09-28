import React from 'react';
import "./style.css";
import * as image from '../../../utils/image';
import DetailEvent from "../DetailEvent/DetailEvent";

export default function Seminar(props) {
  const { data } = props;
  console.log(data)
  return(
    <section className='seminar'>
      {data.length >= 1 ? (
        <section>
          <section className='content-seminar'>
            <DetailEvent data={data} />
          </section>
        </section>
      ) : (
        <img src={image.comingSoon} alt='img-coming-soon' />
      )}
    </section>
  )
}