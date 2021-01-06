import { React, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

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
				<div className='words' style={{
					position: 'absolute',
					border: '0.1rem solid white', 
					left: '5vw', 
					top: '50vh', 
					transform: 'translateY(-50%)',
					paddingRight: '25px',
					zIndex: 15,
				}}>
					<Template 
						props={{ index: index.education}} 
					/>
					<Template 
						props={{ index: index.others}}
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
			<section ref={refAggregate['skills']}>
				<div style={{height:'75vh', marginTop:'5vh'}}>
					<img src="/img/skills/skills.jpg" style={{height:'inherit',}} alt=""/>
				</div>
				<div className='words' style={{marginTop:'50vh'}}>
					<Template 
						props={{ index: index.skills}}
					/>
				</div>
			</section>


			{/* projects */}
			{/* SF Dispatch */}
			<section ref={refAggregate['sfdispatch']}>
				<div className='words' style={{marginTop:'10vh', maxWidth:'36vw'}}>
					<Template 
						props={{ index: index.sfdispatch}}
					/>
				</div>
				<div style={{marginTop:'30vh', height: '65vh'}}>
					<video 
						src='/Videos/sfdispatch.mp4' autoPlay muted loop 
						style={{height:'inherit'}}
					/>
				</div>
			</section>

			{/* Recommender */}
			<section ref={refAggregate['recommender']}>
				<div style={{height:'70vh', marginTop:'5vh'}}>
					<img src="/img/recommender/recommender.jpg" style={{height:'inherit',}} alt=""/>
				</div>
				<div className='words' style={{marginTop:'50vh'}}>
					<Template 
						props={{ index: index.recommender}}
					/>
				</div>
			</section>


			{/* A.I. Soaring */}
			<section ref={refAggregate['glider']}>
				<div className='words' style={{marginTop: '0vh'}}>
					<Template 
						props={{ index: index.glider, headerFontFamily: config[index.glider].headerFont}}
					/>
				<img 
					src='img/glider/glider_2.png' 
					style={{
						marginTop: '5vh',
						marginLeft: '8vh',
						height: '45vh',
						filter: 'grayscale(100%)',
					}}	 
				/>
				</div>
				<div style={{height:'100vh', marginTop:'0vh'}}>
					<img src="/img/glider/glider.jpg" style={{height:'inherit',}} alt=""/>
				</div>
			</section>

			{/* star link */}
			<section ref={refAggregate['starlink']}>
				<div style={{height:'70vh', marginTop:'5vh'}}>
					<img src="/img/starlink/moon.png" style={{height:'inherit',}} alt=""/>
				</div>
				<div className='words' style={{marginTop:'45vh'}}>
					<Template 
						props={{ index: index.starlink}}
					/>
				</div>
			</section>


			{/* Art by GANs */}
			{/* star link */}
			<section ref={refAggregate['ganart']} style={{height: '200vh'}}>
				<div style={{height:'200vh', marginTop:'0vh'}}>
					<img src="/img/ganart/ganart.jpg" style={{height:'inherit',}} alt=""/>
				</div>
				<div className='words' style={{marginTop:'35vh', maxWidth: '39vw'}}>
					<Template 
						props={{ index: index.ganart}}
					/>
				</div>
			</section>


			{/* <section className="ganart" style={{height: '200vh'}} ref={refAggregate['ganart']}>
				<div className="words" style={{top: '50vh', transform: 'translateY(-50%)', right: '10vw', maxWidth: '40vw'}}>
					<Template 
						props={{ index: index.ganart, headerFontFamily: config[index.ganart].headerFont}}
					/>
				</div>
				<img src='/img/ganart/ganart.jpg' style={{left: '3vw', top: '5vh'}}/>
			</section> */}

			<div 
				style={{
					marginTop: '15vh',position:'absolute', height:'40vh', width:'100vw', 
					backgroundColor:'#0ABAB5', color:'white', textAlign:'center',
					borderBottom: '12px solid #0ABAB5',
 				}}>
				<h1 style={{fontWeight: '200', fontSize: '2.5vh', lineHeight:'40vh'}}>
					&copy; Copyright 2021 - Zhenda Li
				</h1>
			</div>

		</div>
	);
}


export default Features;