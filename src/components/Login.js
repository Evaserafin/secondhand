import React from 'react';
import Decoration from "../assets/Decoration.svg";
import Navbar from "./Layout/navbar";
import Footer from "./Layout/Footer";

import { useState } from 'react';


function Login () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);

    const login = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        const userData = {
            name,
            email,
            password,
        };
        localStorage.setItem('token-info', JSON.stringify(userData));
        setIsLoggedin(true);
        setName('');
        setEmail('');
        setPassword('');
    };

    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
    };

    return (
        <>

            <Navbar/>

            <h1 className="header-login" style={{textAlign: "center", paddingTop: 80}}>Wylogowanie nastąpiło <br/>pomyślnie!</h1>
            <img className="img-fluid d-flex justify-content-center m-auto" src={Decoration}
                 alt="wzorek dekoracyjny mały"/>
            <div style={{ textAlign: 'center'}}>

                {!isLoggedin ? (
                    <div>
                        <form email="myemail" method="email" action="" onSubmit="return validateform()"  style={{backgroundColor: "#F0F1F1", padding: 50, paddingBottom: 150, display: "flex", justifyContent: "center", alignItems: "center"}}>

                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                placeholder="Password"
                            />

                            <button type="submit" onClick={login}>Zaloguj się</button>
                            <button type="submit" onClick={login}>Wyloguj się</button>
                        </form>
                    </div>
                ) : (
                    <>

                    <div style={{paddingTop: 100, paddingBottom: 100}}>
                        <button style={{backgroundColor: "white", width: 200}}><a href="/" style={{color: "black", textDecoration: "none", paddingTop: 20}}>Strona Główna</a></button>
                    </div>
                    </>
                )}
                <Footer/>
            </div>
        </>
    );
}

export default Login;


