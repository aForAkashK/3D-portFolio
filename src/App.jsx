import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas } from './components'

function App() {
  return (
    <BrowserRouter>
      <div className="realative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="realtive z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App