import './App.css';
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

    return (
      <React.Fragment>
        <Header />
        <Hero />
      </React.Fragment>
    );
}

export default App;
