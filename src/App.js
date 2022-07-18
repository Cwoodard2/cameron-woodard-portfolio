import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage';
function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
