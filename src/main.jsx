import React, { useState, useEffect } from "react";
import gsap from "gsap";
import 'boxicons';

import "./main.css";
import config from "./boxConfig";

import Features from './features/features';

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
	const lightness = (selectIdx / boxCount) * 10 + (1 - selectIdx / boxCount) * 75;
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
			backgroundColor: computeHslColor(config[index].hue, 85, i, boxCount),
		});
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

	gsap.to('.page-container .intro', {duration:0.25, opacity: 1, ease:'power4'})

};

const onMouseLeave = (e, setHeaderState) => {
	for (let i = 0; i < boxCount; i++) {
		gsap.to(`.box${i}`, {
			...defaultBoxStyle,
			backgroundColor: computeHslColor(defaultHue, 0, i, boxCount), 
			boxShadow: '',
			overwrite: true
		});
		gsap.to(`.box${i} .thumbnail`, {duration: 0.25, opacity: 0.0, overwrite: true});
		
		gsap.to('.panel.hidden', {
			duration: 1.5,
			opacity: 0,
			overwrite: true,
		}); 
	}

	gsap.from('.page-container .intro', {duration:0.5, opacity: 0, ease:'power4'})

	setHeaderState(-1);
};

const onClickFeature = (e, index, setPageState) => {
	setPageState('features');
};

const renderName = () => (
	<div className='description name-bundle'>
		<h1 className='name'>Zhenda</h1>
		<h1 className='name'>Li</h1>
		<h6> # Full-Stack, DevOps, A.I.</h6>
		<div style={{display:'flex'}}>
			<div className="icon">
				<a href="https://github.com/AndyLizd" target="_blank">
					<box-icon type='logo' color='white' name='github' animation='flashing-hover'></box-icon>
				</a>
			</div>
			<div className="icon">
				<a href="https://www.linkedin.com/in/zhenda-li/" target="_blank">
					<box-icon type='logo' color='white' name='linkedin' animation='tada'></box-icon>
				</a>
			</div>
			<div className="icon">
				<a href="mailto: andylizd@outlook.com" target="_blank">
					<box-icon name='envelope-open' type='solid' color='white' animation='tada'></box-icon>
				</a>
			</div>
		</div>
	</div>
)

const renderFeatureSummary = (index) => (
	<div className='description'>
		<h1 
			style={{
				color: 'white', 
				fontSize: '6vh', 
				fontFamily: 'Big Shoulders Inline Text', 
				textAlign: 'center',
				margin: 'auto',
				marginBottom: '2vh',
			}}
		>
			{config[index].head}
		</h1>
		<h6 style={{color: 'white'}}>{`- ${config[index].summary}`}</h6>
	</div>
)


function Main() {
	
	// headerState: -1, show name modules
	const [headerState, setHeaderState] = useState(-1);
	// jumpToState: -1, show home page
	const [pageState, setPageState] = useState('home');
	// loadingState: 1, loading,
	const [loadingState, setLoadingState] = useState(1);
	
	useEffect(() => {
		
		gsap.defaults({overwrite: true});

		gsap.from('.page-container .intro .name', {duration: 1.5, opacity: 0.0, y: '-5vh', ease:'power4', stagger: 0.5});
		gsap.from('.page-container .intro h6', {duration: 2.0, opacity: 0, x:'3vw', ease:'slow', delay: 1.5});
		gsap.from('.page-container .intro .icon', {duration: 1.0, y:'-3vh', opacity: 0, stagger: 0.2, ease:'bounce', delay:0.5});
		
		for (let i = 0; i < boxCount; i++){
			gsap.from(`.page-container .panel.top .box${i}`, {
				duration:2.0, opacity: 0.0, y:`${(2*(i%2)-1)*2.5}vh`, ease:'power4', delay: 4.0,
			});
		}

		setTimeout(() => setLoadingState(0), 6000);
	}, []);

	useEffect(() => {
	  if (headerState === -1)
		gsap.to('.page-container .intro', {duration: 2.0, opacity: 1})
	}, [headerState]);

  return (
		<>
		{
		(pageState === 'features') ?
		< Features props={{startSection: config[headerState].name}}/>
		:
		<div className='page-container'>
			{/* intro, name & description */}
			<div className='intro'>
				{headerState === -1? renderName(): renderFeatureSummary(headerState)}
			</div>

			<div className="feature">
				{/* box underneath */}
				{(loadingState === 1) ?
					<></>
					:
					<div className='panel hidden' onMouseOut={e => onMouseLeave(e, setHeaderState)}>
						{config.map((value, index) => 
							<div
								className={`box hidden`}
								style={{...defaultBoxStyle, cursor:'pointer'}}
								onMouseOver={e => onMouseEnter(e, index, setHeaderState)}
								onClick={e => onClickFeature(e, index, setPageState)}
								key={index.toString()+' box hident'}
							/>
						)}
					</div>
				}
		
				{/* box on top */}
				<div className='panel top'>
				{config.map((value, index) => 
						<div
							style={{
								...defaultBoxStyle, 
								backgroundColor: computeHslColor(defaultHue, 0, index, boxCount),
							}}
							className={`box box${index}`}
							key={index.toString()+' box'}
						>
							{/* <div className='thumbnail' 
								style={{
									backgroundImage: `url(${config[index].thumbnail})`,
									// filter: 'grayscale(100%)'
								}}
							/> */}
							
							{
								(config[index].thumbanilType === 'video' ?
									<div className='thumbnail'>
										<video 
											src={`${config[index].thumbnail}`} autoPlay muted loop 
											style={{height:'inherit'}}
										/>
									</div>
									:
									<div className='thumbnail' 
										style={{
											backgroundImage: `url(${config[index].thumbnail})`,
											// filter: 'grayscale(100%)'
										}}
									/> 
								)
							}

						</div>	
					)}
				</div>
			</div>
		</div>
		}
		</>
  );
}

export default Main;
