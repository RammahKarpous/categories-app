import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <Fragment>
            <header className="container flex items-center justify-between py-5 mx-auto !mt-5">
                <p className="text-2xl font-bold uppercase">App Logo</p>

                <a href="/">Home</a>
            </header>
            
            <Outlet />
        </Fragment>
    );
}
