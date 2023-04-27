
import React from 'react';

function InputField(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={props.onChange} />
    </div>
  )
}