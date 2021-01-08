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

const smoothScrollSetup = (mainRef) => {
	const container = mainRef.current;

	// specifiy to use the mainRef element's scrollbar, 
	const bodyScrollbar = Scrollbar.init(container, {damping: 0.05, delegateTo: container});
	// bodyScrollbar.track.yAxis.element.remove();

	ScrollTrigger.scrollerProxy(container, {
		scrollTop(value) {
			if (arguments.length) {
				bodyScrollbar.scrollTop = value;
			}
			return bodyScrollbar.scrollTop;
		},
		getBoundingClientRect() {
			return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
		}
	});

	// optimize the performance of scroll, without it, the pin functionality is terrible
	bodyScrollbar.addListener(ScrollTrigger.update);

	// since we are using the scrollbar of scrollable, we need to
	// add {scroller: '.scrollable'} to every ScrollTrigger,
	// an easy way to do it is ...
	ScrollTrigger.defaults({scroller: '.scrollable'});  
}


const staticImgScroll = (sectionName, toHeightVh) => {
	const prefix = `.features-page .${sectionName}`;
	const imgSelector = `${prefix} .img-div img`;
	const divSelector = `${prefix} .img-div`;
	const headerSelector = `${prefix} .header`;
	
	const scrollTrigger = {
		trigger: divSelector,
		start: 'top 100%',
		end: 'bottom 85%',
		markers: false,
		scrub: false,
	};

	gsap.from(imgSelector, {scrollTrigger: scrollTrigger, duration: 3.5, scale: 1.3, ease:'power'});
	gsap.from(divSelector, {scrollTrigger: scrollTrigger, duration: 2.0, height:`${toHeightVh*0.35}vh`, ease:'power2'});
	gsap.from(headerSelector, {scrollTrigger: scrollTrigger, duration: 3, opacity:0});
}

const dynamicWordsScroll = (sectionName, fromBottomMarginVh) => {
	const wordsSelector = `.features-page .${sectionName} .words`;

	const scrollTrigger = {
		trigger: wordsSelector,
		start: '-100% 85%',
		end: 'center 30%',
		markers: false,
		scrub: 1.5,
		
	};

	gsap.from(wordsSelector, {scrollTrigger: scrollTrigger, marginBottom: `${fromBottomMarginVh}vh`, opacity: '0.8'});
}

const sfdispatchAnimate = () => {
	const selectorPrefix = '.features-page .sfdispatch';
	const wordsSelector = `${selectorPrefix} .words`;
	const videoSelector = `${selectorPrefix} .video-div`;

	gsap.from(wordsSelector, {scrollTrigger: {trigger: wordsSelector, scrub: 1.5, markers:false}, marginBottom: '45vh'} );
	gsap.from(videoSelector, {
			marginBottom: '-15vh',
			scrollTrigger: {
				trigger: videoSelector, 
				start:'-300px bottom',
				end: 'center top',
				scrub: 1.0, 
				markers:false,
			}, 
		},
	);
}

const skillsAnimate = () => {
	staticImgScroll('skills', 75);
	dynamicWordsScroll('skills', -20);
}

const recommenderAnimate = () => {
	staticImgScroll('recommender', 70);
	dynamicWordsScroll('recommender', -20);
}

const starlinkAnimate = () => {
	const selectorPrefix = '.features-page .starlink';
	const imgSelector = `${selectorPrefix} .img-div img`;
	const wordsSelector = `${selectorPrefix} .words`;
	
	gsap.from(wordsSelector, {
		scrollTrigger: {
			trigger: wordsSelector,
			start: '-200% top',
			end: '-30% top',
			markers: false,
			scrub: false,
			
		},
		opacity: 0,
		duration: 2,
	})

	gsap.from(imgSelector, {
		scrollTrigger:{
			trigger: wordsSelector,
			start: '40% 50%',
			end: '350% center',
			pin: selectorPrefix,
			scrub: true,
			markers: false,
		},
		width: 0,
	})
}

const gliderAnimate = () => {
	const selectorPrefix = '.features-page .glider';
	const wordsSelector = `${selectorPrefix} .words`;
	const secondaryDivSelector = `${selectorPrefix} .secondary-img-div`;
	const secondaryImgSelector = `${selectorPrefix} .secondary-img-div img`;
	
	// major image selector
	staticImgScroll('glider', 100);
	
	const secdonaryImgScrollTrigger = {
		trigger: secondaryImgSelector,
		start: 'top 100%',
		end: 'bottom 85%',
		markers: false,
		scrub: false,
	};
	
	gsap.from(secondaryImgSelector, {scrollTrigger: secdonaryImgScrollTrigger, duration: 3.5, scale: 1.3, ease:'power'});
	gsap.from(secondaryDivSelector, {scrollTrigger: secdonaryImgScrollTrigger, duration: 2.0, height:`${10*0.35}vh`, ease:'power2'});
	
	const scrollTrigger = {
		trigger: wordsSelector,
		start: 'top 85%',
		end: 'center top',
		markers: false,
		scrub: 1.5,
	};
	
	gsap.from(wordsSelector, {scrollTrigger: scrollTrigger, y:'30%', opacity: '0.8'});
}

const ganartAnimate = () => {
	const selectorPrefix = '.features-page .ganart';
	const wordsSelector = `${selectorPrefix} .words`;
	const imgSelector = `${selectorPrefix} .img-div img`;

	const scrollTrigger = {
		trigger: wordsSelector,
		start: 'center center',
		end: '400% center',
		scrub: true,
		pin: wordsSelector,
		markers: false,
		anticipatePin: 1,
	}
	gsap.from(imgSelector, {scrollTrigger: scrollTrigger, opacity: 0.2})

}

