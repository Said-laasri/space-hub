import React from 'react';
import ReactDOM from 'react-dom/client';
// <<<<<<< HEAD
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// =======
// >>>>>>> dev
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from './redux/configueStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
