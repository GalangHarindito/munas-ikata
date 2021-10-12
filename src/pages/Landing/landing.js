import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import Card from "../../component/card/card";
import Sponsor from "../../component/sponsor/Sponsor";
import video3 from "../../assets/video6.mp4"
import * as image from "../../utils/image";
import { ketua } from "../../utils/image";
import { Link } from "react-router-dom";
import { podcast } from "../../utils/videoPodcast";
import StickySponsor from "../../component/stickySponsor/StickySponsor";
import { Carousel } from "react-responsive-carousel";
import CardCandidate from "../../component/cardCandidate/cardCandidate";
import DPT from "../../component/DPT/DPT";
import Balon from "../../component/Balon/Balon";


export default function Landing() {
  const [ontime]   = useState(false);
  const [dpt] = useState(true)
  const [calon] = useState(true)

  

  const cardEvent = [
    {
      image: image.vote,
      alt: "vote",
      title: "MUNAS IKATA",
      backgroundColor: "#dcf3fe",
      desc: 'Merupakan acara inti dari dari acara MUNAS IKATA 2021. Sidang AD/ART hingga pemilihan Ketua IKATA 2021-2025',
      path: "/tentangMunas",
    },
    {
      image: image.golf,
      alt: "golf",
      title: "IKATA Golf Tournament",
      backgroundColor: "#38b6ff",
      desc:'Acara yang mempertemukan para peng-hobi olahraga golf. Acara ini selalu diadakan tiap MUNAS IKATA.',
      path: "/events?tab=golf",
    },
    {
      image: image.competition,
      alt: "competition",
      title: "IKATA Competition",
      backgroundColor: "#737373",
      desc:'Kompetisi untuk para kompetitor. Mulai dari Mobile legend hingga kompetisi sepeda virtual',
      path: "/events?tab=competition",
    },
    {
      image: image.seminar,
      alt: "seminar",
      title: "IKATA National Seminar / Webinar",
      backgroundColor: "#dcf3fe",
      desc:'Mulai dari tahun ini acara seminar akan diadakan berbasis online atau webinar, yang pasti tema yang up to date dan narasumber yang up to date.',
      path: "/events?tab=seminar/webinar",
    },
    {
      image: image.workshop,
      alt: "workshop",
      title: "IKATA workshop",
      backgroundColor: "#dcf3fe",
      desc:'Sama dengan seminar yang tahun ini sebagian besar diadakan seraca online. Workshop pun akan dilakukan secara online',
      path: "/events?tab=workshop",
    },
    {
      image: image.gathering,
      alt: "gathering",
      title: "IKATA Gathering",
      backgroundColor: "#ffde59",
      desc:'Acar kumpul-kumpul seluruh anggota IKATA, yang pasti tak terlupakan. Acara yang selalu dinanti oleh seluruh anggota IKATA.',
      path: "/events?tab=gathering",
    },
  ];

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
            <>
              <div className='card-ketua' key={idx}>
                <div>
                  <div>
                    <div>
                      <img src={el.image} alt={el.name} />
                    </div>
                    <br />
                    <p>{el.name}</p>
                    <p>{el.periode}</p>
                  </div>
                  <span>
                    <img src={image.icArrow} alt='' />
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  const _renderKetuaCarousel = () => {
    return (
      <>
      <Carousel dragable={true} showArrows={false}>
        {ketua.map((el, idx) => {
          return (
            <>
              <div className='card-ketua' key={idx}>
                <div>
                  <div>
                    <div>
                      <img src={el.image} alt={el.name} />
                    </div>
                    <br />
                    <p>{el.name}</p>
                    <p>{el.periode}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        </Carousel>
      </>
    );
  };

  //const _renderVideo = () => {
  //  return (
  //    <div>
  //      <h2>MUNAS 6 IKATA </h2>
  //      <p>
  //        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //        eiusmod tempor incididunt ut l. abore et dolore magna aliqua. Ut enim
  //        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //        aliquip ex ea commodo consequat. Duis aute irure dolor in
  //        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //        culpa qui officia deserunt mollit anim id est laborum.
  //      </p>
  //      {/*<Carousel autoPlay>
  //    <div className='video-pengurus'>
  //      <video
  //        width='700'
  //        height='395'
  //        src={video1}
  //        title='Ikata video player'
  //        frameBorder='0'
  //        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  //        allowFullScreen
  //        controls
  //      ></video>
  //      </div>
  //      <div className='video-pengurus'>
  //        <video
  //        width='700'
  //        height='395'
  //        src={video2}
  //        title='Ikata video player'
  //        frameBorder='0'
  //        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  //        allowFullScreen
  //        controls
  //      ></video>
  //      </div>
  //      </Carousel>*/}
  //    </div>
  //  );
  //};

  return (
    <>
      <StickySponsor />

      <section className='main' id='home'>
        <div className='maincontent' id='parallax'>
          <section className='content-hero'>
            <div className='content-hero-1'>
              <div>
                <h3>
                  Selamat Datang di MUNAS ke-6 IKATA UPN “Veteran” Yogyakarta
                  Desember 2021
                </h3>
                <p>
                Selamat datang di official website Musyawarah Nasional Ikatan Alumni Teknik Pertambangan (Munas Ikata) UPN Veteran Yogyakarta yang ke-6 tahun 2021. Website ini dibuat sebagai sarana untuk memberikan beragam informasi terkait rangkaian kegiatan Munas Ikata ke-6 tahun 2021. Kami dari panitia pelaksana secara aktif terus berinovasi dalam pelaksanaan Munas Ikata yang akan di laksanakan secara hybrid (daring dan luring). Website ini juga nantinya akan menjadi sarana e-voting untuk pemilihan ketua Ikata periode selanjutnya. Mari bersama sukseskan Musyawarah Nasional Ikatan Alumni Teknik Pertambangan Upn Veteran Yogyakarta ke-6, di Yogyakarta pada bulan Desember 2021.
                </p>
                <Link to='/tentangMunas'>Tentang MUNAS IKATA</Link>
              </div>

              <div>
                <img
                  className='icon-munas-1'
                  src={image.munas2}
                  alt='img-munas'
                />
                <img
                  className='icon-munas-2'
                  src={image.munas4}
                  alt='img-munas'
                />
                <h4 style={{ color: "#000", fontWeight: "600" }}>
                  DESEMBER 2021
                </h4>
                <section className='img-content1'>
                  <img src={image.ikata} alt='img-ikata' />
                  <img src={image.upn} alt='img-upn' />
                </section>
              </div>
            </div>
            {/*<div className='icon-president'>
            <img src={president} alt='img-president' />
          </div>*/}
          </section>
        </div>
        <div className='pendaftaran' style={{display: dpt? 'block' : 'none'}}>
          <div className='container'>
            <DPT />
          </div>
        </div>

        <div className='sponsorship'>
          <div className='container'>
            <section className='title' style={{ fontSize: "2rem" }}>
              <h3>SPONSOR ACARA</h3>
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
        <div className='candicate-ketua' style={{display: ontime? 'block' : 'none'}}>
          <div className='container'>
          <section className='title' style={{ fontSize: "2rem" }}>
            <h3>CALON KETUA IKATA 2021 - 2025</h3>
            <p>
            Pemilihan ketua IKATA perode 2021 telah dibuka! Berikut adalah nama calon ketua IKATA
            </p>
            </section>
            <CardCandidate />
          </div>
        </div>

        <div className='ketua'>
          <div className='container' id='munas'>
            <section className='title' style={{ fontSize: "2rem" }}>
              <h3>KETUA IKATA</h3>
            </section>
            <section className='ketua-ikata'>{_renderKetua()}</section>
            <section className='ketua-ikata-carousel'>
             
              {_renderKetuaCarousel()}
            
            </section>
          </div>
        </div>
        <div className='pengurus'>
          <div className='container' id='pengurus-ikata'>
            <div className='pengurus-group'>
              <div>
                <video
                  width='700'
                  height='395'
                  src={video3}
                  title='Ikata video player'
                  frameBorder='0'
                  allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  controls
                ></video>
              </div>

              <div>
                <h3>MUNAS 6 IKATA </h3>
                <h3>
                  Mari Sukseskan Munas IKATA
                </h3>
                <br />
                <a href='https://evoting.munasikataupn.com'>Daftar Menjadi DPT</a>
              </div>
            </div>
          </div>
        </div>
        <div className='pendaftaran' style={{display: calon? 'block' : 'none'}}>
          <div className='container'>
            <Balon />
          </div>
        </div>

        <div className='container' id='event'>
          <section className='title' style={{ fontSize: "2rem" }}>
            <h3>EVENTS MUNAS</h3>
            <p>
              Ikuti agenda dan event yang diadakan untuk anggota IKATA UPN
              “Veteran” Yogyakarta
            </p>
          </section>
          <Card data={cardEvent} />
          <section className='title-event'></section>
        </div>

        <div className='podcast'>
          <div className='container' id='podcast-ikata'>
            <section className='title-event' style={{ fontSize: "2rem" }}>
              <h3>Podcast IKATA</h3>
            </section>
            <br />
            <div className='podcast-pengurus'>{vidPodcast()}</div>
            <br />
            <div className='podcast-footer'>
              <a href='https://www.youtube.com/channel/UCd-fUSOU5V8Mz1rUf2m0SfA/videos'>
                Lihat PODCAST lainnya
              </a>
            </div>
          </div>
        </div>
        <div className='pendaftaran' style={{display: dpt? 'block' : 'none'}}>
          <div className='container'>
            <DPT />
          </div>
        </div>
      </section>
    </>
  );
}
