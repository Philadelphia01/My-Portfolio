import React from 'react';
import Hero from "./components/landing/hero"
import Resume from "./components/resume/resume"
import "./App.css"

function App(): React.JSX.Element {
  return (
    <div className="app">
      <main>
        <Hero />
        <Resume />
      </main>
    </div>
  )
}

export default App;
