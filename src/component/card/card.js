import React from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom'

export default function Card(props) {
  const data = props.data;
  let width = '50'
  if(window.screen.width <= 700 && window.screen.width >= 551){
    width = '50'
  }
  if(window.screen.width <= 550){
    width = '70'
  }
  if(window.screen.width <= 375){
    width = '90'
  }
  return (
    <>
      <div className='card-container'>
        {data.map((elem, id) => {
          return (
            <div className='card' key={id}>
              <div className='box-card' href='/'>
                <div className='card--display'>
                  <img src={elem.image} alt={elem.alt} />
                  <div className='line' />
                  <div className='card-title'>
                    <p>{elem.title}</p>
                  </div>
                </div>
                <section className='card--hover'>
                  <h2>{elem.title}</h2>
                  <p>
                    {elem.desc}
                  </p>
                  <Link className='link' style={{ color: "#000" }} to={elem.path}>
                    Lihat Detail
                  </Link>
                </section>
              </div>
              {/*<section class='card--border'></section>*/}
            </div>
          );
        })}
      </div>

      <Carousel
        //centerMode
        //centerSlidePercentage= {width}
        swipeable
        //autoPlay={false}
        showArrows={false}

      >
        {data.map((elem, id) => {
          return (
            <div className='card' key={id}>
              <div className='box-card' href='/'>
                <div className='card--display'>
                  <img src={elem.image} alt={elem.alt} />
                  <div className='line' />
                  <div className='card-title'>
                    <p>{elem.title}</p>
                  </div>
                </div>
                <section className='card--hover'>
                  <h2>{elem.title}</h2>
                  <p>
                    {elem.desc}
                  </p>
                  <br />
                  <Link to={elem.path} style={{ color: "#000" }}>
                    Lihat Detail
                  </Link>
                </section>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
