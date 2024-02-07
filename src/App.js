import React from 'react'
import "./App.css"
import Header from './Components/Header'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'

function App() {
  return (
    <div id="main-page">
      <Header />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default App