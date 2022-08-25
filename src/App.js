import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './navigation/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Myprofile from './components/Myprofile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Mission" element={<Missions />} />
        <Route path="/Myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
