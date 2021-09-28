import React from "react";
import "./style.css";
import * as image from "../../../utils/image";
import DetailEvent from "../DetailEvent/DetailEvent";

export default function Golf(props) {
  const { data } = props;

  return (
    <section className='golf'>
      {data.length >= 1 ? (
        <section>
          <img src={image.comingSoon} alt='img-coming-soon' />
          <section className='content-golf'>
            <DetailEvent data={data} />
          </section>
        </section>
      ) : (
        <img src={image.comingSoon} alt='img-coming-soon' />
      )}
    </section>
  );
}
