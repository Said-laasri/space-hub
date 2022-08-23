import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Mission from './components/pages/Missions';
import Myprofile from './components/Myprofile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Mission />} />
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
