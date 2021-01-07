import { React, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar';

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

const staticImgScroll = (sectionName, toHeightVh) => {
	const prefix = `.features-page .${sectionName}`;
	const imgSelector = `${prefix} img`;
	const divSelector = `${prefix} .img-div`;
	const headerSelector = `${prefix} .header`;

	const scrollTriger = {
		trigger: divSelector,
		start: 'top 75%',
		end: 'bottom 85%',
		markers: true,
		scrub: false,
	};

	gsap.from(imgSelector, {scrollTrigger: scrollTriger, duration: 2, scale: 1.1});
	gsap.from(divSelector, {scrollTrigger: scrollTriger, duration: 1, height:`${toHeightVh*0.6}vh`});
	gsap.from(headerSelector, {scrollTrigger: scrollTriger, duration: 2, opacity:0});
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
	
	const mainRef = useRef(null);

	useEffect(() => {
		refAggregate[props.startSection].current.scrollIntoView({});
		gsap.registerPlugin(ScrollTrigger);

		// Smooth scroll setup
		const bodyScrollBar = Scrollbar.init(mainRef.current, { damping: 0.06 });
		
		bodyScrollBar.setPosition(0, 0);
		bodyScrollBar.track.xAxis.element.remove();

		// How to get them to work together
		ScrollTrigger.scrollerProxy('body', {
			scrollTop(value) {
				if (arguments.length) {
					bodyScrollBar.scrollTop = value;
				}
				return bodyScrollBar.scrollTop;
			}
		});


		// animation
		staticImgScroll('recommender', 70);
	}, [])

	return (
		<div ref={mainRef} className='scrollable'>
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
						<Template props={{ index: index.education}} />
						<Template props={{ index: index.others}} />
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
					<div style={{height:'75vh', marginBottom:'5vh'}}>
						<img src="/img/skills/skills.jpg" style={{height:'inherit',}} alt=""/>
					</div>
					<div className='words' style={{marginTop:'50vh'}}>
						<Template props={{ index: index.skills}} />
					</div>
				</section>


				{/* projects */}
				{/* SF Dispatch */}
				<section ref={refAggregate['sfdispatch']}>
					<div className='words' style={{marginTop:'10vh', maxWidth:'36vw'}}>
						<Template props={{ index: index.sfdispatch}} />
					</div>
					<div style={{marginTop:'30vh', height: '65vh'}}>
						<video 
							src='/Videos/sfdispatch.mp4' autoPlay muted loop 
							style={{height:'inherit'}}
						/>
					</div>
				</section>


				{/* Recommender */}
				<section className='recommender' ref={refAggregate['recommender']}>
					<div className='img-div'
						style={{height:'70vh', width:'50vw', marginBottom:'20vh' }}
					>
						<img src="/img/recommender/recommender.jpg" style={{width:'inherit'}} alt=""/>
					</div>
					<div className='words' style={{marginTop:'50vh'}}>
						<Template props={{ index: index.recommender}} />
					</div>
				</section>


				{/* A.I. Soaring */}
				<section ref={refAggregate['glider']}>
					<div className='words' style={{marginTop: '0vh'}}>
						<Template props={{ index: index.glider}} />
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
				<section ref={refAggregate['ganart']} style={{height: '200vh'}}>
					<div style={{height:'200vh', marginTop:'0vh'}}>
						<img src="/img/ganart/ganart.jpg" style={{height:'inherit',}} alt=""/>
					</div>
					<div className='words' style={{marginTop:'35vh', maxWidth: '39vw'}}>
						<Template props={{ index: index.ganart}} />
					</div>
				</section>

				{/* footer copyright */}
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
		</div>
	);
}


export default Features;