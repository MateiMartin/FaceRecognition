import React from 'react';
import ParticlesBg from 'particles-bg'
import Navigation from './components/navigation/navigation';
import ImageLinkForm from './components/FaceRecognition/ImageLinkForm';
import Logo from './components/logo/logo';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';


function App() {


    return (
        <div className="body">
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm />
            <ParticlesBg color='#a6700c' num={200} type="cobweb" bg={true} />
        </div>
    );
}

export default App;
