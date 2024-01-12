import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import { block } from 'million/react'

const App = () => {
  const data = {
    studentCount: 1931,
    tutorCount: 1090,
    hoursCount: 11586,
    totalMembers: 3000,
  };

  // INITIALIZE ANIMATE ON SCROLL LIBRARY
  useEffect(() => {
    AOS.init();
  }, [])

    return (
      <React.Fragment>
        <Header />
        
        <Routes>
          <Route path='/' element={<Homepage data={data}/>}></Route>
        </Routes>
      </React.Fragment>
    );
};

export default App;
