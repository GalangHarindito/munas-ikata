import React, { useContext } from "react";
import "./style.css";
import Tabs from "../tabs/Tabs";
import { useLocation } from "react-router-dom";
import queryString from 'querystring'; 
import DetailProfile from "../fragment/detailProfile/DetailProfile";
import DropDown from "../elements/Dropdown/DropDown";
import { Context } from "../../store";
import ContactUs from "../form/contactUs/ContactUs";

export default function Profile(props) {
  const { profile } = props;
  const data = {
    navItems: profile.map((el, idx) => { return {idx: idx, name: el.biodata.fullName, value: el.biodata.fullName.toLowerCase().split(' ').join('')} }),
    navValues: profile.map((el) => { return el.biodata.fullName.toLowerCase().split(' ').join('')}),
    tabsName:'tab'
  }

  return (
    <>
    <section>
      <div className='event-body'>
        <Tabs data= {data} fullWidth={true} />
        <div className='drop-down'>
          <p>Profile :</p>
          <DropDown id='dropDown' data= {data} />
        </div>
        
        <Content data={profile} />
      </div>
    </section>
    </>
  )
}

function Content(props) {
  const {data} = props;
  const { search } = useLocation();
  const { tab } = queryString.parse(search.replace('?', ''));

  for(let i in data ){
    if(data[i].biodata.fullName.toLowerCase().split(' ').join('') === tab ){
     
      return <DetailProfile data={data[i]} />
    }
  }
  return <DetailProfile data={data[0]} />
}