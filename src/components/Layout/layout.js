import React from "react";
import Navbar from "./navbar";

import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="container-layout">
            <Navbar/>

            <Outlet />

        </div>


    )

}
export default Layout;