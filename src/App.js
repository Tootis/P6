import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes/Route';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <Router>      
        <AppRoutes />
      
    </Router>
  );
}

export default App;