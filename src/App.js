import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Playground from './pages/Playground';
import Portfolio from './pages/Portfolio';
function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Resume" element={<Resume/>}/>
          <Route path="AboutMe" element={<AboutMe/>}/>
          <Route path="Playground" element={<Playground/>}/>
          <Route path="Portfolio" element={<Portfolio/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
