import React, { Component } from 'react';
import {Routes} from './routes';
import './App.css';
import NavContainer from './components/nav/NavContainer';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (
            <ParallaxProvider >
                <div>
                    <NavContainer />
                    <div>
                        <Routes />
                    </div>
                    <Footer />
                </div>
            </ParallaxProvider>
        );
    }
}

export default App;