import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Pricing from '../components/Pricing'

const Homepage = (props) => {
    

    return (
        <>
            <Hero h1="Welcome to"/>
            <main id="main">
                <About data={props.data}/>
                <Pricing />
            </main>
        </>
    )
}

export default Homepage