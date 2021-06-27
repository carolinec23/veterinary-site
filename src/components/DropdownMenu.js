import React from 'react';
import "../scss/components/_dropdownmenu.scss";
import { GrClose } from 'react-icons/gr';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const DropdownMenu = ({ isOpen, toggle }) => {
    const containerStyles = {
        opacity: (isOpen ? '1' : '0'),
        top: (isOpen ? '0' : '-100%')
    };

    return (
        <div className="dropdownmenu__container" style={containerStyles}>
           <div className="dropdownmenu__close" onClick={toggle}>
               <i><GrClose /></i>
           </div>
           <div className="dropdownmenu__wrapper">
               <div className="dropdownmenu__items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Pages</a></li>
                        <li><a href="/">Features</a></li>
                        <li><a href="/">Gallery</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
               </div>
               <div className="dropdownmenu__infoItem">
                        <i><HiOutlinePhone /></i>
                        <p>Call +420 333 333 for emergency visits</p>
                    </div>
                <div className="dropdownmenu__infoItem">
                    <i><HiOutlineMail /></i>
                    <p>Email us veterinary@vet.com</p>
                </div>
           </div>
        </div>
    )
}

export default DropdownMenu;
