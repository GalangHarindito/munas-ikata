import React from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Card(props) {
  const data = props.data;

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam at est orci. Nam molestie pellentesque mi nec
                    lacinia. Cras volutpat arcu sit amet elit sodales, nec
                    volutpat velit bibendum.
                  </p>
                  <p className='link' style={{ color: "#000" }}>
                    Lihat Detail
                  </p>
                </section>
              </div>
              {/*<section class='card--border'></section>*/}
            </div>
          );
        })}
      </div>

      <Carousel
        centerMode
        centerSlidePercentage='70'
        infiniteLoop
        swipeable
        autoPlay='false'
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam at est orci. Nam molestie pellentesque mi nec
                    lacinia. Cras volutpat arcu sit amet elit sodales, nec
                    volutpat velit bibendum.
                  </p>
                  <p className='link' style={{ color: "#000" }}>
                    Lihat Detail
                  </p>
                </section>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
