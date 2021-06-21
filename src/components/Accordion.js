import React, { useState } from 'react';
import '../scss/components/_accordion.scss';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex (null);
        } else {
            setActiveIndex(index);
        }
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        const icon = index === activeIndex ? <AiOutlineMinus /> : <AiOutlinePlus />;

        return (
            <>
                <div className={`accordionItem__title ${active}`} onClick={() => onTitleClick(index)}>
                    {item.title}
                    <i>{icon}</i>
                </div>
                <div className={`accordionItem__content ${active}`} >
                    <p>{item.content}</p>
                </div>
            </>
        )
    });

    return (
        <div className="accordion__container">
            {renderedItems}
        </div>
    )
}

export default Accordion;
