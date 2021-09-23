import React, { useState } from "react";
import './style.css'
import * as sponsor from '../../utils/imageSponsor';

export default function StickySponsor() {
const [sticky] = useState(true)

  return(
    <div className={sticky? 'sticky' : 'absolute'} >
    <p>Sponsor</p>
    <br />
   {sponsor.imgSponsor.map((el, idx) => {
     return(
       <img key={idx} src={el} alt="" />
     )
   })}
   </div>  
  )
}