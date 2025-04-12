import React from 'react';
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem/MenuItem";
import Header from "./Header";

const HeaderWrapper = (props) => {
    const items = [
        {title: "OUR MISSION", link: '/ourmission'},
        {title: "RIDESHARE", link: '/rideshare'},
        {title: "ENGINES", link: '/engines'},
        {title: "CAREERS", link: '/careers'},
        {title: "SHOP", link: '/shop'}
    ]
    return (
        <Header>
            <Logo/>
            <Menu>
                { items.map((item) => {
                    return (<MenuItem title={item.title} link={item.link}/>);
                })}
            </Menu>
        </Header>
    )
}

export default HeaderWrapper;