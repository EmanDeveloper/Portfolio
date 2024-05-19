import './homesecond.css';
import './phone.css';
import pattern from "../assets/pattern1.jpg";
import Eman from "../assets/Eman.png";
import skill from "../assets/skill.png";
import java from "../assets/java.jpeg";
import cpp from "../assets/cpp.png";
import javascript from "../assets/JavaScript-logo.png";
import dsa from "../assets/dsa.png";
import hc from "../assets/htmcss.jpeg";
import re from "../assets/reactjs.png";
import { useEffect } from 'react';
import { useRef } from 'react';
import resume from "../assets/resume.png";
import React from 'react';
import { FaLinkedin , FaFacebook,FaInstagram } from "react-icons/fa";
import Typed from 'typed.js';
function HomeSecond(){

    const autoType = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(autoType.current, {
          strings: ['JAVA', 'CPP','DSA','Java Script','Html','Css','React'],
          loop:true,
          typeSpeed: 150,
          backSpeed:150,
          backDelay:150,
        });
    
        return () => {
        
          typed.destroy();
        };
      }, []);

   
    return(<>
    <nav>
        <div className="left">
            <h3>&lt;M EMAN &gt;</h3>
        </div>
        <div className="right">
            <ul>
                <li><a href="https://www.linkedin.com/in/muhammad-eman-02a952251/" target='_blank'><FaLinkedin/></a></li>
                <li><a href="https://www.google.com/maps"><FaFacebook/></a></li>
                <li><a href=""><FaInstagram/></a></li>
            </ul>
        </div>
    </nav>

    <div className="landing-page">
        <div className="left-landing">
            <h2 className='fw-bold'>Hi! I'm <span >EMAN</span></h2>
            <p>A Web-Developer</p>
            <div className="typeriter">
                <h1 id='ido'>I do <span ref={autoType} className="auto-type " id='auto-type'></span></h1>
            </div>
            <a href="#skill" >Skill <span>&darr;</span></a>

           
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Resume
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Resume</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <img className='container' src={resume} alt="" />
      </div>
    </div>
  </div>
</div>

        </div>
        <div className="right-landing">
            <div className='rrrr'>
            <img id='img1' src={pattern} alt="" />
            <img id='img2' src={Eman} alt="" />
            </div>
        </div>
    </div>

    <div className="about">
        <div className="about-center">
            <div className="about-right">
                <img src={Eman} alt="" />
            </div>
            <div className="about-left">
                <h2 className='text-red-500'>About me</h2>
                <p>I am a seasoned Full Stack MERN Developer with 2 years of hands-on experience in crafting robust and scalable web applications. Currently pursuing a degree in Computer Science at COMSATS University, Sahiwal Campus, I am dedicated to honing my skills and staying abreast of the latest industry trends.</p>
            </div>
        </div>
    </div>

    <div className="container-skil-above" id='skill'>
        <img src={skill} alt="" className="skill-img" />
        <div className="container-skill">
            <div className="left-skill">
        </div>
        <div>
            <img src={java} alt="" className="java-img" /><span>JAVA</span>
            <div className="skil-above">
                <div className="skil-under">
                    95%
                </div>
            </div>
            <img style={{marginTop:"1%"}} src={cpp} alt="" className="java-img" /><span>CPP</span>
            <div className="skil-above">
                <div className="skil-under" style={{width:"90%"}}>
                    90%
                </div>
            </div>
            <img style={{marginTop:"1%"}} src={javascript} alt="" className="java-img" /><span>JavaScript</span>
            <div className="skil-above">
                <div className="skil-under" style={{width:"85%"}}>
                    85%
                </div>
            </div>
            <img style={{marginTop:"1%"}} src={dsa} alt="" className="java-img" /><span>DSA</span>
            <div className="skil-above">
                <div className="skil-under" style={{width:"85%"}}>
                    85%
                </div>
            </div>
            </div>
            <div className="right-skill">
            <img style={{marginTop:"1%"}} src={hc} alt="" className="java-img" /><span>HTML AND CSS</span>
            <div className="skil-above">
                <div className="skil-under" style={{width:"85%"}}>
                    85%
                </div>
            </div>
            <img style={{marginTop:"1%"}} src={re} alt="" className="java-img" /><span>REACT JS</span>
            <div className="skil-above">
                <div className="skil-under" style={{width:"80%"}}>
                    80%
                </div>
            </div>
            </div>
        </div>
        </div>
        <footer className='footer'>
        <p>&copy; {new Date().getFullYear()}Eman Developer</p>
        </footer>
    </>)
}
export default HomeSecond;
