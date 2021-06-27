import React from 'react';
import "../scss/components/_progresscircle.scss";

const ProgressCircle = ({percentage, label}) => {
    const style = {strokeDashoffset: ((100 * 6) - ((100 * 6) * percentage) / 100)};

    return (
        <div className="circle__container">
            <div className="circle__wrapper">
            	<svg>
            		<circle cx="100" cy="100" r="95"/>
            	    <circle cx="100" cy="100" r="95" style={style}/>
            	</svg>
            	<div className="circle__content">
                    <h1>{percentage}%</h1>
                    <p>{label}</p>
                </div>
            </div>	
        </div>
    )
}

export default ProgressCircle;
