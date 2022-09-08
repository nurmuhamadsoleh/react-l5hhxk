import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Galery from './pages/Galery.jsx';
import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import Nav from './pages/Nav.jsx';
import Blog from './pages/Blog.jsx';
import Users from './pages/Users.jsx';
import Profile from './pages/Profile.jsx';

const App = () => {
  return (
    <Routes>
      {/* Membuat router dengan element */}
      {/* <Nav /> */}
      <Route path="/" element={<Nav />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Galery />} />
      <Route path="/blog/:id" element={<Blog />} />
      {/* disebut query */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/user/:username/:phone/:email" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
