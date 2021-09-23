import React from "react";
import { candidate } from "../../utils/candidate";
import { Link } from "react-router-dom";
import './style.css';

export default function CardCandidate() {
  return(
    <section className='candidateCard'>
      { candidate.map((el, idx) => {
        return(
          <div key={idx} className='card-candidate'>
          <div className='label'>
            <p>{`${idx+1}`}</p>
          </div>
          <div>
            <img src={el.image} alt="" />
          </div>
          <div>
            <p>{el.name}</p>
          </div>
          <div>
            <Link to='/tentangMunas?tab=Candidate1'>Lihat Detail</Link>
          </div>
        </div>
        )
        
      })}
    </section>
  )
}