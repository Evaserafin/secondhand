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
                <div className="accordion-button">
                    <div className="container px-4 d-flex justify-content-center mt-5">
                        <div className="row gx-5">
                            <div className="col">
                                <div className="p-3 border bg-transparent">Fundacjom</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-transparent">Organizacjom pozarządowym</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-transparent">Lokalnym zbiórkom</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <p className="card-text2" style={{textAlign: "center", paddingTop: 30}}>This is a wider card with supporting text
                        below as a natural lead-in to
                        additional content. This content is a little bit longer.This is a wider card with supporting
                        text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    )
}
export default Section5;