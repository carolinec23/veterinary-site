import React from 'react';
import "../scss/layouts/_footer.scss";
import { TiPhoneOutline, TiLocationOutline, TiMail } from 'react-icons/ti';
import Form from "./Form";
import Logo from "../assets/logo.png";

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__wrapper">
                <h1>Contacts</h1>
                <div className="footer__contacts">
                    <div className="footerContacts__item">
                        <div className="footerContacts__icon">
                            <i><TiPhoneOutline /></i>
                        </div>
                        <div className="footerContacts__text">
                            <p><span>Phone: </span>+123 888 444</p>
                            <p><span>Fax: </span>+40 880 211</p>
                        </div>
                    </div>
                    <div className="footerContacts__item">
                        <div className="footerContacts__icon">
                            <i><TiLocationOutline /></i>
                        </div>
                        <div className="footerContacts__text">
                            <p>852 Marshville Road</p>
                            <p>Boston, Massachusetts</p>
                            <p>United States</p>
                        </div>
                    </div>
                    <div className="footerContacts__item">
                        <div className="footerContacts__icon">
                            <i><TiMail /></i>
                        </div>
                        <div className="footerContacts__text">
                            <p>allpawsvet@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer__form">
                    <Form />
                </div>
                <div className="footer__copyright">
                    <img src={Logo} alt="logo" />
                    <h2>All Paws Veterinary</h2>
                    <p className="text-xs">Copyright 2021 All Paws Veterinary</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
