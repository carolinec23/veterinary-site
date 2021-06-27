import React from 'react';
import '../scss/layouts/_navbar.scss';
import { FaSearch } from 'react-icons/fa';
import LogoImg from '../assets/logo.png';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({ toggle }) => {
    return (
        <div className="navbar__container">
            <div className="navbar__wrapper">
                <div className="navbar__header">
                    <div className="navbar__headerItem">
                        <i className="text-xs"><HiOutlinePhone /></i>
                        <p className="text-xs">Call +420 333 333 for emergency visits</p>
                    </div>
                    <div className="navbar__headerItem">
                        <i className="text-xs"><HiOutlineMail /></i>
                        <p className="text-xs">Email us veterinary@vet.com</p>
                    </div>
                </div>
                <div className="navbar__content">
                    <div className="navbar__logo">
                        <img src={LogoImg} alt="logo" />
                        <h4>All Paws Veterinary</h4>
                    </div>
                    <div className="navbar__items">
                        <ul>
                            <li><a href="/">Home<MdArrowDropDown/></a></li>
                            <li><a href="/">Features<MdArrowDropDown/></a></li>
                            <li><a href="/">Gallery<MdArrowDropDown/></a></li>
                            <li><a href="/">Blog<MdArrowDropDown/></a></li>
                            <li><a href="/">Shop<MdArrowDropDown/></a></li>
                            <li><a href="/">Contact<MdArrowDropDown/></a></li>
                            <li id="search__button"><i><FaSearch /></i></li>
                        </ul>
                    </div>
                    <div className="navbar__button">
                        <i><GiHamburgerMenu onClick={toggle}/></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
