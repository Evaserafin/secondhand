import React from "react";
import People from "../../assets/People.jpg";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";

const Section4 = () => {
    return (

<div className="container-box-img" style={{flex: "flex-wrap"}}>
        <div className="card-box pt-5 d-flex">

            <div className="card-body px-3 text-center" style={{backgroundColor: "#F0F1F1", maxWidth: "50%"}}>

                <h2 className="card-title" style={{padding: 40, justifyContent: "center"}}>O nas</h2>
                <img src={Decoration} style={{width: 300, maxWidth: "100%", }} alt="wzorek dekoracyjny mały"/>
                <p className="card-text" style={{textAlign: "center"}}>This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </p>
                <img className="signature-text" src={Signature} alt="podpis" style={{padding: 50}}/>

            </div>

            <img src={People} style={{maxWidth: "50%", objectFit: 'cover',}} alt="People" />
        </div>
</div>

    );
};

export default Section4;
