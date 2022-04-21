import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
import Resume from './pages/Resume';
function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Resume" element={<Resume/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
