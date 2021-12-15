import React from "react";
import "./style.css";
import * as image from "../../../utils/image";
import DetailEvent from "../DetailEvent/DetailEvent";

export default function Gathering(props) {
  const { data } = props;
  if( !data )return  <div className='coming-soon'>
  <img src={image.comingSoon} alt='img-coming-soon' />
</div>

  return (
    <section className='container'>
      {data.length >= 1 ? (
        <section>
          {/*<img src={image.comingSoon} alt='img-coming-soon' />*/}
          <section className='content-gathering'>
            <DetailEvent data={data} />
          </section>
        </section>
      ) : (
        <div className='coming-soon'>
        <img src={image.comingSoon} alt='img-coming-soon' />
    </div>
      )}
    </section>
  );
}