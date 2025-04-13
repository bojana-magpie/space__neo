import React from 'react';
import Footer from "./Footer";
import LogoFooter from "./LogoFooter/LogoFooter";
import MenuFooter from "./MenuFooter/MenuFooter";
import MenuItemFooter from "./MenuFooter/MenuItemFooter/MenuItemFooter";

const FooterWrapper = (props) => {
    const items = [
        {title: "TWITTER", link: '/twitter'},
        {title: "INSTAGRAM", link: '/instagram'},
        {title: "YOUTUBE", link: '/youtube'},
        {title: "CONTACT", link: '/contact'},
        {title: "PRIVACY POLICY", link: '/privacypolicy'},
        {title: "QUEST© 2021", link: '/quest2021'}
    ]
    return (
        <Footer>
            <LogoFooter/>
            <MenuFooter>
                { items.map((item, index) => {
                    return (<MenuItemFooter key={index} title={item.title} link={item.link}/>);
                })}
            </MenuFooter>
            <div className="orange-line"></div>
        </Footer>
    )
}

export default FooterWrapper;