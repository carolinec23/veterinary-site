import React from 'react';
import "../scss/layouts/_staff.scss";

const Staff = ({ items }) => {
    const renderedItems = items.map(item => {
        return (
            <div className="staff__item">
                <div className="staffItem__image">
                    <img src={item.img} alt={item.name} />
                </div>
                <div className="staffItem__text">
                    <h3>{item.name}</h3>
                    <p>{item.occupation}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="staff__container">
            <div className="staff__wrapper">
                <h1>Our Team</h1>
                <div className="staff__items">
                    {renderedItems}
                </div>
            </div>
        </div>
    )
}

export default Staff;
