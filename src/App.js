import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/configureStore';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/pages/Missions';
import Myprofile from './components/Myprofile';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Missions />} />
            <Route path="/Rockets" element={<Rockets />} />
            <Route path="/Myprofile" element={<Myprofile />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
