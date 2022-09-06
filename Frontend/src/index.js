import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/animate.css'
import './css/bootstrap-datepicker.css'
import './css/bootstrap.min.css'
import './css/flexslider.css'
import './css/icomoon.css'
import './css/ionicons.min.css'
import './css/magnific-popup.css'
import './css/style.css'
import './fonts/flaticon/font/flaticon.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