const educationAnimate = () => {
	const selectorPrefix = '.features-page .education';
	const backgroundSelector = `${selectorPrefix} video`;
	const wordsSelector =  `${selectorPrefix} .words`;
	
	// gsap.from(backgroundSelector, {duration: 2.5, top: '100vh', ease:'power4'});
	// gsap.from(wordsSelector, {duration: 2, opacity: 0, delay: 2});

	const tl = gsap.timeline({scrollTrigger: selectorPrefix});
	tl.from(backgroundSelector, {duration: 2.5, top:'100vh', ease: 'power4'})
		.from(backgroundSelector, {duration: 1.5, opacity: 1})
		.from(wordsSelector, {duration: 2, opacity: 0});
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
		// window.document.location.hash = '';
		// window.document.location.hash = '#ganid';
		
		// window.scrollTo(0, refAggregate['ganart'].current.getBoundingClientRect().y)

		
		gsap.registerPlugin(ScrollTrigger);
		
		smoothScrollSetup(mainRef);
		
		// animation
		educationAnimate();
		skillsAnimate();
		sfdispatchAnimate();
		recommenderAnimate();
		starlinkAnimate();		
		gliderAnimate();
		ganartAnimate();
		

		// must put at the end, because the gsap pin above will rewrite ref's y coordinate value
		refAggregate[props.startSection].current.scrollIntoView({});		
	}, [])

	return (
		<div ref={mainRef} className='scrollable'>
			<div className='features-page'>
				<div style={{marginTop: '2.5vh', marginRight: '0.8vw', position:'fixed', right: 0, zIndex: 100}}>
					<a href="/" className="button" >Home</a>
				</div>


				<span ref={refAggregate['others']}></span>
				{/* education */}
				<section className='education' ref={refAggregate['education']}>
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
				</section>


				{/* skills */}
				<section className='skills' ref={refAggregate['skills']}>
					<div 
						className='img-div'
						style={{height:'75vh', width:'50vw', marginBottom:'15vh'}}
					>
						<img src="/img/skills/skills.jpg" style={{width:'inherit',}} alt=""/>
					</div>
					<div className='words' style={{marginBottom:'10vh'}}>
						<Template props={{ index: index.skills}} />
					</div>
				</section>


				{/* projects */}
				{/* SF Dispatch */}
				<section className='sfdispatch' ref={refAggregate['sfdispatch']}>
					<div className='words' style={{marginBottom:'50vh', maxWidth:'36vw'}}>
						<Template props={{ index: index.sfdispatch}} />
					</div>
					<div className='video-div' style={{marginBottom:'25vh', width:'50vw',}}>
						<video 
							src='/Videos/sfdispatch.mp4' autoPlay muted loop 
							style={{width:'inherit'}}
						/>
					</div>
				</section>


				{/* Recommender */}
				<section className='recommender' ref={refAggregate['recommender']}>
					<div 
						className='img-div'
						style={{height:'70vh', width:'50vw', marginBottom:'28vh' }}
					>
						<img src="/img/recommender/recommender.jpg" style={{width:'inherit'}} alt=""/>
					</div>
					<div className='words' style={{marginBottom:'10vh'}}>
						<Template props={{ index: index.recommender}} />
					</div>
				</section>

				{/* star link */}
				<section className='starlink' ref={refAggregate['starlink']} style={{alignItems:'flex-start', height:'150vh'}}>
					<div 
						className='img-div'
						style={{width:'50vw'}}
					>
						<img 
							src="/img/starlink/moon.png" 
							style={{
								width:'50vw', 
								position:'absolute', 
								top:'50vh', 
								left: '25vw',
								transform:'translateY(-50%) translateX(-50%)',
								// border: '1px solid white'
							}}
						/>
					</div>
					<div className='words' style={{marginTop: '37vh'}}>
						<Template props={{ index: index.starlink}}/>
					</div>
				</section>

				{/* A.I. Soaring */}
				<section className='glider' ref={refAggregate['glider']}>
					<div 
						style={{
							marginTop: '0vh',
							display:'flex', 
							flexDirection:'column', 
							justifyContent:'space-between', 
							alignItems:'center',
							height: '100vh',
						}}
					>
						<div className="words">
							<Template props={{ index: index.glider}} />
						</div>
						<div className="secondary-img-div" style={{height:'52vh', width:'35vw', marginBottom:'3vh', overflow:'hidden'}}>
							<img src="/img/glider/glider_2.png" style={{width:'inherit'}}/>
						</div>
					</div>
					<div className='img-div' style={{height:'100vh', width:'35vw', marginBottom: 0}}>
						<img src="/img/glider/glider.jpg" style={{width:'inherit', }} alt=""/>
					</div>
				</section>


				{/* Art by GANs */}
				<section className='ganart' ref={refAggregate['ganart']} style={{height: '250vh', alignItems: 'flex-start'}}>
					<div className='img-div' style={{marginTop: '50vh', height:'200vh', width:'42vw'}}>
						<img src="/img/ganart/ganart.jpg" style={{height:'inherit'}} alt=""/>
					</div>
					<div className='words' style={{marginTop:'20vh', maxWidth:'40VW'}}>
						<Template props={{ index: index.ganart}} />
					</div>
				</section>

				{/* footer copyright */}
				<div 
					id={'ganid'} 
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