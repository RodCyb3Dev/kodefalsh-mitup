import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

import CookieConsent from "react-cookie-consent";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venuenfo">
          <VunueNfo/>
        </Element>
        
        <Element name="highlights">
          <Highlight/>
        </Element>
        
        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>

        <CookieConsent
            location="bottom"
            buttonText="Ymmärrän"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B", text: "center" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px", cursor: "pointer" }}
            expires={150}
        >
            Käytämme evästeitä Kodeflash-MitUp-sivustoilla, jotta nautittavammat ja houkuttelevat mainoksesi. Jatkamalla selaamassa sivustoa suostut käyttämään evästeitä.{" "}
        </CookieConsent>

        <Footer/>
      </div>
    );
  }
}

export default App;
