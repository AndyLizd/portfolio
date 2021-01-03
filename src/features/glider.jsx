import React, { useState } from "react";
import config from '../boxConfig';
import Template from './template';

import "./styles/template.css";
import './styles/glider.css';

// config here
const featureName = 'glider';

const index = config.findIndex(elem => elem.name === featureName);
const headerFontFamily = config[index].headerFont;

function Glider() {
  return (
    <div className='glider'>
			<div style={{position:'absolute', bottom:0, height:'50vh', width:'50vw', border:'1em solid white'}}>
        <Template props={{index, headerFontFamily}}></Template>
      </div>
      
    </div>        
  );
}

export default Glider;
