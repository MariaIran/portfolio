import React from 'react';  
import ReactDOM from 'react-dom/client';  
import App from './App';  
import './styles.css'; // You can keep your global styles here  

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(  
  <React.StrictMode>  
    <App />  
  </React.StrictMode>  
);