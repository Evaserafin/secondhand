import React from "react";
import Decoration from "../../assets/Decoration.svg";

const Section5 = () => {
    return (
        <div className="section-5 container">
            <div className="card-heading pt-5 text-center">
                <h2>Komu pomagamy?</h2>
                <div className="text-decoration">
                    <img src={Decoration} alt="wzorek dekoracyjny mały"/>
                </div>

                <div>
                    <p className="card-text2"
                       style={{textAlign: "center", paddingTop: 30, fontSize: 18, letterSpacing: 0.5}}>This is a wider
                        card with supporting text<br/>
                        below as a natural lead-in to additional content. <br/>This content is a little bit longer.This
                        is a wider card.</p>
                </div>
            </div>
        </div>
    )
}
export default Section5;