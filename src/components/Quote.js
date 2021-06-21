import React from 'react';
import '../scss/components/_quote.scss';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Quote = ({ text, author}) => {
    return (
        <div className="quote__container">
            <div className="quote__content">
                <i><ImQuotesLeft /></i>
                <h3>{text}</h3>
                <i><ImQuotesRight /></i>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default Quote
