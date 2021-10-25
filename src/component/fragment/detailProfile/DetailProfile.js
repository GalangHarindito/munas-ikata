import React from 'react';
import "./style.css";
import * as image from '../../../utils/image';

export default function DetailProfile(props) {
  const { data } = props;
  if(!data) {
    return null
  }

  return(
    <section className='detailProfile'>
      <div>
        <section className='image-candidate' style={{backgroundImage:`url(${data.biodata.photo})`}}>
        {/*<img src={data.biodata.photo} alt="img-coming-soon" />*/}
        <div className='label-detailProfile'>
            <p>{data.biodata.number}</p>
          </div>
      </section>
      <section>
        <h4>{data.biodata.fullName}</h4>
        <h4>{data.biodata.angkatan}</h4>
       <blockquote><i>{`"${data.biodata.jargon}"`}</i></blockquote>
       <p>Visi: {data.biodata.visi}</p>
       <p>Misi : {data.biodata.misi}</p>
       <section className='sosmed-candidate'>
        <p>Media Sosial</p>
        <section>
          
        </section>
      </section>
      </section>
      
      </div>
      {data.biodata.linkVideo && data.biodata.linkVideo !== 'null' && 
      <div>
      <h4>{`Video Profil ${data.biodata.fullName}`}</h4>
      <iframe width="560" height="315" src={data.biodata.linkVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>}
    </section>
  )
}