import React from 'react';
import queryString from 'querystring'; 
import TabHeader from '../tabHeader/TabHeader';
import { useHistory, useLocation } from 'react-router-dom';

export default function Tabs(props) {
  const { navItems, navValues } = props.data;

  const history = useHistory();
  const { search } = useLocation();
  const { event } = queryString.parse(search.replace('?', ''));
  let activeIndex = navValues.findIndex(i => i === event);
  const onClick = idx => () => {
    const newQuery = queryString.stringify({ event: navValues[idx] });
    history.push(`?${newQuery}`);
  };
  activeIndex = (activeIndex>-1) ? activeIndex : 0;

  return (
    <TabHeader activeIndex={parseInt(activeIndex)} navItems={navItems} onClick={onClick} />
  );

}