import React, { useState } from "react";
import config from '../boxConfig';

import "./styles/template.css";
import './styles/recommender.css';

const index = config.findIndex(elem => elem.name === 'recommender');

function Recommender() {
  return (
    <div>
			<h1>
				hello world.
			</h1>
    </div>        
  );
}

export default Recommender;
