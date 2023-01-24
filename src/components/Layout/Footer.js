import React from "react";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
const Footer = () => {

    return (
        <div>
            <div className="bottom-section" style={{textAlign: "center", paddingBottom: 10}}>Copyright by Coders Lab
            </div>
            <div className="icons" style={{display: "flex", justifyContent: "flex-end", padding: 30, maxWidth: "100%"}}>
            <img src={Facebook} alt="facebook icon" style={{paddingRight: 35}}/>
            <img src={Instagram} alt="instagram icon" style={{paddingRight: 35}}/>
            </div>
        </div>
    )
}
export default Footer;