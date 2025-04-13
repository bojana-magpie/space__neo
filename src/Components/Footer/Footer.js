import React from 'react';
import "./Footer.css"

const Footer = (props) => {
    return <footer className="footer">
        <div className="footer_inner">
            {props.children}
        </div>
    </footer>
}

export default Footer;