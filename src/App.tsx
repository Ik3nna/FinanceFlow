import React from 'react';
import Header from './components/header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App: React.FC = ()=> {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
