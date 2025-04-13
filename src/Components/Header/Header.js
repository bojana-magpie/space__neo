import React from 'react';
import "./Header.css"

const Header = (props) => {
    return <header className="header">
        <div className="header_inner">
            {props.children}
        </div>
    </header>
}

export default Header;