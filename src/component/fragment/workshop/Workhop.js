import React from "react";
import "./style.css";
import * as image from "../../../utils/image";
import DetailEvent from "../DetailEvent/DetailEvent";

export default function Workshop(props) {
  const { data } = props;

  return (
    <section className='workshop'>
      {data.length >= 1 ? (
        <section>
          <section className='content-workshop'>
            <DetailEvent data={data} />
          </section>
        </section>
      ) : (
        <img src={image.comingSoon} alt='img-coming-soon' />
      )}
    </section>
  );
}