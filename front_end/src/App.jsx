import React from 'react';
import { useState, useEffect } from 'react';
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
    const [working, setWorking] = useState(true);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    });

    useEffect(() => {

        fetch('http://localhost:3000/')
            .then(response => response.json())
            .catch(err => { setWorking(false), console.log(err) })

    })

    const loadUser = (user) => {
        setUser({
            id: user.id,
            name: user.name,
            email: user.email,
            entries: user.entries,
            joined: user.joined
        });
    }

    const onRouteChange = (route) => {
        if (route === 'signout') {
            setIsSignedIn(false);
        } else if (route === 'home') {
            setIsSignedIn(true);
        }
        setRoute(route);
    }

    if (!working) {
        return (<>
            <div className="vh-100 mw-100 flex flex-column items-center justify-center">
                <h1 className="tc white">Server is not online</h1>
                <h2 className="tc white">Try again later...</h2>
            </div>
        </>)
    }

    return (
        <div className="body">
            <ParticlesBg color='#000080' num={200} type="cobweb" bg={true} />



            {route === 'home'
                ?
                <>
                    <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                    <Logo />
                    <Rank name={user.name} entries={user.entries} />
                    <ImageLinkForm loadUser={loadUser} user={user} />
                </>
                : (
                    route === 'signout'
                        ? <>
                            <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                            <Signin onRouteChange={onRouteChange} loadUser={loadUser} />


                        </>
                        : route === 'signin'

                            ? <>
                                <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                                <Signin onRouteChange={onRouteChange} loadUser={loadUser} />
                            </>
                            :
                            <>
                                <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                                <Register onRouteChange={onRouteChange} loadUser={loadUser} />
                            </>
                )

            }
        </div>
    );
}

export default App;
