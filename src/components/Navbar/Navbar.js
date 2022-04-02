import React, { useEffect, useState } from 'react';
import './Navbar.css';
import 'animate.css';
import githubLogo from './img/GitHub-Mark-32px.png';
import linkedInLogo from './img/linkedInLogo.png';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const [scroll, setScroll] = useState(false)

   useEffect(()=>{
       window.addEventListener('load', ()=>{
        if(window.innerWidth >= 1040){
            setScroll(true);
        } else {
            setScroll(false);
        }
       })
       window.addEventListener('resize', ()=>{
           if(window.innerWidth >= 1040){
               setScroll(true);
           } else {
               setScroll(false);
           }
       })
   })

    return (
        <div id='navbar' className='navbar'>
            {/* Navbar Hamburger */}
            <div className={`navbar-hamburger-ctn`}>
                <i 
                    style={scroll ? {display: 'none'} : {display : 'inline-block'}}
                    onClick={handleClick} 
                    className={`fas ${click ? 'fa-window-close' : 'fa-bars'} navbar-hamburger`}>
                </i>
            </div>
            {/* Navbar links */}
            <ul 
                className={`navbar-items-ctn animate__animated animate__slideInLeft`} 
                style={scroll ? {display : 'flex'} : 
                click ? 
                {display : 'block'} : 
                {display: 'none'}}
            >
                <a className='navbar-link' href='#navbar'><li className='navbar-item'>Home</li></a>
                <a className='navbar-link' href='#about'><li className='navbar-item'>About</li></a>
                <a className='navbar-link' href='#projects'><li className='navbar-item'>Projects</li></a>
                <a className='navbar-link' href='#contact'><li className='navbar-item'>Contact</li></a>
            </ul>

            {/* Github and Linked in Links */}
            <a rel='noreferrer' target="_blank" href='http://github.com/ajax12233512'>
                <img className='github-logo' style={{display: 'inline'}} src={githubLogo} alt='Github'/>
            </a>
            <a rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/neil-juanillo-93223620a/'>
                <img className='linkedIn-logo' style={{display: 'inline'}} src={linkedInLogo} alt='LinkedIn'/>
            </a>
        </div>
    )
}

export default Navbar
