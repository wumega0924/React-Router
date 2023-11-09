import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Blue from './components/Blue';
import Red from './components/Red';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <div id="container">
      <h1></h1>
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          </Routes>
          </div>
    </div>
    <Footer />
    </>
  )
}

export default App
