import React, { useContext } from "react";
//import { candidate } from "../../utils/candidate";
import { Link } from "react-router-dom";
import './style.css';
import { Context } from "../../store";

export default function CardCandidate() {
  const [candidate] = useContext(Context);

  return(
    <section className='candidateCard'>
      { candidate.candidate.map((el, idx) => {
        return(
          <div key={idx} className='card-candidate'>
            <div>
          <div className='label'>
            <p>{el.biodata.number}</p>
          </div>
          
            <div className='card-image-candidate' style={{backgroundImage:`url(${el.biodata.photo})`}}></div>
          </div>
          <div>
            <p>{el.biodata.fullName}</p>
          </div>
          <div>
            <Link to={`/tentangMunas?candidate=${el.biodata.fullName}#candidate`}>Lihat Detail</Link>
          </div>
        </div>
        )
        
      })}
    </section>
  )
}