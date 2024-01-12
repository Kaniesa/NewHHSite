import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Subject from '../components/Subject'
import Events from '../components/Events'
import Donate from '../components/Donate'
import Sponsors from '../components/Sponsors'
import News from '../components/News'

const Homepage = (props) => {
    return (
        <>
            <Hero h1="Welcome to"/>
            <main id="main">
                <About data={props.data}/>
                <Pricing />
                <Subject />
                <Events />
                <Donate />
                <Sponsors />
                <News />
            </main>
        </>
    )
}

export default Homepage