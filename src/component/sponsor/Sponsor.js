import React from "react";
import "./style.css";
import * as image from '../../utils/imageSponsor';

export default function Sponsor() {
  const sponsor = [
    {image:image.sponsor1, sponsorName:'img-GPE'},
    {image:image.sponsor2, sponsorName:'img-GPE'},
    {image:image.sponsor3, sponsorName:'img-GPE'},
    {image:image.Sponsor4, sponsorName:'img-GPE'},
    {image:image.Sponsor5, sponsorName:'img-BATU'},
    {image:image.Sponsor6, sponsorName:'img-Kelixindo'},
  ]

  return (
    <div className="sponsor-content">
      <section>
        <h5>Platinum Sponsorship</h5>
        <div>
           {image.imgSponsorPlatinum.map((el,idx) => {
        return (
          <section key={idx}>
          <img src={el.image} alt={`img-sponsor-${el.sponsorName}`} />
        </section>
        )
      })}
        </div>
       
      </section>
      <section>
        <h5>Gold Sponsorship</h5>
        <div>
           {image.imgSponsorGold.map((el,idx) => {
        return (
          <section key={idx}>
          <img src={el.image} alt={`img-sponsor-${el.sponsorName}`} />
        </section>
        )
      })}
        </div>
       
      </section>

      <section>
        <h5>Silver Sponsorship</h5>
        <div>
           {image.imgSponsorSilver.map((el,idx) => {
        return (
          <section key={idx}>
          <img src={el.image} alt={`img-sponsor-${el.sponsorName}`} />
        </section>
        )
      })}
        </div>
       
      </section>
       
      <section>
      <h5>Bronze Sponsorship</h5>
      <div>
          {image.imgSponsorBronze.map((el,idx) => {
        return (
          <section key={idx}>
          <img src={el.image} alt={`img-sponsor-${el.sponsorName}`} />
        </section>
        )
      })}
      </div>
       
      </section>

      <section>
      <h5>Supported By</h5>
      <div>
          {image.imgSupport.map((el,idx) => {
        return (
          <section key={idx}>
          <img src={el.image} alt={`img-sponsor-${el.sponsorName}`} />
        </section>
        )
      })}
      </div>
       
      </section>
     
    </div>
  )
}