import React, { useState } from "react";
import config from "../boxConfig";
import Template from "./template";

import "./styles/template.css";
import "./styles/glider.css";

// config here
const featureName = "glider";

const index = config.findIndex((elem) => elem.name === featureName);
const headerFontFamily = config[index].headerFont;

function Glider() {
  return (
    <div className="glider">
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          height: "45vh",
          width: "48vw",
          // border: "0.1em solid white",
        }}
      >
        <Template props={{ index, headerFontFamily }}></Template>
      </div>
      <img
        src="img/glider/glider.jpg"
        alt="glider image"
        style={{
          position: "absolute",
          left: "5vw",
          top: "5vh",
          borderRadius: "0.0em",
          height: "85vh",
        }}
      />
    </div>
  );
}

export default Glider;
