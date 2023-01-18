import React from "react";
import './section-6.scss';
import Backgroundcontactform from "../../assets/Background-Contact-Form.jpg";
import Decoration from "../../assets/Decoration.svg";

const Section6 = () => {
    return (
        <div className="">
            <div className="row bg-kontakt my-5 g-0 shadow-lg" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${Backgroundcontactform})`,
                backgroundPosition: 'center',
            }}>
                <div className="col-md-6 bg-opacity-0 p-5 ms-auto" style={{position: "relative", zIndex: 10}}>
                    <h3 className="pb-3">Skontaktuj się z nami</h3>
                    <img src={Decoration} alt="wzorek dekoracyjny mały"/>
                    <div className="form-style">
                        <form>
                            <div>Wpisz swoje imię</div>
                            <div className="form-group pb-3">
                                <input type="name" placeholder="Imię" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="name"/>
                            </div>
                            <div>Wpisz swój email</div>
                            <div className="form-group pb-3">
                                <input type="email" placeholder="Email" className="form-control"
                                       id="exampleInputEmail"/>
                            </div>
                            <div>Wpisz swoją wiadomość</div>
                            <div className="form-group pb-3">
                                <input type="massage" placeholder="Wiadomośc" className="form-control"
                                       id="exampleInputMessage"/>
                            </div>
                            <div className="pb-2">
                                <button type="submit" className="btn btn bg-transparent w-100 font-weight-bold mt-2 m-lg-6">Wyślij
                                </button>
                            </div>
                        </form>

                        <div className="pt-4 text-center">
                            <a href="/" style={{color: "black"}}>Zaloguj się</a>
                        </div>
                    </div>

                </div>
            </div>
            </div>

    )
}
export default Section6;