import React from 'react';

export default function Description (props) {
  return (
    <div className="Description-container">
      <h5> About Xaxier </h5>
      <p> {props.text} </p>
    </div>
  )
}
