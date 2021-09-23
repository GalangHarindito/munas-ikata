import React from 'react';
import Radio from '../radio/Radio';

export default function RadioGroup(props) {
  const { className, disabled, input, label, options, required } = props;
  //const classes = [
  //  styles.root,
  //  required && styles.required,
  //  className
  //].filter(Boolean).join(' ');

  return (
    <div className='radio'>
      <label>{label}{required && <span>*</span>}</label>
      {options.map((option, idx) => {
        const { onChange, value: inputValue } = input;
        const { label, value, exp } = option;
        const handleChange = () => onChange(value);
        const checked = inputValue === value;

        return (
          <div key={`radio-${idx}`}>
            <Radio
              inputProps={{ checked, disabled }}
              label={label}
              onChange={handleChange}
              value={value}
            />
            <small>{exp}</small>
          </div>
        );
      })}
    </div>
  );
}
