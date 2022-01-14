import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ListAnnonce from './components/ListAnnonces/ListAnnonces';
import Login from './components/Account/Login/Login';

import Auth from './components/Auth/Auth';
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard';
import UserDashboard from './components/Dashboard/UserDashboard/UserDashboard';
import { useState } from 'react';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/annonces" element={<ListAnnonce />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*"
          element={
            <Auth>
              <AdminDashboard />
              <UserDashboard />
            </Auth>
          }>
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
