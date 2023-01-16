import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/layout";
import Hero from "./Hero";


// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import Login from './components/Login';
import Register from "./components/Register";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1p2H3GTV3wA1zDulPr8Lihh2ZCp-VPS8",
    authDomain: "park-2aa5d.firebaseapp.com",
    projectId: "park-2aa5d",
    storageBucket: "park-2aa5d.appspot.com",
    messagingSenderId: "778275021799",
    appId: "1:778275021799:web:ac44aa7d9a95ee4a179342",
    measurementId: "G-9L32LZ4YB3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path={"/"} element={<Layout/>}>


                        <Route path="" element={<Hero/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
