import React from 'react';

const Menu = (props) => {
    return (
        <nav className="menu">
            <ul>
                {props.children}
            </ul>
        </nav>
    )
}

export default Menu;