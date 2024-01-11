import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';

function App() {

  // INITIALIZE ANIMATE ON SCROLL LIBRARY
  useEffect(() => {
    AOS.init();
  }, [])

    return (
      <React.Fragment>
        <Header />
        
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
        </Routes>
      </React.Fragment>
    );
}

export default App;
