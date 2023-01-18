import React from 'react';
import Decoration from "../assets/Decoration.svg";
import Navbar from "./Layout/navbar";
import Footer from "./Layout/Footer";

const Login = () => {
    return (
        <div>
            <Navbar/>
        <h1 className="header-login" style={{textAlign: "center", paddingTop: 80}}>Zaloguj się</h1>
            <img className="img-fluid d-flex justify-content-center m-auto" src={Decoration}
                 alt="wzorek dekoracyjny mały"/>
            <div className="area-box-form" style={{display: "flex", justifyContent: "center", alignItems: "center", padding: 20}}>
            <form email="myemail" method="email" action="abc.jsp" onSubmit="return validateform()" style={{backgroundColor: "#F0F1F1",padding: 50, paddingBottom: 150}}>
                Email: <input type="text" name="email" style={{border: "none", margin: 20}}/><br/>
                Hasło: <input type="password" name="password" style={{border: "none", margin: 20}}/><br/>
                    <input type="submit" value="Zaloguj się" style={{border: "none", margin: 20}}/>
                    <input type="submit" value="Zarejestruj się" style={{border: "none", margin: 20}}/>
            </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login;
