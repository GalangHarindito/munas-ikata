import React from 'react';
import "./style.css";
import Loaders from '../loaders/Loaders';

export default function Button(props) {
const { label, buttonProps, disabled, onClick, type, className, isLoading} = props;

  return (
    <button className={className} type={type} disabled={disabled} {...buttonProps} onClick={onClick}>{isLoading?<Loaders className="loader"/> : label}</button>
  )
}