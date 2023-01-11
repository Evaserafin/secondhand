import React from "react";
import hero from "../../images/hero.jpg";
import Navbar from "./navbar";
import Section2 from "./section-2";


const Layout = () => {
    return (
        <div className="container-layout">
            <Navbar />

            <div className="container d-flex justify-content-between">
                <img className="col-12 col-md-6" src={hero} alt="Zdjęcie ubrań" />
                <div className="col-12 col-md-6 mt-md-5">
                    <p className="text-items">
                        Zacznij pomagać!<br/>
                        Oddaj niechciane rzeczy w zaufane ręce
                    </p>
                </div>
            </div>

            <Section2 />
        </div>

    )

}
export default Layout;