import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Pricing from './pages/pricing';
import Tokens from './pages/tokens';
import Blog from "./pages/blog";
import BlogPost from './pages/blogpost';

const App: React.FC = ()=> {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/*" element= {<Navigate replace to="/404" />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
