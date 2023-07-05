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
    const [working, setWorking] = useState(true);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userArrayTop, setUserArrayTop] = useState([]);
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    });
    const [isLink, setIsLink] = useState('');

    useEffect(() => {
        fetch('https://facerecognition-server-unmq.onrender.com')
            .then(response => setWorking(true))
    }, [])

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem('user'));
        const route = JSON.parse(window.localStorage.getItem('route'));
        const isSignedIn = JSON.parse(window.localStorage.getItem('isSignedIn'));
        if (user) {
            setUser(user);
        }
       
        if (route) {
            setRoute(route);
        }
        if (isSignedIn) {
            setIsSignedIn(isSignedIn);
        }

    }, [])

    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user));
        window.localStorage.setItem('route', JSON.stringify(route));
        window.localStorage.setItem('isSignedIn', JSON.stringify(isSignedIn));
    }, [route, user, isSignedIn])

    if (!working) {
        return (<>
            <div className="vh-100 mw-100 flex flex-column items-center justify-center">
                <ParticlesBg color='#000080' num={200} type="cobweb" bg={true} />
                <h1 className="tc white">Server is not online at the moment</h1>
                <h2 className="tc white">Wait a few seconds...</h2>
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
                height: isLink ? '146vh' : ' 120vh',
            }} className='particles' />

            {route === 'home'
                ?
                <>
                    <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} route={route} setUser={setUser}/>
                    <Logo />
                    <div className='flex flex-column justify-center items-center'>
                        <Rank name={user.name} entries={user.entries} />
                        <ImageLinkForm loadUser={loadUser} user={user} setIsLink={setIsLink} />
                        <Top3 setUserArrayTop={setUserArrayTop} userArrayTop={userArrayTop} />
                    </div>
                </>
                : (
                    route === 'profile'
                        ? <>
                            <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} route={route} setUser={setUser}/>
                            <Profile user={user} />
                        </>
                        :
                        route === 'signout'
                            ? <>
                                <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} route={route} setUser={setUser}/>
                                <Signin onRouteChange={onRouteChange} loadUser={loadUser} />
                            </>
                            : route === 'signin'

                                ? <>
                                    <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} route={route} setUser={setUser}/>
                                    <Signin onRouteChange={onRouteChange} loadUser={loadUser} />
                                </>
                                :
                                <>
                                    <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} route={route} setUser={setUser}/>
                                    <Register onRouteChange={onRouteChange} loadUser={loadUser} />
                                </>
                )

            }
        </div>
    );
}

export default App;
