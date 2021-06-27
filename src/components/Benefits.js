import React from 'react';
import "../scss/layouts/_benefits.scss";
import VetImg from "../assets/benefits/vet.png";

const Benefits = ({ items }) => {
    const renderedItems = items.map(item => {
        return (
            <div className="benefits__item">
                <i>{item.icon}</i>
                <div className="benefits__itemText">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="benefits__container">
            <div className="benefits__wrapper">
                <div className="benefits__content">
                    <div className="benefits__header">
                        <h1>Why Choose Us?</h1>
                        <h3 id="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia culpa temporibus eum vel laudantium!</h3>
                    </div>
                    <div className="benefits__items">
                        {renderedItems}
                    </div>
                </div>
                <div className="benefits__image">
                    <img src={VetImg} alt="vet with dog" />
                </div>
            </div>
        </div>
    )
}

export default Benefits
