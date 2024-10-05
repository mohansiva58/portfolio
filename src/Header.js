import React from 'react';
import './header.css';
import logo from './image.png'; // Ensure this is the correct path
import Typewriter from "typewriter-effect";

// Header component
const Header = () => {
    return (
        <>
        <div className='align'>
            <div className='para'> 
                <h2>Hi there !👋🏻</h2>
                 <h1 >
                I'M
                <strong > MOHAN SIVA THOTA</strong>
              </h1>
              <div id='text'>
                <Typewriter 
                    options={{
                        strings: [
                            "Software Developer",
                             
                            
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 20,
                    }}
                />
                 <Typewriter 
                    options={{
                        strings: [
                           
                             "Full Stack Developer",
                            
                            
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 20,
                    }}
                />
                 <Typewriter 
                    options={{
                        strings: [
                            
                        "MERN Stack Developer",
                            
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 20,
                    }}
                />
                </div>
            </div>
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            </div>
           
        </>
    );
}

export default Header; // Only one default export
