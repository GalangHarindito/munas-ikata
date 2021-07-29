import React from "react";
import "./style.css";
import sponsor1 from "../../assets/sponsor/CSS.png";
import sponsor2 from "../../assets/sponsor/html.png";
import sponsor3 from "../../assets/sponsor/logo512.png";
import sponsor4 from "../../assets/sponsor/js.png";

export default function Sponsor() {
  const sponsor = [
    {image:sponsor1, sponsorName:'css'},
    {image:sponsor2, sponsorName:'html'},
    {image:sponsor3, sponsorName:'css'},
    {image:sponsor4, sponsorName:'html'},
    {image:sponsor1, sponsorName:'css'},
    {image:sponsor2, sponsorName:'html'},
    {image:sponsor3, sponsorName:'css'},
    {image:sponsor4, sponsorName:'html'},
    {image:sponsor1, sponsorName:'css'},
    {image:sponsor2, sponsorName:'html'},
    {image:sponsor3, sponsorName:'css'},
    {image:sponsor4, sponsorName:'html'},
    {image:sponsor1, sponsorName:'css'},
    {image:sponsor2, sponsorName:'html'},
    {image:sponsor3, sponsorName:'css'},
    {image:sponsor4, sponsorName:'html'},
    {image:sponsor1, sponsorName:'css'},
    {image:sponsor2, sponsorName:'html'},
    {image:sponsor3, sponsorName:'css'},
    {image:sponsor4, sponsorName:'html'},
    {image:sponsor1, sponsorName:'css'},
    {image:sponsor2, sponsorName:'html'},
    {image:sponsor3, sponsorName:'css'},
    {image:sponsor4, sponsorName:'html'},
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