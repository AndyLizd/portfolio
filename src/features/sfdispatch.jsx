import React, { useState } from "react";

import config from '../boxConfig';

import "./styles/template.css";
import './styles/sfdispatch.css';

const index = config.findIndex(elem => elem.name === 'sfdispatch');

function SFdispatch() {
  return (
    <div>
			<h1>
				hello world.
			</h1>
    </div>        
  );
}

export default SFdispatch;