import Tilt from 'react-parallax-tilt';
import React from "react";
import './logo.css';
import camera from './camera.png';

function Logo() {
    return (
        <div className='ma4 mt0 '>
            <Tilt className="tilt" tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <div className='tilt-inner br2 mt0 shadow-2' >
                   <img className='logo' src={camera} alt="logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;