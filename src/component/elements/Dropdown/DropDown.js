import React from "react";
import { useHistory, useLocation } from 'react-router-dom';
import "./style.css";
import queryString from 'querystring'; 
import Select from "react-dropdown-select";

export default function DropDown(props) {
  const { navItems, tabsName } = props.data;
  const history = useHistory();
  const { search } = useLocation();
  const { tab } = queryString.parse(search.replace('?', ''));
  let activeIndex = navItems.findIndex(i => i.value === tab);
  const index = (idx) => {
    console.log(idx)
    const newQuery = queryString.stringify({ [tabsName]: navItems[idx].value });
    history.push(`?${newQuery}`);
  };

  activeIndex = (activeIndex>-1) ? activeIndex : 0;
  console.log(activeIndex)
  return(
    <Select
        options={navItems}
        dropdownHandle={true}
        labelField={"name"}
        closeOnSelect={true}
        onChange={(value) => index(value[0].idx)}
        value = {
          activeIndex
       }
      />
  )
}