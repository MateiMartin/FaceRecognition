import React from 'react';
import GithubIcon from './github.svg';

function Navigation({ onRouteChange, isSignedIn, route }) {

    const gitHubImg = <img src={GithubIcon} alt="GitHub" className="ml1 mb2" />;

    if (isSignedIn && route === 'home') {
        return (
            <nav className="flex justify-end items-center">
                <a href="https://github.com/MateiMartin" className="f3 link white pa3 pointer underline-hover flex items-center"> My GitHub{gitHubImg}</a>
                <p onClick={() => onRouteChange('signout')} className="f3 link white pa3 pointer underline-hover">Sign Out</p>
                <p onClick={() => onRouteChange('profile')} className="f3 link white pa3 pointer underline-hover">Profile</p>
            </nav>
        );
    } else if (isSignedIn && route === 'profile') {
        console.log(route)
        return (
            <nav className="flex justify-end items-center">
                <a href="https://github.com/MateiMartin" className="f3 link white pa3 pointer underline-hover flex items-center"> My GitHub{gitHubImg}</a>
                <p onClick={() => onRouteChange('signout')} className="f3 link white pa3 pointer underline-hover">Sign Out</p>
                <p onClick={() => onRouteChange('home')} className="f3 link white pa3 pointer underline-hover">Home</p>
            </nav>
        );
    }
    else {
        return (
            <nav className="flex justify-end items-center">
                <a href="https://github.com/MateiMartin" className="f3 link white pa3 pointer underline-hover flex items-center"> My GitHub{gitHubImg}</a>
                <p onClick={() => onRouteChange('signin')} className="f3 link white pa3 pointer underline-hover">Sign In</p>
                <p onClick={() => onRouteChange('registre')} className="f3 link white pa3 pointer underline-hover">Register</p>
            </nav>
        );
    }
}

export default Navigation;
