import React from 'react';

const MenuItemFooter = (props) => {
    const {title, link} = props;
    return (
        <li><a href={link}> { title }</a></li>
    )
}

export default MenuItemFooter;