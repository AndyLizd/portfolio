import React, { useState } from "react";

import config from '../boxConfig';

import "./styles/template.css";
import './styles/starlink.css';

const index = config.findIndex(elem => elem.name === 'starlink');

function Starlink() {
  return (
    <div>
			<h1>
				hello world.
			</h1>
    </div>        
  );
}

export default Starlink;
