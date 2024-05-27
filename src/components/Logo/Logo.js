import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt 
                className='Tilt br2 shadow-2'
                style={{width: '150px', height:'150px'}}
                options={{ max: 55, speed: 400, glare: true, "max-glare": 0.5 }}>
                    <div className='inner-tilt pa2' style={{ height: '150px', width: '150px',}}>
                        <h1 className='logo-text'>
                            <img alt='logo'src={brain}></img></h1>
                    </div>
            </Tilt>
        </div>
    );
}

export default Logo;