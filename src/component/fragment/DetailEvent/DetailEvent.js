import React from "react";
import "./style.css";

export default function DetailEvent(props) {
  const { data } = props;

  return (
    <section className='detail-event'>
      {data.map((el,idx) => {
        return(
        <div key={idx}>
        <h3>{el.header}</h3>
        <div style={data.length > 1 ? {borderBottom:'0.1rem solid #C4C4C4'} : {}}>
          <img src={(el.poster)} alt='' />
          <div>
            <p>{el.description}</p>
            <p>Tanggal : {el.tanggal}</p>
            <p>Waktu : {el.waktu}</p>
            <p>Tempat : {el.tempat}</p>
            <p>Waktu Pendaftaran: {el.pendaftaran}</p>
            <p>Contact Person : {el.contactPerson}</p>
            <br />
            {el.register && <a href={el.register}>Daftar</a>}
          </div>
   
        </div>
      </div>
        )
      })}

    </section>
  );
}
