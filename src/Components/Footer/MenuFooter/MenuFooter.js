import React from 'react';
import "./MenuFooter.css"

const MenuFooter = (props) => {
    return (
        <nav className="menu_footer">
            <ul className="menu_list_footer">
                {props.children}
            </ul>
        </nav>
    )
}

export default MenuFooter;