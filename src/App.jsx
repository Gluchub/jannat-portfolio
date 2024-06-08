import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import "./styles/index.css"
const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </Router>
  )
}

export default App
