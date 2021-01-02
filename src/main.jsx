import React, { useState } from "react";
import gsap from "gsap";

import "./main.css";
import boxesConfig from "./boxConfig.json";
import img from './img/glider_thumbnail.PNG';

function Main() {
	// config
  const boxCount = boxesConfig.length;
  const defaultBoxWidth = '8vh';
	const defaultBoxHeight = '30vh';
	const selectedBoxWidth = '36vh'; 
	const selectedBoxHeight = selectedBoxWidth; 
	const defaultHue = 200;
	const defaultBoxStyle = {
		width: defaultBoxWidth, 
		height: defaultBoxHeight,
		duration: 0.5,
		opacity: 1,
		ease: 'SlowMo',
		overwrite: true,
	}

	// softmax
	const computeWidthWeight = (selectIdx, i) => Math.exp(1/Math.abs(selectIdx - i));

	const parseStyleLength = (length) => parseInt(length.substring(0, length.length-2));

	const computeHslColor = (hue, selectIdx, boxCount) => {
		const lightness = (selectIdx / boxCount) * 0 + (1 - selectIdx / boxCount) * 50;
		return `hsl(${hue}, 0%, ${lightness}%)`
	}

	const computeWidthArr = (selectIdx, boxCount, defaultWidthStr, selectedWidthStr) => {
		const overflowRatio = 1.25;
		const widthArr = [];
		
		const defaultWidth = parseStyleLength(defaultWidthStr);
		const selectedWidth = parseStyleLength(selectedWidthStr);
		
		const totalWidth = defaultWidth * boxCount;
		
		let totalWeight = 0;
		for (let i = 0; i < boxCount; i++) 
			totalWeight += (i !== selectIdx)? computeWidthWeight(selectIdx, i) : 0;

		for (let i = 0; i < boxCount; i++) { 
			let widthInt = (i !== selectIdx)? overflowRatio*(totalWidth-selectedWidth) * (computeWidthWeight(selectIdx, i) / totalWeight) : selectedWidth;
			widthArr.push(`${widthInt}vh`);
		}

		return widthArr;
	}

	const computeHeightArr = (selectIdx, boxCount, defaultHeightStr, selectedHeightStr) => {
		const decayRate = 0.08;
		const heightArr = [];

		const defaultHeight = parseStyleLength(defaultHeightStr);

		for (let i = 0; i < boxCount; i++) {
			if (i === selectIdx)
				heightArr.push(selectedHeightStr);
			else 
				heightArr.push(`${defaultHeight*(1+decayRate*1/Math.abs(selectIdx - i))}vh`);
		}

		return heightArr;
	}

  const onMouseEnter = (e, index) => {
		const widthArr = computeWidthArr(index, boxCount, defaultBoxWidth, selectedBoxWidth);
		const heightArr = computeHeightArr(index, boxCount, defaultBoxHeight, selectedBoxHeight);
		
		for (let i = 0; i < boxCount; i++) {
			gsap.to(`.box${i}`, {...defaultBoxStyle, width: widthArr[i], height: heightArr[i], backgroundColor: computeHslColor(defaultHue, i, boxCount)});
		}
		gsap.to(`.box${index} .thumbnail`, {duration: 2.5, opacity: 1.0, overwrite: true, delay: 0.5});
	};

  const onMouseLeave = (e, index) => {
		for (let i = 0; i < boxCount; i++) {
			gsap.to(`.box${i}`, {...defaultBoxStyle, backgroundColor: computeHslColor(defaultHue, i, boxCount), overwrite: true});
			gsap.to(`.box${i} .thumbnail`, {duration: 0.5, opacity: 0, overwrite: true});
		}
  };

  return (
		<div>
			{/* box underneath */}
			<div className="panel">
				{boxesConfig.map((value, index) => {
					return (
						<div
							className={'box hidden'}
							style={{height:defaultBoxHeight, width:defaultBoxWidth}}
							onMouseOver={(e) => onMouseEnter(e, index)}
							onMouseOut={(e) => onMouseLeave(e, index)}
						></div>
					);
				})}
			</div>
			{/* box on top */}
			<div className='panel top'>
			{boxesConfig.map((value, index) => {
					const style = {...defaultBoxStyle, backgroundColor: computeHslColor(defaultHue, index, boxCount)};
					return (
						<div
							style={style}
							className={`box box${index}`}
						>
							<div className='thumbnail'>
							</div>
						</div>
					);
				})}
			</div>
		</div>
  );
}

export default Main;
