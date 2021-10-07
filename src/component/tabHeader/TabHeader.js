import React from "react";
import "./style.css";

export default function TabHeader(props) {
  const { activeIndex, navItems, onClick, fullWidth } = props;
  const classes = fullWidth ? 'fullWidth tabHeader' : 'tabHeader'
  return (
    <>
      <nav className={classes}>
        {navItems.map((item, idx) => {
          const itemClass = `item ${idx === activeIndex ? "itemActive" : ""}` ;
          return (
            <div className={itemClass} key={idx} onClick={onClick(idx)}>
              <p>{item.name}</p>
            </div>
          );
        })}
      </nav>
      
    </>
  );
}
