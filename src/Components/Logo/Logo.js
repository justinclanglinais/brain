import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brainlogo from './brainlogo.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' style={{width : '140px', height : '140px'}} tiltMaxAngleX='50' tiltMaxAngleY='50'>
                <div>
                    <img style={{padding: '20px'}} alt='logo' src={brainlogo} />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;