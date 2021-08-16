import React, { useEffect } from "react";
import "./style.css";
import Card from "../../component/card/card";
import Sponsor from "../../component/sponsor/Sponsor";
import video1 from "../../assets/vid-ikata-1.mp4";
import * as image from "../../utils/image";
import { Link } from "react-router-dom";

export default function Landing() {
  const cardEvent = [
    {
      image: image.vote,
      alt: "vote",
      title: "MUNAS IKATA",
      backgroundColor: "#dcf3fe",
    },
    {
      image: image.golf,
      alt: "golf",
      title: "IKATA Golf Tournament",
      backgroundColor: "#38b6ff",
    },
    {
      image: image.competition,
      alt: "competition",
      title: "IKATA Competition",
      backgroundColor: "#737373",
    },
    {
      image: image.gathering,
      alt: "gathering",
      title: "IKATA Gathering",
      backgroundColor: "#ffde59",
    },
    {
      image: image.workshop,
      alt: "workshop",
      title: "IKATA workshop",
      backgroundColor: "#dcf3fe",
    },
    {
      image: image.seminar,
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
          <h2>Apa itu MUNAS IKATA ?</h2>
        </section>
        <section className='content-munas'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
          nibh varius velit aliquet, eget rutrum dolor suscipit. Donec
          sollicitudin odio in nisi accumsan, ac rhoncus tortor auctor. Nam
          semper nisi quis purus convallis, aliquam maximus nibh cursus. Sed
          eget arcu lorem. Sed quis neque venenatis, suscipit lorem et, placerat
          orci. Pellentesque sollicitudin risus et justo pulvinar venenatis.
          Aliquam eu velit non erat tempus ornare nec ut dolor. Suspendisse
          ornare nisi nulla, non blandit arcu mollis vitae. Etiam convallis
          pulvinar tellus et sagittis. Praesent venenatis tortor lectus, at
          semper nisl lacinia sed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum gravida velit vel vehicula venenatis.
          Etiam pulvinar dolor in imperdiet ullamcorper. Curabitur sollicitudin
          dapibus ipsum sit amet aliquam. Sed pulvinar, lectus nec mollis
          pharetra, sem urna molestie ante, sit amet mattis augue massa ac
          lectus. Curabitur accumsan tortor elit, at accumsan eros rutrum eget.
          Praesent sagittis mollis ex a facilisis. Pellentesque gravida placerat
          purus, ut ullamcorper diam vehicula ut. Proin at nibh bibendum ex
          porttitor laoreet. Duis sodales tempus placerat. Quisque ultrices id
          lectus quis volutpat. Vestibulum interdum tincidunt sollicitudin.
          Nullam at mattis libero. Sed sed massa dolor. Proin non felis eu massa
          finibus sagittis. Nunc eget est eget ex tincidunt vulputate ut at
          nunc. Integer vel lobortis neque. Aliquam feugiat sollicitudin
          posuere. Maecenas vel iaculis odio. Nulla convallis pellentesque
          libero a eleifend. Nullam in pellentesque lacus. Maecenas turpis
          neque, posuere eu nibh vitae, fermentum bibendum odio. Sed sed tempus
          purus, eu varius augue. Nunc tristique rhoncus odio vitae interdum.
          Nunc ante nibh, interdum gravida bibendum ut, pellentesque dignissim
          purus. Morbi in libero ex. Mauris at dapibus sapien, a porta augue.
          Etiam vehicula non mi eget iaculis. Quisque ultrices est vel massa
          efficitur mattis. In fermentum auctor mauris non consectetur. Morbi
          sem justo, scelerisque sit amet varius id, egestas in justo.
          Pellentesque a quam augue. Aliquam mattis tincidunt augue, non tempor
          quam laoreet sed. Nunc posuere erat turpis, ac ullamcorper nisi
          blandit id. Mauris tempus libero nec tellus maximus fermentum. Etiam
          vehicula quis mauris quis pellentesque. Pellentesque in metus in dolor
          ullamcorper ornare eu eget sapien. Aliquam efficitur, metus vitae
          pellentesque mollis, justo augue volutpat purus, quis commodo orci
          turpis a sapien. Sed eget felis vel libero luctus interdum a nec
          justo. Cras ornare non massa eget elementum. Donec aliquet ante
          sapien, id tristique nisl dignissim interdum. Mauris semper aliquam
          leo in placerat. Sed vitae pharetra nibh.
        </section>
      </div>
      <div className='pengurus'>
        <div className='container' id='pengurus-ikata'>
          <section className='title-event' style={{ fontSize: "2rem" }}>
            <h2>Pengurus IKATA 2017 - 2021</h2>
          </section>
          <br />
          <div className='video-pengurus'>
            <iframe
              width='700'
              autoplay='false'
              height='395'
              src={video1}
              title='Ikata video player'
              frameBorder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className='container-event' id='event'>
        <section className='title-event' style={{ fontSize: "2rem" }}>
          <h2>Events</h2>
        </section>
        <Card data={cardEvent} />
        <section className='title-event'>
          <h2>And Manymore...</h2>
        </section>
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
    </section>
  );
}
