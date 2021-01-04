import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import gsap from "gsap";
import 'boxicons';

import "./main.css";
import config from "./boxConfig";


// config
const boxCount = config.length;
const defaultBoxWidth = '9vh';
const defaultBoxHeight = '34vh';
const selectedBoxWidth = '40vh'; 
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

const onMouseEnter = (e, index, setHeaderState) => {
	setHeaderState(index);
	
	const widthArr = computeWidthArr(index, boxCount, defaultBoxWidth, selectedBoxWidth);
	const heightArr = computeHeightArr(index, boxCount, defaultBoxHeight, selectedBoxHeight);
	
	for (let i = 0; i < boxCount; i++) {
		gsap.to(`.box${i}`, {
			...defaultBoxStyle, 
			width: widthArr[i], 
			height: heightArr[i],
			backgroundColor: computeHslColor(config[index].hue, 85, i, boxCount)},
		);
	}

	gsap.to(`.box${index} .thumbnail`, {
		duration: 1.5, 
		opacity: 1.0, 
		overwrite: true, 
		delay: 0.5
	});

	gsap.to(`.panel.hidden`, {
		duration: 1.5,
		opacity: 1,
		boxShadow: `0 10.5px 60.2px -10px rgba(255,255,255, 0.349),
								${-50 + index/boxCount*2*50}px 14.6px 232.2px -10px rgba(255,255,255, 0.497),	
								${-100 + index/boxCount*2*100}px 28px 382px -10px rgba(255,255,255, 0.84)`,
		overwrite: true,
	}); 

};

const onMouseLeave = (e, index, setHeaderState) => {
	for (let i = 0; i < boxCount; i++) {
		gsap.to(`.box${i}`, {
			...defaultBoxStyle,
			backgroundColor: computeHslColor(defaultHue, 0, i, boxCount), 
			boxShadow: '',
			overwrite: true
		});
		gsap.to(`.box${i} .thumbnail`, {duration: 0.5, opacity: 0, overwrite: true});
		
		gsap.to('.panel.hidden', {
			duration: 1.5,
			opacity: 0,
			overwrite: true,
		}); 
	}
	setHeaderState(-1);
};

const onClickFeature = (e, index, history) => {
	console.log('hello')
	history.push(`/${config[index].name}`)
};

const renderName = () => (
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
)

const renderFeatureSummary = (index) => (
	<div className='description'>
		<h1 
			style={{color: 'white', fontSize:'6vh', fontFamily: config[index].headerFont}}
		>
			{config[index].head}
		</h1>
		<h6 style={{color: 'white'}}>{`- ${config[index].summary}`}</h6>
	</div>
)


function Main() {
	useEffect(() => {
		console.log(config);
	}, []);

	// headerState: -1, show name modules
	const [headerState, setHeaderState] = useState(-1);

	const history = useHistory();

  return (
		<div className='page-container'>
			{/* intro, name & description */}
			<div className='intro'>
				{headerState === -1? renderName(): renderFeatureSummary(headerState)}
			</div>

			<div className="feature">
				{/* box underneath */}
				<div className='panel hidden'>
					{config.map((value, index) => 
						<div
							className={`box hidden`}
							style={defaultBoxStyle}
							onMouseOver={e => onMouseEnter(e, index, setHeaderState)}
							onMouseOut={e => onMouseLeave(e, index, setHeaderState)}
							onClick={e => onClickFeature(e, index, history)}
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
							<div 
								className='thumbnail' 
								style={{
									backgroundImage: `url(${config[index].thumbnail})`,
									// filter: 'grayscale(100%)'
								}}
							>
							</div>
						</div>	
					)}
				</div>
			</div>
		</div>
  );
}

export default Main;
