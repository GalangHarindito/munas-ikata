import React from 'react';

export default function Radio(props) {
  const { className, inputProps, label, onChange, value } = props;
  //const disableStyle = inputProps.disabled && styles.disabled;
  //const classes = [styles.root, disableStyle, className].filter(Boolean).join(' ');

  return (
    <label className='radio'>
      <input disabled={inputProps.disabled} onChange={onChange} type="radio" value={value} {...inputProps} />
      <span />
      {label}
    </label>
  );
}