import React, { useEffect, useState } from "react";
import "./style.css";
import * as image from "../../utils/image";
import * as imageEvent from "../../utils/eventImage";
import Tabs from "../../component/tabs/Tabs";
import { useLocation } from "react-router-dom";
import queryString from 'querystring'; 
import Golf from '../../component/fragment/golf/Golf';
import Seminar from '../../component/fragment/seminar/Seminar';
import Gathering from '../../component/fragment/gathering/Gathering';
import Competition from '../../component/fragment/competition/Competition';
import Workshop from '../../component/fragment/workshop/Workhop';
import DropDown from '../../component/elements/Dropdown/DropDown';
import StickySponsor from "../../component/stickySponsor/StickySponsor";
import DPT from "../../component/DPT/DPT";

export default function Event() {
  const[dpt] = useState(false)

  const onbeforeunload = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    onbeforeunload()
  })

  const data = {
    navItems: [
      { idx:0, name:'Golf', value:'golf' }, 
      { idx:1, name:'Competition', value:'competition' }, 
      { idx:2, name:'Seminar / Webinar', value:'seminar / webinar' }, 
      { idx:3, name:'Workshop', value:'workshop' }, 
      { idx:4, name:'Gathering', value:'gathering' }
    ],
    navValues: ['golf', 'competition', 'seminar/webinar', 'workshop', 'gathering'],
    tabsName:'tab'
  }



  return (
    <>
    <StickySponsor />
    <section>
      <div className='header-event'>
        {/*<img src={image.campusCrop} alt='img-campus' />*/}
      </div>
      <div className='event-body'>
        <Tabs data= {data} />
        <div className='drop-down'>
          <p>Pilih Event:</p>
          <DropDown id='dropDown' data= {data} />
        </div>
        
        <Content />
      </div>
      <div className='pendaftaran' style={{display: dpt? 'block' : 'none'}}>
        <div className='container'>
          <DPT />
        </div>
        </div>
    </section>
    </>
  )
}

function Content() {
  const { search } = useLocation();
  const { tab } = queryString.parse(search.replace('?', ''));
  const golf = [
  //  {
  //  header: 'IKATA GOLF',
  //  description: 'IKATA GOLF adala sebuah event rangkaian MUNAS IKATA 2021 yang mempertemukan anggota IKATA yang mempunyai hobi golf.',
  //  tanggal: '17 Desember 2021',
  //  waktu: '09:00 WIB',
  //  tempat: 'Yogyakarta',
  //  pendaftaran: '1 Oktober 2021 - 10 Desember 2021',
  //  register: 'https://www.hyatt.com/en-US/hotel/indonesia/hyatt-regency-yogyakarta/yogya?src=nplk-yogya-lclb-regency-golf',
  //  poster: image.golf2,
  //  contactPerson: 'Wawan Sariawan - 0813455889977'
  //},
  //{
  //  header: 'IKATA GOLF',
  //  description: 'IKATA GOLF adala sebuah event rangkaian MUNAS IKATA 2021 yang mempertemukan anggota IKATA yang mempunyai hobi golf.',
  //  tanggal: '17 Desember 2021',
  //  waktu: '09:00 WIB',
  //  tempat: 'Yogyakarta',
  //  pendaftaran: '1 Oktober 2021 - 10 Desember 2021',
  //  register: '',
  //  poster: '',
  //  contactPerson: 'Wawan Sariawan - 0813455889977'
  //}
]

const competition = [
  {
    header: 'Virtual Sports & Charity MUNAS IKATA VI 2021',
    description: ' Panitia Munas IKATA ke-6 akan mengadakan kegiatan virtual sport & charity untuk memeriahkan Munas IKATA VI bagi IKATA dan alumni UPN serta keluarga dengan mengedepankan protokol kesehatan di setiap kegiatan. Kegiatan ini akan dibagi menjadi 3 kategori yaitu Fun Walk 30 km, Fun Run 50 km dan Fun Bike 200 km.',
    tanggal: '6 November 2021 – 5 Desember 2021',
    waktu: '',
    tempat: '',
    pendaftaran: '30 Oktober 2021 – 5 November 2021',
    register: 'http://bit.ly/ikatamunasvr2021',
    poster: imageEvent.VirtualSports,
    contactPerson: 'Agus "Brickets" (98) - 081380830110',
    imagePoster: 'VirtualSports'
  },
    {
    header: 'IKATA E-SPORT COMPETITION (UMUM)',
    description: 'Mobile Legends competition  dengan total hadiah Up to Rp 10,000,000 - Registration Fee Rp 80,000 - Open Slot 128 Slot (Multiple Slot Max 2/Team).',
    tanggal: '6 - 12 Desember 2021',
    waktu: '',
    tempat: '',
    pendaftaran: '23 Oktober 2021 - 23 November 2021',
    register: 'https://lynk.id/mlikata2021',
    poster: imageEvent.MLExternal,
    contactPerson: 'Joshua - 081264396545',
    imagePoster: 'MLExternal'
  },
  {
    header: 'IKATA E-SPORT COMPETITION (TAMBANG)',
    description: 'Mobile Legends competition  dengan total hadiah Up to Rp 10,000,000 - Registration Fee Rp 100,000 - Open Slot 64 Slot (Multiple Slot Max 2/Team). ',
    tanggal: '6 - 12 Desember 2021',
    waktu: '',
    tempat: '',
    pendaftaran: '23 Oktober 2021 - 23 November 2021',
    register: 'https://lynk.id/mlikata2021',
    poster: imageEvent.MLInternal,
    contactPerson: 'Stefanus - 085159150588',
    imagePoster: 'MLInternal'
  },
]


  if(tab === 'golf'){
    return <Golf data={golf} />
  }
  if(tab === 'seminar / webinar'){
    return <Seminar />
  }
  if(tab === 'gathering'){
    return <Gathering/>
  }
  if(tab === 'competition'){
    return <Competition data={competition} />
  }
  if(tab === 'workshop'){
    return <Workshop/>
  }
  return <Golf data={golf}/>;
}