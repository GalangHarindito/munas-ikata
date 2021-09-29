import React from 'react';
import "./style.css";

export default function Text(props) {
const { className, input, inputProps, label, meta, helper, onClickIcon } = props;
// const classes =   [
//    textField,
//    !!input.value || styles.empty,
//    !!error && (dirty || touched) && styles.error,
//    onClickIcon && styles.clickable,
//    className
//  ].filter(Boolean).join(' ');



  return (
       <div >
      <label>{label}</label>
      <div className='wrapper'>
      <input id={input.name} {...input} {...inputProps} />
        {/*{ icon &&
          <span className={styles.icon} onClick={onClickIcon}>
            <img alt="icon" src={`../../../assets/${icon}.svg`}/>
          </span>
        }*/}
      </div>
      {/*{!!error && (dirty || touched) && <small className='error'>{error}</small>}*/}
      <span>{helper}</span>
    </div>
  )
}