import React from 'react';

export default function Header (props) {
  return (
    <div className="Header">
      <div className="Title-Container">
        <h1> {props.main} </h1>
        <h5> {props.sub} </h5>
      </div>
    </div>
  )
} 

