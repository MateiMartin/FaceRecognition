import React from "react";
import { useState } from "react";

function Navigation({ onRouteChange, isSignedIn }) {

    if (isSignedIn) {
        return (
            <nav style={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <a href="https://github.com/MateiMartin" className="f3 link dim white underline pa3 pointer">Contact me</a>
                <p onClick={() => onRouteChange('signout')} className="f3 link dim white underline pa3 pointer">Sign Out</p>

            </nav>)
    } else {
        return (
            <nav style={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <a href="https://github.com/MateiMartin" className="f3 link dim white underline pa3 pointer">Contact me</a>
                <p onClick={() => onRouteChange('signin')} className="f3 link dim white underline pa3 pointer">Sign In</p>
                <p onClick={() => onRouteChange('registre')} className="f3 link dim white underline pa3 pointer">Register</p>
            </nav>)
    }

}

export default Navigation;