//import React from 'react';
 import './recentworks.css';
 import Logo from './sih.jpeg';
 import pic from './hack.jpg';
 import bike from './bike.png';
 import Typewriter from "typewriter-effect";

 const Recent=()=>{
    return(
        <>
<div className='recent'>
    <h1>RECENT WORKS</h1>
    <h2>Here are a few projects I've worked </h2>
</div>
    <div className='images'>
        <div className='work'>
            <img src={Logo}/>
            <p>Work on Smart India Hacathon<br/>
                
                
            </p>
            <div id='text'>
                <Typewriter 
                    options={{
                        strings: [
                            "TEAM-WORK",
                            
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 20,
                    }}
                />
                </div>
            </div>
            <div className='work'>
            <img src={pic}/>
            <p>Work on Internal Hacathon<br/>
            
                
            </p>
            <div id='text'>
                <Typewriter 
                    options={{
                        strings: [
                            "TEAM-WORK",
                            
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 20,
                    }}
                />
                </div>
            </div>
            <div className='work'>
            <img src={bike}/>
            <p>Bike Rental Website</p>
            <p>Start learning by doing with live project.<br/>
            Build websites using  <strong>REACT.JS</strong>
                
            </p>
            <div id='text'>
                <Typewriter 
                    options={{
                        strings: [
                            "GROUP-WORK",
                            
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 20,
                    }}
                />
                </div>
        </div>
    </div>
   
    </>
    )
 }
 export default Recent;