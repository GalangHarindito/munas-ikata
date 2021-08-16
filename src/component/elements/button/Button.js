import React from 'react';
import "./style.css";

export default function Button(props) {
const { label, buttonProps, disabled, onClick, type, className} = props;

  return (
    <button className={className} type={type} disabled={disabled} {...buttonProps} onClick={onClick}>{label}</button>
  )
}