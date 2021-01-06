import { React, useEffect, useRef } from "react";

import Template from './template';
import config from '../boxConfig';
import "./styles/features.css";


const index = {};

for (let i = 0; i < config.length; i++) {
	index[config[i].name] = i;
}

const onClick = (sectionRef) => {
	sectionRef.current.scrollIntoView({ behavior: 'smooth' })
}

function Features({props}) {

	const refAggregate = {};
	refAggregate['education'] = useRef(null);
	refAggregate['skills'] = useRef(null);
	refAggregate['glider'] = useRef(null);
	refAggregate['ganart'] = useRef(null);
	refAggregate['recommender'] = useRef(null);
	refAggregate['starlink'] = useRef(null);
	refAggregate['sfdispatch'] = useRef(null);
	refAggregate['others'] = useRef(null);
	

	useEffect(() => {
		refAggregate[props.startSection].current.scrollIntoView({ behavior: 'smooth' })
	}, [])

	return (
		<div className='features-page'>
			<div style={{marginTop: '2.5vh', marginRight: '0.8vw', position:'fixed', right: 0, zIndex: 100}}>
				<a href="/" className="button" >Home</a>
			</div>


			{/* education */}
			<section className='education' ref={refAggregate['education']}>
				<span ref={refAggregate['others']}></span>
				<div className='words' style={{border: '0.1rem solid white', left: '5vw', top: '50vh', transform: 'translateY(-50%)'}}>
					<Template 
						props={{ index: index.education, headerFontFamily: config[index.education].headerFont}} 
					/>
					<Template 
						props={{ index: index.others, headerFontFamily: config[index.others].headerFont}}
					/>
				</div>
				<video 
					src='/Videos/ink_1.mp4' autoPlay muted loop 
					style={{
						position:'absolute',
						top: 0,
						left: 0, 
						height: '100%',
						width: '100%',
						opacity: 0.35,
						objectFit: 'cover',
					}}
				/>
				<div style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background: 'hsl(0,0,10%)',
						mixBlendMode: 'overlay',
				}}/>

			</section>


			{/* skills */}
			<section className="skills" ref={refAggregate['skills']}>
				<div className='words' style={{right: '2vw', top: '15vh'}}>
				<Template 
					props={{ index: index.skills, headerFontFamily: config[index.skills].headerFont}}
				/>
				</div>
				<img src='/img/skills/skills.jpg' style={{height: '70vh', left:'2vw', bottom: '0vw'}}/>
			</section>


			{/* projects */}
			{/* SF Dispatch */}
			<section className='sfdispatch' ref={refAggregate['sfdispatch']}>
				<div className='words' style={{left: '-1vw', bottom: '5vh', maxWidth: '40vw'}}>
					<Template 
						props={{ index: index.sfdispatch, headerFontFamily: config[index.sfdispatch].headerFont}}
					/>
				</div>
				<video 
					src='/Videos/sfdispatch.mp4' autoPlay muted loop 
					style={{
						position: 'absolute',
						right: '2vw',
						top: '50vh',
						transform: 'translateY(-50%)',
						zIndex: -1,
						height: '60vh', 
					}}
				/>
			</section>

			{/* Recommender */}
			<section className='recommender' ref={refAggregate['recommender']} >
				<div className='words' style={{right: '5vw', bottom: '10vh'}}>
					<Template 
						props={{ index: index.recommender, headerFontFamily: config[index.recommender].headerFont}}
					/>
				</div>
				<img 
					src='/img/recommender/recommender.jpg' 
					style={{
						top: '5vh',
						height: '70vh',
						left: '3vw',
					}}
				/>
			</section>

			{/* A.I. Soaring */}
			<section className="glider" ref={refAggregate['glider']}>
				<div className='words' style={{top: '10vh', left: '5vw'}}>
					<Template 
						props={{ index: index.glider, headerFontFamily: config[index.glider].headerFont}}
					/>
				</div>
				<img
					src="img/glider/glider.jpg"
					style={{
						height: "85vh",
						right: "10vw",
						top: "10vh",
					}}
				/>
				<img 
					src='img/glider/glider_2.png' 
					style={{
						height: '40vh',
						left: '8vw',
						bottom: '0vh',
						filter: 'grayscale(100%)',
					}}	 
				/>

			</section>

			{/* star link */}
			<section className="starlink" ref={refAggregate['starlink']}>
				<div className="words" style={{top: '25vh', right: '10vw'}}>
					<Template 
						props={{ index: index.starlink, headerFontFamily: config[index.starlink].headerFont}}
					/>
				</div>
				<img 
					src='/img/starlink/moon.png' 
					style={{
						height: '75vh',
						left: '5vw',
						top: '-20vh',
					}}
				/>
			</section>

			{/* Art by GANs */}
			<section className="ganart" style={{height: '200vh'}} ref={refAggregate['ganart']}>
				<div className="words" style={{top: '50vh', transform: 'translateY(-50%)', right: '10vw', maxWidth: '40vw'}}>
					<Template 
						props={{ index: index.ganart, headerFontFamily: config[index.ganart].headerFont}}
					/>
				</div>
				<img src='/img/ganart/ganart.jpg' style={{left: '3vw', top: '5vh'}}/>
			</section>

			<div 
				style={{
					marginTop: '15vh',position:'absolute', height:'30vh', width:'100vw', 
					backgroundColor:'#0ABAB5', color:'white', textAlign:'center',
					borderBottom: '12px solid #0ABAB5',
 				}}>
				<h1 style={{fontWeight: '200', fontSize: '3vh', lineHeight:'30vh'}}>
					&copy; Copyright 2021 - Zhenda Li
				</h1>
			</div>

		</div>
	);
}


export default Features;