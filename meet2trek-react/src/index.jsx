import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './templatemo-style.css';

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root')
);
