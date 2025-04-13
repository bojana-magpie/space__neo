import React from 'react';

const MenuItemFooter = ({ title, link, isLast }) => {
    return (
        <li>
            <a href={link}>{title}</a>
        </li>
    );
};

export default MenuItemFooter;