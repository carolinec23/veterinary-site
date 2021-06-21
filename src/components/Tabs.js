import React, { useState } from 'react';
import "../scss/components/_tabs.scss";

const Tabs = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <div className={`tabsItem__title ${active}`} onClick={() => onTitleClick(index)}>
                {item.title}
            </div>
        )
    });

    return (
        <div className="tabs__container">
            <div className="tabs__items">
                {renderedItems}
            </div>
            <div className="tabsItem__content" >
                    <img src={items[activeIndex].image} alt="" />
                    <p>{items[activeIndex].text}</p>
            </div>
        </div>
    )
}

export default Tabs;
