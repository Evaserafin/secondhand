import React from "react";
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <div className="container-fluid d-flex justify-content-end">
            <NavLink to={"/login"}><button className="btn btn-body m-4">Zaloguj się</button></NavLink>
            <NavLink to={"/register"}><button className="btn btn-body m-4">Zarejestruj się</button></NavLink>
        </div>

        <nav className="navbar navbar-expand-lg bg-body" style={{ background: "white"}}>
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
                            <Link to={"o-nas"} smooth duration={500} className="nav-link">Fundacje i organizacje</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"oddaj-rzeczy"} smooth duration={500} className="nav-link">Kontakt</Link>
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
