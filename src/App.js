import React, { Fragment } from 'react';
import { 
  BrowserRouter as Router,
  HashRouter, 
  Route,
  Routes, 
  Redirect, 
  Switch 
  } from "react-router-dom";
import MainLayoutRoutes from './MainLayoutRoutes';


import './App.css';


function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="*" element={<MainLayoutRoutes />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
