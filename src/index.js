import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import Latihan1 from './Latihan1';
import reportWebVitals from './reportWebVitals';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Latihan1 /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

