import React, { useState } from "react";
import config from '../boxConfig';

import "./styles/template.css";
import './styles/template.css';


function Template({props}) {
  return (
    <div className='text'>
      <h1 className='header' style={{fontFamily: props.headerFontFamily}}>
        {config[props.index].head}
      </h1>
      <ul className='detail-list'>
        {config[props.index].details.map((line, dummy) => (
          <li className='detail' key={`${config[props.index].name} details ${dummy}`}> {'+ ' + line} </li>
        ))}
      </ul>
    </div>       
  );
}

export default Template;
