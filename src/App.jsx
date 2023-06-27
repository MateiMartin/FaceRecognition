import React from 'react';
import { useState, useEffect } from 'react';
import ParticlesBg from 'particles-bg'
import Navigation from './components/navigation/navigation';
import ImageLinkForm from './components/FaceRecognition/ImageLinkForm';
import Logo from './components/logo/logo';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Top3 from './components/Top3/Top3';
import './App.css';
import 'tachyons';


function App() {

    const [route, setRoute] = useState('signin');
    const [working, setWorking] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userArrayTop, setUserArrayTop] = useState([]);
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    });



    useEffect(() => {
        fetch('https://facerecognition-server-unmq.onrender.com')
            .then(response => setWorking(true))
    }, [])

    if (!working) {
        return (<>
            <div className="vh-100 mw-100 flex flex-column items-center justify-center">
                <ParticlesBg color='#000080' num={200} type="cobweb" bg={true} />
                <h1 className="tc white">Server is not online at the moment</h1>
                <h2 className="tc white">Try again later...</h2>
            </div>
        </>)
    }

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


    return (
        <div className="body">
            <ParticlesBg color='#000080' num={200} type="cobweb" bg={{
                position: "absolute",
                zIndex: -2,
                width: '100%',
                height: '157vh',
            }} className='particles' />

            {route === 'home'
                ?
                <>
                    <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} route={route} />
                    <Logo />
                    <div className='flex flex-column justify-center items-center'>
                        <Rank name={user.name} entries={user.entries} />
                        <ImageLinkForm loadUser={loadUser} user={user} />
                        <Top3 setUserArrayTop={setUserArrayTop} userArrayTop={userArrayTop} user={user} />
                    </div>
                </>
                : (
                    route === 'profile'
                        ? <>
                            <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} route={route} />
                            <Profile user={user} />
                        </>
                        :
                        route === 'signout'
                            ? <>
                                <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} route={route} />
                                <Signin onRouteChange={onRouteChange} loadUser={loadUser} />


                            </>
                            : route === 'signin'

                                ? <>
                                    <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} route={route} />
                                    <Signin onRouteChange={onRouteChange} loadUser={loadUser} />
                                </>
                                :
                                <>
                                    <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} route={route} />
                                    <Register onRouteChange={onRouteChange} loadUser={loadUser} />
                                </>
                )

            }
        </div>
    );
}

export default App;
