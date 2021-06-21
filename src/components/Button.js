import React from 'react';
import '../scss/components/_button.scss';

const Button = (props) => {
    return (
        <button>
            {props.text}
        </button>
    )
}

export default Button;
