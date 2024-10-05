// src/intern.js
//import React from 'react';
import './resume.css';
import logo from './resume.jpg';
import Typewriter from "typewriter-effect";

function Resume() {
  return (
    <div className='resume'>
      
      
              <div id='text'>
                <Typewriter 
                    options={{
                        strings: [
                            "MY RESUME",
                            ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 5,
                    }}
                />
                </div>
     <img src={logo} alt='resume'/>
    </div>
  );
}

export default Resume;
