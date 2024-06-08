import React, {useEffect, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../styles/index.css'
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <div className='nav_container'>
      <Link className='nav-link' to='/' onClick= {()=>{
            setActive("");
            setToggle(!toggle);
            const element = document.getElementById("home");
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            };
          }}><h1 className='logo'>Jannat <span className='logo-right'>Butt</span></h1></Link>
      <div className='nav_section'>
        <Link className='nav-link'  to="/" onClick={()=>{
          setActive("");
          setToggle(!toggle);
          const element = document.getElementById("home");
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            };
          }}>
          <div className='nav-box'>Home <svg width="12" height="9" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L3 2.5L5 0.5" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
        </Link>
        <Link className='nav-link'  to="about/"
          onClick={()=>{
            setActive("");
            setToggle(!toggle);
            const element = document.getElementById("about");
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            }}
        >
          <div className='nav-box'>About <svg width="12" height="9" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L3 2.5L5 0.5" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
        </Link>
        <Link className='nav-link'  to="contact/"
          onClick={()=>{
            setActive("");
            setToggle(!toggle);
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              }
          }}
        >
          <div className='nav-box'>Contact <svg width="12" height="9" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5L3 2.5L5 0.5" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
        </Link>
      </div>
      <div className="nav_burger">
        <div className="lines1"  onClick={()=>{
          const elements = document.querySelectorAll('.small_burger');
          elements.forEach(element => {
            if (element.style.display === 'none') {
              element.style.display = 'block';
            } else {
              element.style.display = 'none';
            }
          });
        
      }}>
          <div className="line1"></div>
          <div className="line1"></div>
          <div className="line1"></div>
        </div>
        <div className="small_burger">
          <div className="lines2">
            <div className="line2"></div>
            <div className="line2"></div>
            <div className="line2"></div>
          </div>
          <div className="small_nav">
            <Link className='nav-link' to='/' onClick= {()=>{
              setActive("");
              setToggle(!toggle);
              const element = document.getElementById("home");
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
              };
            }}>Home</Link>
            <Link className='nav-link'  to="about/"
          onClick={()=>{
            setActive("");
            setToggle(!toggle);
            const element = document.getElementById("about");
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            }}
            >About</Link>
            <Link className='nav-link'  to="contact/"
          onClick={()=>{
            setActive("");
            setToggle(!toggle);
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              }
          }}
            >Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
