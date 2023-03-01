import React from 'react'

//Component imports
import Navigation from  './components/navigation/navigation'
import Header from './components/header/header'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Skills from './components/skills/skills'
import Portfolio from './components/portfolio/portfolio'
import Hobbies from './components/hobbies/hobbies'
import Contact from './components/contact/contact'

const App = () => {
    return (
        <>
        <Navigation />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Hobbies />
        <Contact />
        </>
    )
}

export default App