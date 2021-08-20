import React from "react";
import "./style.css";
import * as image from '../../utils/imageSponsor';

export default function Sponsor() {
  const sponsor = [
    {image:image.sponsor1, sponsorName:'img-GPE'},
    {image:image.sponsor2, sponsorName:'img-GPE'},
    {image:image.sponsor3, sponsorName:'img-GPE'},
  ]
  return (
    <div className="sponsor-content">
      {sponsor.map((el,idx) => {
        return (
          <section key={idx}>
          <img src={el.image} alt={`img-sponsor-${el.sponsorName}`} />
        </section>
        )
      })}
    </div>
  )
}