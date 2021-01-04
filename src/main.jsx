import React, { useState, useEffect } from "react";
import gsap from "gsap";
import 'boxicons';

import "./main.css";
import config from "./boxConfig";


// config
const boxCount = config.length;
const defaultBoxWidth = '9.5vh';
const defaultBoxHeight = '35vh';
const selectedBoxWidth = '42vh'; 
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

const computeHslColor = (hue, saturation, selectIdx, boxCount) => {
	const lightness = (selectIdx / boxCount) * 15 + (1 - selectIdx / boxCount) * 75;
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`
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
	
	console.log(e.target);

	for (let i = 0; i < boxCount; i++) {
		gsap.to(`.box${i}`, {
			...defaultBoxStyle, 
			width: widthArr[i], 
			height: heightArr[i],
			backgroundColor: computeHslColor(config[index].hue, 85, i, boxCount)},
		);
	}

	gsap.to(`.box${index} .thumbnail`, {
		duration: 2.5, 
		opacity: 1.0, 
		overwrite: true, 
		delay: 0.5
	});

	gsap.to(`.box.hidden`, {
		duration: 1,
		opacity: 1,
		boxShadow: '0px 0px 80px 15px rgba(255,255,255,0.3)',
	}); 

};

const onMouseLeave = (e, index) => {
	for (let i = 0; i < boxCount; i++) {
		gsap.to(`.box${i}`, {
			...defaultBoxStyle,
			backgroundColor: computeHslColor(defaultHue, 0, i, boxCount), 
			boxShadow: '',
			overwrite: true
		});
		gsap.to(`.box${i} .thumbnail`, {duration: 0.5, opacity: 0, overwrite: true});
		
		gsap.to('.box.hidden', {
			duration: 1,
			opacity: 0,
			boxShadow: '',
		}); 
	}
};

function Main() {
	useEffect(() => {
		console.log(config);
	});

  return (
		<div className='page-container'>
			{/* intro, name & description */}
			<div className='intro'>
				<div className='description'>
					<h1 className='name'>Zhenda</h1>
					<h1 className='name'>Li</h1>
					<h6> # Full-Stack, DevOps, A.I.</h6>
					<div className='icon-container'>
						<a href="https://github.com/AndyLizd" target="_blank">
							<box-icon type='logo' color='white' name='github' animation='flashing-hover'></box-icon>
						</a>
						<a href="https://www.linkedin.com/in/zhenda-li/" target="_blank">
							<box-icon type='logo' color='white' name='linkedin' animation='tada'></box-icon>
						</a>
						<a href="mailto: andylizd@outlook.com" target="_blank">
							<box-icon name='envelope-open' type='solid' color='white' animation='tada'></box-icon>
						</a>
					</div>
				</div>
			</div>
			<div className="feature">
				{/* box underneath */}
				<div className='panel'>
					{config.map((value, index) => 
						<div
							className={`box hidden`}
							style={defaultBoxStyle}
							onMouseOver={(e) => onMouseEnter(e, index)}
							onMouseOut={(e) => onMouseLeave(e, index)}
							key={index.toString()+' box hident'}
						/>
					)}
				</div>
		
				{/* box on top */}
				<div className='panel top'>
				{config.map((value, index) => 
						<div
							style={{...defaultBoxStyle, backgroundColor: computeHslColor(defaultHue, 0, index, boxCount)}}
							className={`box box${index}`}
							key={index.toString()+' box'}
						>
							<div className='thumbnail' style={{backgroundImage: `url(${config[index].thumbnail})`}}></div>
							{/* <img src={`url(${config[index].thumbnail})`} alt="" /> */}
						</div>	
					)}
				</div>
			</div>
		</div>
  );
}

export default Main;
