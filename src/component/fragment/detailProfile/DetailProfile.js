import React from "react";
import "./style.css";
import * as image from "../../../utils/image";

export default function DetailProfile(props) {
  const { data } = props;
  if (!data) {
    return null;
  }
  const experience = data.biodata.organizationExperience
    ? data.biodata.organizationExperience.split("\n")
    : [];
  const visi = data.biodata.visi ? data.biodata.visi.split("\n") : [];
  const misi = data.biodata.misi ? data.biodata.misi.split("\n") : [];

  return (
    <section className='detailProfile'>
      <div>
        <section
          className='image-candidate'
          style={{ backgroundImage: `url(${data.biodata.photo})` }}
        >
          {/*<img src={data.biodata.photo} alt="img-coming-soon" />*/}
          <div className='label-detailProfile'>
            <p>{data.biodata.number}</p>
          </div>
        </section>
        <section>
          <h4>{data.biodata.fullName}</h4>
          <h4>{data.biodata.angkatan}</h4>
          <blockquote>
            <i>{`"${data.biodata.jargon}"`}</i>
          </blockquote>
          <p>{data.biodata.description}</p>
          {data.biodata.organizationExperience && <p>Pengalaman Organisasi</p>}
          <p>{data.biodata.organizationExperience &&
            experience.map((el, idx) => {
              return experience.length <= 1 ? (
                <p key={idx}>{el}</p>
              ) : (
                <p key={idx}>
                  {idx + 1}. {el}
                </p>
              );
            })}
            </p>
          <p>Visi</p>
          <p>
            {data.biodata.visi &&
              visi.map((el, idx) => {
                return visi.length <= 1 ? (
                  <p key={idx}>{el}</p>
                ) : (
                  <p key={idx}>
                    {idx + 1}. {el}
                  </p>
                );
              })}
          </p>
          <p>Misi</p>
          <p>
            {data.biodata.misi &&
              misi.map((el, idx) => {
                return misi.length <= 1 ? (
                  <p key={idx}>{el}</p>
                ) : (
                  <p key={idx}>
                    {idx + 1}. {el}
                  </p>
                );
              })}
          </p>
          {data.biodata.linkedIn ||
          data.biodata.instagram ||
          data.biodata.facebook 
           ? (
            <section className='sosmed-candidate'>
              <p>Media Sosial</p>
              <section>
                {data.biodata.linkedIn && data.biodata.linkedIn !== 'null' && (
                  <a href={data.biodata.linkedIn} target='_blank'>
                    <i class='fab fa-linkedin'></i>
                  </a>
                )}
                {data.biodata.instagram && data.biodata.instagram !== 'null' && (
                  <a href={data.biodata.instagram} target='_blank'>
                    <i class='fab fa-instagram'></i>
                  </a>
                )}
                {data.biodata.facebook && data.biodata.facebook !== 'null' && (
                  <a href={data.biodata.facebook} target='_blank'>
                    <i class='fab fa-facebook'></i>
                  </a>
                )}
              </section>
            </section>
          ) : (
            ""
          )}
        </section>
      </div>
      {data.biodata.linkVideo && data.biodata.linkVideo !== "null" && (
        <div>
          <h4>{`Video Profil ${data.biodata.fullName}`}</h4>
          <iframe
            width='560'
            height='315'
            src={data.biodata.linkVideo}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      )}
    </section>
  );
}
