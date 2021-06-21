import React from 'react';
import "../scss/layouts/_stats.scss";
import ProgressCircle from './ProgressCircle';

const Stats = () => {
    return (
        <div className="stats__container">
            <div className="stats__wrapper">
                <div className="stats__item">
                    <ProgressCircle percentage={80} label={"Surgery Success"}/>
                </div>
                <div className="stats__item">
                    <ProgressCircle percentage={94} label={"Client Satisfaction"}/>
                </div>
                <div className="stats__item">
                    <ProgressCircle percentage={100} label={"Happy Pets"} />
                </div>
            </div>
        </div>
    )
}

export default Stats;
