import React, { useEffect } from "react";
import "./style.css";
import Card from "../../component/card/card";
import Sponsor from "../../component/sponsor/Sponsor";
import video1 from "../../assets/vid-ikata-1.mp4";
import video2 from "../../assets/vid-ikata-2.mp4";
import * as image from "../../utils/image";
import { ketua } from "../../utils/image";
import { Link } from "react-router-dom";
import { podcast } from "../../utils/videoPodcast";

export default function Landing() {
  const cardEvent = [
    {
      image: image.vote,
      alt: "vote",
      title: "MUNAS IKATA",
      backgroundColor: "#dcf3fe",
      path: "/tentangMunas"
    },
    {
      image: image.golf,
      alt: "golf",
      title: "IKATA Golf Tournament",
      backgroundColor: "#38b6ff",
      path: "/events?tab=golf",
    },
    {
      image: image.competition,
      alt: "competition",
      title: "IKATA Competition",
      backgroundColor: "#737373",
      path: "/events?tab=competition",
    },
    {
      image: image.seminar,
      alt: "seminar",
      title: "IKATA National Seminar / Webinar",
      backgroundColor: "#dcf3fe",
      path: "/events?tab=seminar/webinar",
    },
    {
      image: image.workshop,
      alt: "workshop",
      title: "IKATA workshop",
      backgroundColor: "#dcf3fe",
      path: "/events?tab=workshop",
    },
    {
      image: image.gathering,
      alt: "gathering",
      title: "IKATA Gathering",
      backgroundColor: "#ffde59",
      path: "/events?tab=gathering",
    },
  ];

  useEffect(() => {
    //timer()
  }, []);

  const onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onbeforeunload();
  });

  const vidPodcast = () => {
    return (
      <>
        {podcast.map((el) => {
          return el.image;
        })}
      </>
    );
  };

  

  const _renderKetua = () => {
    return (
      <>
        {ketua.map((el, idx) => {
          return (
            <div className='card-ketua' key={idx}>
              <img src={el.image} alt={el.name} />
              <p>{el.name}</p>
              <p>{el.angkatan}</p>
              <p>{el.periode}</p>
          </div>
          ) 
        })}
      </>
    );
  };

  //const timer = () => {
  //  // Set the date we're counting down to
  //  var countDownDate = new Date('Sep 1, 2021 16:00:00').getTime();

  //  // Update the count down every 1 second
  //  var x = setInterval(function () {
  //    // Get today's date and time
  //    var now = new Date().getTime();

  //    // Find the distance between now and the count down date
  //    var distance = countDownDate - now;

  //    // Time calculations for days, hours, minutes and seconds
  //    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //    var hours = Math.floor(
  //      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //    );
  //    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //    // Display the result in the element with id='demo'
  //    document.getElementById('demo').innerHTML =
  //      days + 'd : ' + hours + 'h : ' + minutes + 'm : ' + seconds + 's ';

  //    // If the count down is finished, write some text
  //    if (distance < 0) {
  //      clearInterval(x);
  //      document.getElementById('demo').innerHTML = 'EXPIRED';
  //    }
  //  }, 1000);
  //};

  //const heroBg = {
  //  backgroundImage: `url(${hero4})`,
  //  opacity: '13%',
  //};

  return (
    <section className='main' id='home'>
      <div className='maincontent' id='parallax'>
        <section className='content-hero'>
          <div className='content-hero-1'>
            {/*<h2>MUSYAWARAH NASIONAL</h2>
            <h2>Ikatan Alumni Tambang UPN 'Veteran' Yogyakarta</h2>
            <h3>Desember 2021</h3>*/}
            {/*<h2 id='demo' />*/}
            <img className='icon-munas' src={image.munas1} alt='img-munas' />
            <img
              className='icon-munas-mobile'
              src={image.munas2}
              alt='img-munas'
            />
            <h1
              className='icon-munas-mobile'
              style={{
                color: "#fff",
                fontWeight: "600",
                marginTop: "1rem",
                width: "100%",
              }}
            >
              MUSYAWARAH NASIONAL 6 IKATA
            </h1>
            <h2
              className='icon-munas-mobile'
              style={{
                color: "#fff",
                fontWeight: "600",
                width: "100%",
                marginBottom: "1rem",
              }}
            >
              UPN 'Veteran' YOGYAKARTA
            </h2>
            <h2 style={{ color: "#fff", fontWeight: "600" }}>DESEMBER 2021</h2>
            <section className='img-content1'>
              <img src={image.ikata} alt='img-ikata' />
              <img src={image.upn} alt='img-upn' />
            </section>
          </div>
          {/*<div className='icon-president'>
            <img src={president} alt='img-president' />
          </div>*/}
          <svg
            viewBox='0 0 1853 500'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <path
              fill='rgba(134,206,206,1)'
              d='M 0 0 C 468.5 0 468.5 110 937 110 L 937 110 L 937 0 L 0 0 Z'
              stroke-width='0'
            ></path>{" "}
            <path
              fill='rgba(134,206,206,1)'
              d='M 936 110 C 951.5 110 951.5 110 967 110 L 967 110 L 967 0 L 936 0 Z'
              stroke-width='0'
            ></path>{" "}
            <path
              fill='#86cece'
              d='M 966 110 C 981.5 110 981.5 110 997 110 L 997 110 L 997 0 L 966 0 Z'
              stroke-width='0'
            ></path>
            <path
              fill='#86cece'
              d='M 996 110 C 1011.5 110 1011.5 110 1027 110 L 1027 110 L 1027 0 L 996 0 Z'
              stroke-width='0'
            ></path>
            <path
              fill='#86cece'
              d='M 1026 110 C 1041.5 110 1041.5 110 1057 110 L 1057 110 L 1057 0 L 1026 0 Z'
              stroke-width='0'
            ></path>
            <path
              fill='#86cece'
              d='M 1056 110 C 1454.5 110 1454.5 0 1853 0 L 1853 0 L 1853 0 L 1056 0 Z'
              stroke-width='0'
            ></path>
          </svg>
        </section>
      </div>

      <div className='container' id='munas'>
        <section className='title-event' style={{ fontSize: "2rem" }}>
          <h2>Ketua IKATA</h2>
        </section>
        <section className='ketua-ikata'>{_renderKetua()}</section>
        {/*<section className='yel'>
          <h3>IKATA TANGGUH !!!</h3>
          <h3>VIVA TAMBANG MANTAP SKALIII !!!</h3>
        </section>*/}
      </div>
      <div className='pengurus'>
        <div className='container' id='pengurus-ikata'>
          <section className='title-event' style={{ fontSize: "2rem" }}>
            {/*<h2>Pengurus IKATA 2017 - 2021</h2>*/}
          </section>
          <br />
          <div className='video-pengurus'>
            <video
              width='700'
              height='395'
              src={video1}
              title='Ikata video player'
              frameBorder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              controls
            ></video>
             <video
              width='700'
              height='395'
              src={video2}
              title='Ikata video player'
              frameBorder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              controls
            ></video>
          </div>
        </div>
      </div>

      <div className='podcast'>
        <div className='container' id='podcast-ikata'>
          <section className='title-event' style={{ fontSize: "2rem" }}>
            <h2>Podcast IKATA</h2>
          </section>
          <br />
          <div className='podcast-pengurus'>{vidPodcast()}</div>
          <div className='podcast-footer'>
            <a href='https://www.youtube.com/channel/UCd-fUSOU5V8Mz1rUf2m0SfA/videos'>
              Lihat video lainnya
            </a>
          </div>
        </div>
      </div>

      <div className='sponsorship'>
        <div className='container'>
          <section className='title-event' style={{ fontSize: "2rem" }}>
            <h2>Sponsor Acara</h2>
          </section>
          <Sponsor />
          <section className='title-event'>
            <br />
            <p>
              Ingin bergabung sebagai sponsor ?
              <span>
                <Link to='/contactUs'>hubungi kami</Link>
              </span>
            </p>
          </section>
        </div>
      </div>

      <div className='container-event' id='event'>
        <section className='title-event' style={{ fontSize: "2rem" }}>
          <h2>Events</h2>
        </section>
        <Card data={cardEvent} />
        <section className='title-event'></section>
      </div>
    </section>
  );
}
