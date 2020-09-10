import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Map from './component/Map';
import Contact from './component/Contact';
import Pricing from './component/Pricing';
import Portfolio from './component/Portfolio';
import Service from './component/Service';
import Value from './component/Value';
import About from './component/About'
import Nav from './component/Nav'

function App() {
  return (
    <div>
      <Nav/> 
      <About/> 
      <Value/> 
      <Service/> 
      <Portfolio/>
      <Pricing/>
      <Contact/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
