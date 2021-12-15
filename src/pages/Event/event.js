import React, { useEffect, useState } from "react";
import "./style.css";
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
      //{ idx:3, name:'Workshop', value:'workshop' }, 
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
//  const golf = [
//  //  {
//  //  header: 'IKATA GOLF',
//  //  description: 'IKATA GOLF adala sebuah event rangkaian MUNAS IKATA 2021 yang mempertemukan anggota IKATA yang mempunyai hobi golf.',
//  //  tanggal: '17 Desember 2021',
//  //  waktu: '09:00 WIB',
//  //  tempat: 'Yogyakarta',
//  //  pendaftaran: '1 Oktober 2021 - 10 Desember 2021',
//  //  register: 'https://www.hyatt.com/en-US/hotel/indonesia/hyatt-regency-yogyakarta/yogya?src=nplk-yogya-lclb-regency-golf',
//  //  poster: image.golf2,
//  //  contactPerson: 'Wawan Sariawan - 0813455889977'
//  //},
//  //{
//  //  header: 'IKATA GOLF',
//  //  description: 'IKATA GOLF adala sebuah event rangkaian MUNAS IKATA 2021 yang mempertemukan anggota IKATA yang mempunyai hobi golf.',
//  //  tanggal: '17 Desember 2021',
//  //  waktu: '09:00 WIB',
//  //  tempat: 'Yogyakarta',
//  //  pendaftaran: '1 Oktober 2021 - 10 Desember 2021',
//  //  register: '',
//  //  poster: '',
//  //  contactPerson: 'Wawan Sariawan - 0813455889977'
//  //}
//]

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
 
const seminar = [
  {
    header: 'Seminar Nasional - Innovation, Environtment, Suistanability, and Challanges in Mining Sector',
    description: 'Panitia Munas IKATA ke-6 akan mengadakan Seminar Nasional dengan tema "Innovation, Environtment, Suistanability, and Challanges in Mining Sector".',
    tanggal: 'Kamis, 16 Desember 2021',
    waktu: '08.20 WIB - 10.05 WIB',
    tempat: 'Live Streaming ZOOM',
    pendaftaran: '11 - 15 Desember 2021',
    register: 'https:bit.ly/webinar-mumpuni',
    poster: imageEvent.semNas,
    contactPerson: 'Andi Haristiawan - 082153178877',
    imagePoster: 'semNas'
  },
    {
    header: 'Webinar Series III - Sesi I : Rancangan Ventilasi Tambang Bawah Tanah Metode Open Stope - Big Gossan PT Freeport Indonesia - Sesi II : Pengembangan Kompetensi Karyawan Berbasis Level & Kamus Kompetensi',
    description: '',
    tanggal: 'Sabtu, 11 Desember 2021',
    waktu: '08.00 - 12.00 WIB',
    tempat: 'Zoom / Youtube LIVE',
    pendaftaran: '9 - 10 Desember 2021',
    register: 'https:bit.ly/webinar-mumpuni',
    poster: imageEvent.seminarIII,
    contactPerson: 'Andi Haristiawan - 082153178877',
    imagePoster: 'seminarIII'
  },
    {
    header: 'Webinar Series II - Operasi Planning Untuk Operasi Tambang Yang Efisien',
    description: '',
    tanggal: 'Rabu, 8 Desember 2021',
    waktu: '14.00 - 16.00 WIB',
    tempat: 'Zoom / Youtube LIVE',
    pendaftaran: '6 - 7 Desember 2021',
    register: 'https:bit.ly/webinar-mumpuni',
    poster: imageEvent.seminarII,
    contactPerson: 'Andi Haristiawan - 082153178877',
    imagePoster: 'seminarII'
  },
  {
    header: 'Webinar Series I - Mining Future Drone Application',
    tanggal: 'Minggu, 5 Desember 2021',
    waktu: '13.00 WIB - selesai',
    tempat: 'Zoom / Youtube LIVE',
    pendaftaran: '3 - 4 Desember 2021',
    register: 'https:bit.ly/webinar-mumpuni',
    poster: imageEvent.seminarI,
    contactPerson: 'Andi Haristiawan - 082153178877',
    imagePoster: 'seminarI'
  },
]

const gathering = [
  {
    header: 'PULANG KAMPUS 2021',
    tanggal: 'Sabtu, 18 Desember 2021',
    waktu: '08.00 WIB - selesai',
    tempat: 'Auditorium UPN "Veteran" Yogyakarta',
    pendaftaran: '',
    register: '',
    poster: imageEvent.gathering,
    contactPerson: '',
    imagePoster: 'gathering'
  }
]

const golf = [
  {
    header: 'GOBAR - IKATA GOLF TOURNAMENT 2021',
    tanggal: 'Sabtu, 4 Desember 2021',
    waktu: '06.30 WIB - selesai',
    tempat: 'Permata Sentul Golf Club',
    pendaftaran: 'Sampai dengan 3 Desember 2021',
    register: '',
    poster: imageEvent.golf,
    contactPerson: 'Aan Suryadi - 081289063769, Erlina - 081310370174',
    imagePoster: 'golf'
  }
]



  if(tab === 'golf'){
    return <Golf data={golf} />
  }
  if(tab === 'seminar / webinar'){
    return <Seminar data={seminar} />
  }
  if(tab === 'gathering'){
    return <Gathering data={gathering} />
  }
  if(tab === 'competition'){
    return <Competition data={competition} />
  }
  if(tab === 'workshop'){
    return <Workshop/>
  }
  return <Golf data={golf}/>;
}