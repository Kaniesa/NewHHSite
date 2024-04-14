import React from 'react'
import Hero from '../components/Hero'

const Refugee = (props) => {
    return (
        <>
            <Hero 
                h1={{"text": "Refugee", underlined: "Information", reversed: false}} 
                h2="We help our community"
                buttons={[
                    {"text": "Learn More", "link": "#about"},
                    {"text": "Become a Volunteer", "link": "https://docs.google.com/forms/d/e/1FAIpQLSecAWrA9XmRFuKeeElm8SS5E09MsU5nLyrujhs0FRg2w1Glnw/viewform"}
                ]}
            />
            
        </>
    )
}

export default Refugee