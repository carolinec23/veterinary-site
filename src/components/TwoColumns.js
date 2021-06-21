import React from 'react';
import "../scss/layouts/_twocolumns.scss";
import Accordion from './Accordion';
import { DepartmentsData } from '../data/DepartmentsData';
import Tabs from './Tabs';
import { AdvantagesData } from '../data/AdvantagesData';

const TwoColumns = () => {
    return (
        <div className="twoColumns__container">
            <div className="twoColumns__wrapper">
                <div className="twoColumns__column">
                    <h2>Advantages</h2>
                    <Tabs items={AdvantagesData} />
                </div>
                <div className="twoColumns__column">
                    <h2>Departments</h2>
                    <Accordion items={DepartmentsData} />
                </div>
            </div>
        </div>
    )
}

export default TwoColumns;
