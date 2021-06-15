import React from 'react';
import '../scss/layouts/_navbar.scss';
import { FaSearch } from 'react-icons/fa';
import { FaStethoscope } from 'react-icons/fa'; //temp
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className="navbar__container">
            <div className="navbar__wrapper">
                <div className="navbar__header">
                    <div className="navbar__headerItem">
                        <i><HiOutlinePhone /></i>
                        <p>Call +420 333 333 for emergency visits</p>
                    </div>
                    <div className="navbar__headerItem">
                        <i><HiOutlineMail /></i>
                        <p>Email us veterinary@vet.com</p>
                    </div>
                </div>
                <div className="navbar__content">
                    <div className="navbar__logo">
                        <FaStethoscope />
                        <img src="" alt="" />
                        <h1>Veterinary</h1>
                    </div>
                    <div className="navbar__items">
                        <ul>
                            <li><a href="">Home<MdArrowDropDown/></a></li>
                            <li><a href="">Pages<MdArrowDropDown/></a></li>
                            <li><a href="">Features<MdArrowDropDown/></a></li>
                            <li><a href="">Gallery<MdArrowDropDown/></a></li>
                            <li><a href="">Blog<MdArrowDropDown/></a></li>
                            <li><a href="">Shop<MdArrowDropDown/></a></li>
                            <li><a href="">Contact<MdArrowDropDown/></a></li>
                            <li><i><FaSearch /></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
