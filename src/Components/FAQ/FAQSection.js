import React from "react";
import MoonPhases from "../../assets/Img/moon_phases.jpg";
import "../FAQ/FAQ_child/Faq.css";
import FAQ from "../FAQ/FAQ_child/Faq"

const FAQSection = () => {
    const faqs = [
        {
            title: "WHEN IS THE NEXT LAUNCH?",
            content: `Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed.

Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed..`
        },
        {
            title: "IS THERE A RIDESHARE?",
            content: `Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed.

Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed.`
        },
        {
            title: "HOW LONG IS EACH TRIP?",
            content: `Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed.`
        }
    ];


    return (
        <div className="faq_section">
            <img src={MoonPhases} alt="moon phases" className="moon_phases_image"/>
            <h4 className="h4_faq">FAQ</h4>
            {faqs.map((faq, index) => (
                <FAQ key={index} title={faq.title} content={faq.content}/>
            ))}
        </div>
    );
};

export default FAQSection;
