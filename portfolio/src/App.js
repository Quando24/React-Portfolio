import { useState } from 'react'

import About from './components/about.js'
import Navigation from './components/nav.js'
import Portfolio from './components/portfolio.js'
import Resume from './components/resume.js'
import ContactMe from './components/contactMe.js'
import Footer from './components/footer.js'

import './App.css';

function App() {

  const [ visibleSection, setVisibleSection ] = useState(0)

  let updateVisibleSection = (sectionNumber) => {

    setVisibleSection(sectionNumber)

  }
  return (
    <div className="App">
      <Navigation updateSection={updateVisibleSection} />

      {visibleSection === 0 && <About />}
      {visibleSection === 1 && <Portfolio />}
      {visibleSection === 2 && <Resume />}
      {visibleSection === 3 && <ContactMe />}

      <Footer />
    </div>
  );
}

export default App;
