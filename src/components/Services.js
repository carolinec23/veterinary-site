import React from 'react';
import "../scss/layouts/_services.scss";
import Button from './Button';
import BackgroundOne from '../assets/services/rabbit.jpg';
import BackgroundTwo from '../assets/services/cat.jpg';
import BackgroundThree from '../assets/services/dog.jpg';

const Services = () => {
    return (
        <div className="services__container">
            <div className="services__wrapper">
                <div className="services__item" style={{backgroundImage: `url(${BackgroundOne})`}}>
                    <div className="services__itemContent" style={{backgroundColor: "rgba(245, 92, 101, 0.85)"}}>
                        <h4>PET</h4>
                        <h2>TESTS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci doloremque facilis.</p>
                        <Button text={"See Options"}/>
                    </div>  
                </div>
                <div className="services__item"  style={{backgroundImage: `url(${BackgroundTwo})`}}>
                    <div className="services__itemContent" style={{backgroundColor: "rgba(250, 113, 75, 0.85)"}}>
                        <h4>INTERNAL</h4>
                        <h2>MEDICINE</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quibusdam.</p>
                        <Button text={"Read More"}/>
                    </div>  
                </div>
                <div className="services__item"  style={{backgroundImage: `url(${BackgroundThree})`}}>
                    <div className="services__itemContent" style={{backgroundColor: "rgba(250, 174, 67, 0.85)"}}>
                        <h4>BODY-WORK</h4>
                        <h2>SERVICES</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, architecto officia?</p>
                        <Button text={"View All"}/>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Services
