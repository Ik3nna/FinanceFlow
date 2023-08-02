import React from 'react';
import Header from './components/header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

const App: React.FC = ()=> {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/*" element= {<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
