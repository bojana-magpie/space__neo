import React from 'react';
import SpaceRocket from "../../assets/Img/space_rocket.jpg";
import Button from "../Common/Button/Button";
import "./Banner.css"
import SpaceRocketUp from "../../assets/Img/space_rocket_up.png";

const Banner = () => {
    return (
        <>
            <div className="space_rocket_img"
                 style={{backgroundImage: `url(${SpaceRocket})`}}>
                <div className="banner_content">
                    <h2>NEW HAWK Q7</h2>
                    <h1>MISSION QUEST 21</h1>
                    <h3>LEARN ABOUT THE MISSION</h3>
                    <Button title="WATCH THE REPLAY" link="watchthereplay" shape="btn_white"/>
                </div>
            </div>
            <div className="space_rocket_img"
                 style={{backgroundImage: `url(${SpaceRocketUp})`}}>
                <div className="banner_content">
                    <h2>NEW HAWK Q8</h2>
                    <h1>CREW MISSION 5</h1>
                    <h3>LEARN ABOUT THE MISSION</h3>
                </div>
            </div>
        </>
    )
}

export default Banner;