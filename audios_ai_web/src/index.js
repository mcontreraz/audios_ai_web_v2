import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Asegúrate de que la ruta a App.js sea correcta
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
