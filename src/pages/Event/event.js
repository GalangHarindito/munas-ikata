import React, { useEffect } from "react";
import "./style.css";
import * as image from "../../utils/image";
import Tabs from "../../component/tabs/Tabs";
import { useLocation } from "react-router-dom";
import queryString from 'querystring'; 
import Golf from '../../component/fragment/golf/Golf';
import Seminar from '../../component/fragment/seminar/Seminar';
import Gathering from '../../component/fragment/gathering/Gathering';
import Competition from '../../component/fragment/competition/Competition';
import Workshop from '../../component/fragment/workshop/Workhop';
import DropDown from '../../component/elements/Dropdown/DropDown';

export default function Event() {

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
    <section>
      <div className='header'>
        <img src={image.campusCrop} alt='img-campus' />
      </div>
      <div className='event-body'>
        <Tabs data= {data} />
        <div className='drop-down'>
          <p>Pilih Event:</p>
          <DropDown id='dropDown' data= {data} />
        </div>
        
        <Content />
      </div>
    </section>
  )
}

function Content() {
  const { search } = useLocation();
  const { tab } = queryString.parse(search.replace('?', ''));

  if(tab === 'golf'){
    return <Golf />
  }
  if(tab === 'seminar/webinar'){
    return <Seminar />
  }
  if(tab === 'gathering'){
    return <Gathering />
  }
  if(tab === 'competition'){
    return <Competition />
  }
  if(tab === 'workshop'){
    return <Workshop />
  }
  return <Golf />;
}