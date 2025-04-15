import React from 'react';
import "./Cards.css"
import OneCard from "./OneCard/OneCard";
import ImageCard1 from "../../assets/Img/card_1.jpg";
import ImageCard2 from "../../assets/Img/card_2.jpg";
import ImageCard3 from "../../assets/Img/card_3.jpg";
import Button from "../Common/Button/Button";

const Cards = () => {
    return (
        <div className="cards_white_section">
            <div className="cards_flex">
                <OneCard
                    image={ImageCard1}
                    date="May 8, 2021"
                    title={<span className="card_title">New Hawk Set to Launch in early May</span>}
                    content="Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. "/>
                <OneCard image={ImageCard2}
                         date="May 11, 2021"
                         title={<span className="card_title">See how Space:Neo is changing satellite launches</span>}
                         content="To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. Lorem ipsum text as placeholder for this section of text. Lorem ipsum text as placeholder for this section of text."/>
                <OneCard image={ImageCard3}
                         date="May 22, 2021"
                         title={<span className="card_title">Jupiter Mission is moving ahead of schedule</span>}
                         content="Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. "/>
                <div className="btn_black_div one_card btn_card tablet_only">
                    <div className="btn_card_inner">
                        <Button title="SEE ALL NEWS UPDATES" link="seeallnewsupdates" shape="btn_black"/>
                    </div>
                </div>
            </div>
            <div className="btn_black_div desktop_only">
                <Button title="SEE ALL NEWS UPDATES" link="seeallnewsupdates" shape="btn_black"/>
            </div>
        </div>
    )
}

export default Cards;