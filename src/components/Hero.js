import React from 'react';
import '../scss/layouts/_hero.scss';
import Button from './Button';
import DogImg from '../assets/hero/dog.png';

const Hero = () => {
    return (
        <div className="hero__container">
            <div className="hero__wrapper">
                <div className="hero__header">
                    <h4>Taking Care of Your</h4>
                    <h1>BEST FRIEND</h1>
                    <Button text={"See our Services"} />
                </div>
                <div className="hero__image">
                    <img src={DogImg} alt="dog" />
                </div>
            </div>
        </div>
    )
}

export default Hero
