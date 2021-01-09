import Main from './main';
import {Features, educationAnimate, skillsAnimate, sfdispatchAnimate, recommenderAnimate, starlinkAnimate, gliderAnimate, ganartAnimate} from './features/features'
import React, {useEffect, useRef, useState} from 'react'

import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar';

import "./App.css";

const smoothScrollSetup = (mainRef) => {
	const container = mainRef.current;

	// specifiy to use the mainRef element's scrollbar, 
	const bodyScrollbar = Scrollbar.init(container, {damping: 0.03, delegateTo: container});
	bodyScrollbar.track.yAxis.element.remove();
	bodyScrollbar.track.xAxis.element.remove();
  
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

const onScroll = (e) => {
  console.log(e);
}

function App() {
  const mainRef = useRef(null);

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // disable animation and scrolling at the openning
    gsap.registerPlugin(ScrollTrigger);
    
    const scrollT = {
      trigger: '#navScroll',
      scrub: false,
      markers: false,
      start: '-20 top',
      end: '120 top',
      scroller: '.scrollable'
    };
    
    const tl = gsap.timeline();
    tl.from('#navScroll', {duration: 3.0, opacity: 0.0, delay: 3.5})
    .from('#highlight', {duration: 1.0, opacity: 0.0,})
    
    setTimeout(() => {
      setLoading(false)
      
      smoothScrollSetup(mainRef);
      
      gsap.to('.nav-helper', {duration: 2, scrollTrigger: scrollT, opacity: 0});
      
      educationAnimate();
      skillsAnimate();
      sfdispatchAnimate();
      recommenderAnimate();
      starlinkAnimate();		
      gliderAnimate();
      ganartAnimate();
      
    }, 5000)
  }, [])

  return (
    <div ref={mainRef} className='scrollable' onScroll={(e) => onScroll(e)}>
      {/* new user nav-helper */}
      <div className='nav-helper'>
        navHighlight?
          <div id="highlight" style={{top: '93vh', left: '50vw'}}>
            scroll
            <img src='/portfolio/img/arrow.png' style={{transform: 'rotate(180deg)'}} alt=''></img>
            for details
          </div>
          <div id="navScroll" style={{top: '25vh', left: '50vw'}}>
            project highlight
            <img src='/portfolio/img/arrow.png' style={{transform: 'rotate(120deg) translate(40%, -15%)'}} alt=''></img>
          </div>
      </div>

      < Main />
      {
        loading?
        <></>
        : 
        < Features props={{}}/>
      }
    </div>
  );
}

export default App;
