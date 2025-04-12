import React from "react";
import "./Faq.css";

const FAQ = ({ title, content }) => {
    return (
        <div className="faq_div">
            <h6>{title}</h6>
            <p className="p_faq">{content}</p>
        </div>
    );
};

export default FAQ;
