import React, {useEffect, useState, useContext} from "react";
import "./style.css";
import * as image from "../../utils/image";
import * as text from "../../component/text/text";
import StickySponsor from "../../component/stickySponsor/StickySponsor";
import DPT from "../../component/DPT/DPT";
import Profile from "../../component/profile/Profile";
import GetdataCandidate from "../../utils/fetch2";
import { Context } from "../../store";

export default function About() {
  const[dpt] = useState(true)
  const [ontime]   = useState(false);
  const [candidate] = useContext(Context);

  //useEffect(() => {
  //  GetdataCandidate()
  //},[])

  return (
    <>
    <StickySponsor />
    <section className='about'>
      {/*<div className='header'>
        <img src={image.campusCrop} alt='img-campus' />
      </div>*/}
      <div className='container' id='munas'>
        <section className='title' style={{ fontSize: "2rem" }}>
        
        </section>
        <section className='content-munas'>
          <div className='question'>
            <img src={image.question} alt='img-question' />
          </div>
          <div className='text'>{text.ikata1}</div>
        </section>
        <section className='content-munas'>
          <div className='text'>{text.ikata2}</div>
          <div className='evoting'>
            <img src={image.evoting} alt='img-question' />
          </div>
        </section>
        <section className='yel'>
          <h3>IKATA TANGGUH !!!</h3>
          <h3>VIVA TAMBANG MANTAP SKALIII !!!</h3>
        </section>
      </div>
      <div className='calon-detail' style={{display: ontime? 'block' : 'none'}}>
        <div className='container'>
        <section >
          <h3 style={{ fontWeight: "500", marginBottom:'1rem' }}>PROFIL CALON KETUA IKATA PERIODE 2021-2025</h3>
        </section >
        <section id='candidate'>
           <Profile profile={candidate.candidate} />
        </section>
         
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
