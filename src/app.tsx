import React from 'react';
import './app.css';
import WhyPage from './components/WhyPage';
import AboutUsPage from './components/AboutUsPage';
import HomePage from './components/HomePage';
import ExamplePage from './components/ExamplePage';
import QuestionsPage from './components/QuestionsPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import Box from './components/Box';

function app() {
  return (
    <Router>
  
        <Routes>
          <Route path="/WhyPage" element={<WhyPage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/ExamplePage" element={<ExamplePage />} />
          <Route path="/QuestionsPage" element={<QuestionsPage />} />
        </Routes>

    
    </Router>
  );
}

export default app;