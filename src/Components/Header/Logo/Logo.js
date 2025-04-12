import React from 'react';
import LogoImage from "../../../assets/Img/spaceneo_logo.svg";
import "./Logo.css"

const Logo = () => {
    return (
        <img src={LogoImage} alt="Logo" className="logo_image"/>
    )
}

export default Logo