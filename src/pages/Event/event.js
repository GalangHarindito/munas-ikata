import React from "react";
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

export default function Event() {



  const data = {
    navItems: ['Golf', 'Competition', 'Seminar / Webinar', 'Workshop', 'Gathering'],
    navValues: ['golf', 'competition', 'seminar/webinar', 'workshop', 'gathering']
  }

  return (
    <section>
      <div className='header'>
        <img src={image.campusCrop} alt='img-campus' />
      </div>
      <div className='event-body'>
        <Tabs data= {data} />
        <Content />
      </div>
    </section>
  )
}

function Content() {
  const { search } = useLocation();
  const { event } = queryString.parse(search.replace('?', ''));

  if(event === 'golf'){
    return <Golf />
  }
  if(event === 'seminar/webinar'){
    return <Seminar />
  }
  if(event === 'gathering'){
    return <Gathering />
  }
  if(event === 'competition'){
    return <Competition />
  }
  if(event === 'workshop'){
    return <Workshop />
  }
  return <Golf />;
}