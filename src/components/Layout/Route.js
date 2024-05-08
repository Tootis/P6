import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import PageLayout from './PageLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout/>}>  
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
