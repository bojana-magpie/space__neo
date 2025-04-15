import React from 'react';
import "./OneCard.css"

const OneCard = (props) => {
    const {image, date, title, content} = props
    return (
        <>
            <div className="one_card">
                <div className="img_date">
                    <img src={image} alt="Card 1" className="card_image"/>
                    <p className="date">{date}</p>
                </div>
                <div className="card_content">
                    <h5>{title}</h5>
                    <p className="p_card">{content}</p>
                </div>
            </div>
          </>

    )
}

export default OneCard;