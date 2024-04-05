import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/Log-in" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;