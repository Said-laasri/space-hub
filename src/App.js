import React from 'react';
// <<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Header from './navigation/Header';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './components/redux/configureStore';
// import Header from './components/Header';
// >>>>>>> dev
import Rockets from './components/Rockets';
import Missions from './components/pages/Missions';
import Myprofile from './components/Myprofile';
import './App.css';

function App() {
  return (
    // <<<<<<< HEAD
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Mission" element={<Missions />} />
        <Route path="/Myprofile" element={<Myprofile />} />
      </Routes>
    </div>
    // =======
    //     <Provider store={store}>
    //       <Router>
    //         <div className="App">
    //           <Header />
    //           <Routes>
    //             <Route path="/" element={<Missions />} />
    //             <Route path="/Rockets" element={<Rockets />} />
    //             <Route path="/Myprofile" element={<Myprofile />} />
    //           </Routes>
    //         </div>
    //       </Router>
    //     </Provider>
    // >>>>>>> dev
  );
}

export default App;
