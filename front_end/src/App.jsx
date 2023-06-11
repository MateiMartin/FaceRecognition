import React from 'react';
import { useState } from 'react';
import ParticlesBg from 'particles-bg'
import Navigation from './components/navigation/navigation';
import ImageLinkForm from './components/FaceRecognition/ImageLinkForm';
import Logo from './components/logo/logo';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';
import 'tachyons';


function App() {
    const [route, setRoute] = useState('signin');
    const [isSignedIn, setIsSignedIn] = useState(false);

    const onRouteChange = (route) => {
        if (route === 'signout') {
            setIsSignedIn(false);
        } else if (route === 'home') {
            setIsSignedIn(true);
        }
        setRoute(route);
    }

    return (
        <div className="body">
            <ParticlesBg color='#000080' num={200} type="cobweb" bg={true} />



            {route === 'home'
                ?
                <>
                    <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                    <Logo />
                    <Rank />
                    <ImageLinkForm />
                </>
                : (
                    route === 'signout'
                        ? <>
                            <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                            <Signin onRouteChange={onRouteChange} />


                        </>
                        : route === 'signin'

                            ? <>
                                <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                                <Signin onRouteChange={onRouteChange} />
                            </>
                            :
                            <>
                                <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                                <Register onRouteChange={onRouteChange} />
                            </>
                )

            }
        </div>
    );
}

export default App;
