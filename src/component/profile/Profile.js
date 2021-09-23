import React from "react";
import "./style.css";
import Tabs from "../tabs/Tabs";
import { useLocation } from "react-router-dom";
import queryString from 'querystring'; 
import DetailProfile from "../fragment/detailProfile/DetailProfile";
import DropDown from "../elements/Dropdown/DropDown";

export default function Profile() {
  const data = {
    navItems: [
      { idx:0, name:'Candidate1', value:'Candidate1' }, 
      { idx:1, name:'Candidate2', value:'Candidate2' }, 
      { idx:2, name:'Candidate3', value:'Candidate3' }, 
      { idx:3, name:'Candidate4', value:'Candidate4' }, 
    ],
    navValues: ['Candidate1', 'Candidate1', 'Candidate1', 'Candidate1', 'Candidate1'],
    tabsName:'tab'
  }

  return (
    <>
    <section>
      <div className='event-body'>
        <Tabs data= {data} />
        <div className='drop-down'>
          <p>Profile :</p>
          <DropDown id='dropDown' data= {data} />
        </div>
        
        <Content data={data} />
      </div>
    </section>
    </>
  )
}

function Content(props) {
  const {data} = props;
  const { search } = useLocation();
  const { tab } = queryString.parse(search.replace('?', ''));

  if(tab === data.value){
    return <DetailProfile />
  }
  return <DetailProfile />;
}