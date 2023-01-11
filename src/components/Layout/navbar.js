import React from "react";

const Navbar = () => {
    return (
        <>
        <div className="container-fluid d-flex justify-content-end">
            <button className="btn btn-light">Zaloguj się</button>
            <button className="btn btn-light">Zarejestruj się</button>
        </div>

        <nav className="navbar navbar-expand-lg bg-light"
             style={{ background: "white"}}>
            <div className="container-fluid justify-content-end">
                <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Start</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">O co chodzi?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">O nas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fundacje i organizacje</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Kontakt</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>

        </nav>
        </>
    );
};

export default Navbar;
