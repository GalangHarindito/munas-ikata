import React from "react";
import "./style.css";
import * as image from '../../../utils/image';
import * as imageEvents from '../../../utils/eventImage'

export default function DetailEvent(props) {
  const { data } = props;

  return (
    <section className='detail-event'>
      {data.map((el,idx) => {
        return(
        <div key={idx}>
        <h3>{el.header}</h3>
        <div style={data.length > 1 ? {borderBottom:'0.1rem solid #C4C4C4', paddingBottom:'1rem'} : {}}>
          {/*<div className='image-events' style={{backgroundImage:`url(${el.poster ? el.poster : image.golf2 })`}} ></div>*/}
          <a href={el.poster ? imageEvents[el.imagePoster] : image.munas5} download><img src={`${el.poster ? el.poster : image.munas5 }`} alt="" download /></a>
          {/*<a href="">Download Poster</a>*/}
  
          <div>
            <p>{el.description}</p>
            <p>Tanggal : {el.tanggal || '-'}</p>
            <p>Waktu : {el.waktu || '-'}</p>
            <p>Tempat : {el.tempat || '-'}</p>
            <p>Waktu Pendaftaran: {el.pendaftaran || '-'}</p>
            <p>Contact Person : {el.contactPerson || '-'}</p>
            <br />
            {el.register && <a href={el.register} target='_blank'>Daftar</a>}
          </div>
   
        </div>
      </div>
        )
      })}

    </section>
  );
}
