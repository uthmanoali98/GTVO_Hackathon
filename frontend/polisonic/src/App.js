import logo from './logo.svg';
import React from 'react';
import HomePage from './components/HomePage'
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlePage from './components/ArticlePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}


export default App;
