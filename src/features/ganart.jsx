import React, { useState } from "react";
import config from '../boxConfig';

import "./styles/template.css";
import './styles/ganart.css';

const index = config.findIndex(elem => elem.name === 'ganart');

function GanArt() {
  return (
    <div>
			<h1>
				hello world.
			</h1>
    </div>        
  );
}

export default GanArt;
