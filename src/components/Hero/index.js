import React from 'react';
import { Button } from '../ButtonElement';
import './Hero.css';

function HeroSection() {
    return(
        <div className="HeroContainer">
            <h1>Travel More</h1>
            <p>Plan your next trip today</p>
            <div className="HeroBtns">
               <a href="https://github.com/philemonpeter02" rel="noreferrer" target="_blank"> <Button fontBig big primary>Github</Button></a>
            </div>
        </div>  
    )
}

export default HeroSection