import React from "react";
import SpaceRocketInvolved from "../../assets/Img/space_rocket_involved.jpg";
import Button from "../Common/Button/Button";
import "./GetInvolved.css"

const GetInvolved = (props) => {
    return (
        <>
            <div className="space_rocket_involved"
                style={{ backgroundImage: `url(${SpaceRocketInvolved})` }}>
                <div className="overlay_text">LAUNCH</div>
                <div className="info_box">
                    <div className="infobox_content">
                        <h4>GET INVOLVED</h4>
                        <p className="p_infobox_1">Lorem ipsum text as placeholder for this section of text. To be
                            filled in later with something meaningful and space themed. Lorem ipsum text as placeholder
                            for this section of text. To be filled in later with something meaningful and space themed.
                            Lorem ipsum text as placeholder for this section of text. To be filled in later with
                            something meaningful and space themed.</p>
                        <p className="p_infobox_2">Lorem ipsum text as placeholder for this section of text. To be
                            filled in later.</p>
                        <Button title="GET INVOLVED" link="getinvolved" shape="btn_white"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetInvolved;