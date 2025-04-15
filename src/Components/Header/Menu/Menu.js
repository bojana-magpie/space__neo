import React from 'react';
import "./Menu.css"
import Hamburger from '../../../assets/Img/hamburger.svg';

const Menu = (props) => {
    return (
        <>
            <nav className="menu">
                <ul className="menu_list">
                    {props.children}
                </ul>
            </nav>
            <img src={Hamburger} className="hamburger" alt="Hamburger" />
        </>
    )
}

export default Menu;