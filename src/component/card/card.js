import React from "react";
import {Link} from "react-router-dom"
import "./style.css";

export default function Card(props) {
  const data = props.data;
  const backgroundColor = data.backgroundColor
  return (
    <div className='card-container'>
      {data.map((elem, id) => {
        return (
          <div className='card' key={id}>
            <a>
              <div className='card--display'>
                <img src={elem.image} alt={elem.alt} />
                <div className="line" />
                <div className='card-title'>
              <p>{elem.title}</p>
            </div>
              </div>
              <section className='card--hover'>
                <h2>{elem.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at est orci. Nam molestie pellentesque mi nec lacinia.
                  Cras volutpat arcu sit amet elit sodales, nec volutpat velit
                  bibendum.
                </p>
                <p className='link' style={{color:'#000'}}>Lihat Detail</p>
              </section>
            </a>
            {/*<section class='card--border'></section>*/}
          </div>
        );
      })}
    </div>
  );
}
