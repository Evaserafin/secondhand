import React from "react";
import './hero.scss';
import hero from "./images/hero.jpg";
import Decoration from "./assets/Decoration.svg";
import Section2 from "./components/Layout/section-2";
import Section3 from "./components/Layout/section-3";
import Section4 from "./components/Layout/section-4";
import Section5 from "./components/Layout/section-5";
import Section6 from "./components/Layout/section-6";

const Hero = () => {
    return (
        <div className="hero-big">
            <div className="container">
                <div className="row">
                <img className="col-12 col-sm-6" src={hero} alt="Zdjęcie ubrań"/>
                <div className="col-12 col-sm-6 mt-md-5">
                    <h1 className="text-items d-flex justify-content-center">
                        Zacznij pomagać!<br/></h1>
                    <p className="text-line" style={{textAlign: "center", fontSize: 30}}>Oddaj niechciane rzeczy w zaufane ręce</p>

                    <img className="img-fluid d-flex justify-content-center m-auto" src={Decoration} alt="wzorek dekoracyjny mały" />
                </div>
                </div>
            </div>

            <Section2/>

            <div>
                <h2 className="text-break" style={{padding: 30, display: "flex", justifyContent: "center"}}>Wystarczą 4
                    proste kroki</h2>
                <div>
                    <img style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "auto",
                        padding: 20,
                        maxWidth: "100%"
                    }} src={Decoration} alt="wzorek dekoracyjny duży"/>
                </div>

                <Section3/>
                <div className="button container text-center">

                    <button type="button" className="btn btn-outline-secondary-light border" style={{
                        margin: "auto",
                        width: 200,
                        fontSize: 20
                    }}>ODDAJ RZECZY
                    </button>
                </div>
                    <Section4/>
                    <Section5/>
                    <Section6/>
            </div>
        </div>
    )
}
export default Hero;