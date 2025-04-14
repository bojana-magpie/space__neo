import React from "react";
import "./Faq.css";

const FAQ = ({ title, content }) => {

    const paragraphs = content.split("\n\n");

    return (
        <div className="faq_div">
            <h6>{title}</h6>
            {paragraphs.map((para, index) => (
                <p key={index} className="p_faq">{para}</p>
            ))}
        </div>
    );
};

export default FAQ;
