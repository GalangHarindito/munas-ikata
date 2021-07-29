import React, { useEffect } from "react";
import "./style.css";
import vote from "../../assets/img-vote-removebg.png";
import golf from "../../assets/img-golf2.jpg";
import competition from "../../assets/img-competion.jpg";
import gathering from "../../assets/img-gathering3.png";
import workshop from "../../assets/img-workshop.jpg";
import seminar from "../../assets/img-seminar2.jpg";
import Card from "../../component/card/card";
import upn from "../../assets/img-upn.png";
import ikata from "../../assets/img-ikata.png";
import president from "../../assets/img-president.jpg";

export default function Landing() {
  const cardEvent = [
    {
      image: vote,
      alt: "vote",
      title: "MUNAS IKATA",
      backgroundColor: "#dcf3fe",
    },
    {
      image: golf,
      alt: "golf",
      title: "IKATA Golf Tournament",
      backgroundColor: "#38b6ff",
    },
    {
      image: competition,
      alt: "competition",
      title: "IKATA Competition",
      backgroundColor: "#737373",
    },
    {
      image: gathering,
      alt: "gathering",
      title: "IKATA Gathering",
      backgroundColor: "#ffde59",
    },
    {
      image: workshop,
      alt: "workshop",
      title: "IKATA workshop",
      backgroundColor: "#dcf3fe",
    },
    {
      image: seminar,
      alt: "seminar",
      title: "IKATA National Seminar / Webinar",
      backgroundColor: "#dcf3fe",
    },
  ];

  useEffect(() => {
    //timer()
  }, []);

  //const timer = () => {
  //  // Set the date we're counting down to
  //  var countDownDate = new Date("Sep 1, 2021 16:00:00").getTime();

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

  //    // Display the result in the element with id="demo"
  //    document.getElementById("demo").innerHTML =
  //      days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ";

  //    // If the count down is finished, write some text
  //    if (distance < 0) {
  //      clearInterval(x);
  //      document.getElementById("demo").innerHTML = "EXPIRED";
  //    }
  //  }, 1000);
  //};

  //const heroBg = {
  //  backgroundImage: `url(${hero4})`,
  //  opacity: "13%",
  //};

  return (
    <section className='main'>
      <div className='maincontent' id='parallax'>
        {/*<div
          className='keyart_layer parallax'
          id='keyart-1'
        ></div>*/}
        <section className='content-hero'>
          <div className='content-hero-1'>
            <h2>MUSYAWARAH NASIONAL</h2>
            <h2>Ikatan Alumni Tambang UPN "Veteran" Yogyakarta</h2>
            <h3>Desember 2021</h3>
            {/*<h2 id='demo' />*/}
            <section className='img-content1'>
              <img src={ikata} alt='img-ikata' />
              <img src={upn} alt='img-upn' />
            </section>
          </div>
          <div className='icon-president'>
            <img src={president} alt='img-president' />
          </div>
          {/*<div className='content-hero-2'>*/}

          {/*<div className="box1">
          <img src={vote} alt="" />
          <p>Pemilihan Ketua IKATA 2021 - 2025</p>
        </div>
        <div className="box2">
          <img src={competition} alt="" />
        </div>
        <div className="box3">
        <img src={golf} alt="" />
        </div>
        <div className="box4"></div>
        <div className="box5">
        <img src={gathering} alt="" />
        </div>*/}

          {/*</div>*/}
        </section>
        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,128L30,117.3C60,107,120,85,180,69.3C240,53,300,43,360,48C420,53,480,75,540,69.3C600,64,660,32,720,26.7C780,21,840,43,900,64C960,85,1020,107,1080,117.3C1140,128,1200,128,1260,128C1320,128,1380,128,1410,128L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
</svg>*/}
      </div>

      <div className='container' id='event'>
        <section className='title-event' style={{ fontSize: "1rem" }}>
          <h2>Apa itu MUNAS IKATA ?</h2>
        </section>
      </div>

      <div className='container' id='event'>
        <section className='title-event' style={{ fontSize: "1rem" }}>
          <h2>Pengurus IKATA 2017 - 2021</h2>
        </section>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sRgnYFIcOjc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      </div>

      <div className='container-event' id='event'>
        <section className='title-event' style={{ fontSize: "1rem" }}>
          <h2>Events</h2>
        </section>
        <Card data={cardEvent} />
        <section className='title-event'>
          <h2>And Manymore...</h2>
        </section>
      </div>



        <div className='sponsorship'>
        <div className='container'>
          <section className='title-event' style={{ fontSize: "1.3rem" }}>
            <h2>Sponsor Acara</h2>
          </section>
          <section className='title-event'>
            <p>
              Ingin bergabung sebagai sponsor?
              <span>
                <a href='#event'>hubungi kami</a>
              </span>
            </p>
          </section>
        </div>
        </div>
    </section>
  );
}
