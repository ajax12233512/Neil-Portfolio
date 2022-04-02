import React from 'react';
import './About.css';
import cssLogo from './img/css.png';
import expressLogo from './img/express.png';
import htmlLogo from './img/HTML.png';
import jsLogo from './img/js.png';
import mongoLogo from './img/mongo.png';
import p5Logo from './img/p5.png';
import reactLogo from './img/react.png';
import threeLogo from './img/three.png';
import nodeLogo from './img/node.png';

function About() {
    return (
        <div id='about' className='about'>
            <div className='about-me-ctn'>
                <h2 className='about-me'>Looking for entry level job in the software engineering field.</h2>
                <i className="fas fa-laptop-code about-icon"></i>
            </div>
            <div className='about-me-ctn'>
                <h2 className='about-me'>Creative Coder who likes to work on front-end technologies</h2>
                <i className="fas fa-globe about-icon"></i>
            </div>
            <div className='about-me-ctn'>
                <h2 className='about-me'>Technologies I work with:</h2>
                <div className='about-tech-ctn'>
                    <img className='about-tech-icon' alt='icon html' src={htmlLogo}/>
                    <img className='about-tech-icon' alt='icon css' src={cssLogo}/>
                    <img className='about-tech-icon' alt='icon javascript' src={jsLogo}/>
                    <img className='about-tech-icon' alt='icon express' src={expressLogo}/>
                    <img className='about-tech-icon' alt='icon node' src={nodeLogo}/>
                    <img className='about-tech-icon' alt='icon react' src={reactLogo}/>
                    <img className='about-tech-icon' alt='icon mongo' src={mongoLogo}/>
                    <img className='about-tech-icon' alt='icon p5' src={p5Logo}/>
                    <img className='about-tech-icon' alt='icon three' src={threeLogo}/>
                </div>
            </div>
        </div>
    )
}

export default About
