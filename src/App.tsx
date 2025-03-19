import Navbar from "./components/navbar/navbar"
import Hero from "./components/landing/hero"
import About from "./components/about/about"
import Portfolio from "./components/portfolio/portfolio"
import Skills from "./components/skills/skills"
import Services from "./components/services/services"
import Experience from "./components/experience/experience"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"
import "./App.css"

import React from 'react';

function App(): React.JSX.Element {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
