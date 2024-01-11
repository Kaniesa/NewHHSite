import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'

const Homepage = (props) => {
    

    return (
        <>
            <Hero h1="Welcome to"/>
            <main id="main">
                <About data={props.data}/>
            </main>
        </>
    )
}

export default Homepage