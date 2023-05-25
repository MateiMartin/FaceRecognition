import React from 'react';
import ParticlesBg from 'particles-bg'
import Navigation from './components/navigation/navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/logo/logo';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';

function App() {


    return (
        <div className="body">
            <ParticlesBg color='#a6700c' num={200} type="cobweb" bg={true} />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm />
        </div>
    );
}

export default App;
