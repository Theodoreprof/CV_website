import React from 'react'

//Component imports
import Navigation from  './components/navigation/navigation'
import Header from './components/header/header'
import About from './components/about/about'
import Experience from './components/experience/experience'

const App = () => {
    return (
        <>
        <Navigation />
        <Header />
        <About />
        <Experience />
        </>
    )
}

export default App