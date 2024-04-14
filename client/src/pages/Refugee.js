import React from 'react'
import Hero from '../components/Hero'
// import About from '../components/About'
import Pricing from '../components/Pricing'
import Subject from '../components/Subject'
import Events from '../components/Events'
import Donate from '../components/Donate'
import Sponsors from '../components/Sponsors'
import News from '../components/News'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'

import img1 from '../assets/img/other/ukraine_refugee.webp'
import img2 from '../assets/img/other/refugee_img_2.webp'

const Refugee = () => {
    const About = () => {
        return (
            <section id="about" className="about">
                <div className="container-fluid">
                    <div class="row">
                        <div class="d-flex flex-row align-items-center flex-wrap" style={{margin: "20px"}}>
                            <div class="col-8 col-lg-8 icon-boxes d-flex flex-column py-5 px-lg-5" data-aos="fade-left">
                            <h3>Dear refugees and people currently in need, </h3>
                            <p>We understand that change is not easy. Entering a new country, surrounded by unknown languages, people,
                                and culture poses a significant challenge to families struggling to adapt to their new environment.
                                During this difficult time, HomeworkHub welcomes you in an innovative yet helpful way: we provide FREE,
                                virtual, and one on one tutoring in the English language and all school subjects to students grade 1-8.
                                No matter where you are, as long as you have access to a device connected to stable internet service, we
                                would love to offer you our full range of free services, ranging from our tutoring programs to our intro
                                lessons. (Please note all tutoring at this point is offered in English, however we do have well trained
                                ELS tutors).
                            </p>
                            <button style={{backgroundColor: "#EACC0D", outline: "none", border: "none", borderRadius: "10px", padding: "10px"}}>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true"
                                   class="text-white">Register Now as a Student
                                </a>
                            </button>

                            </div>
                            <img data-aos="fade-down" src={img2} alt="refugee image 2" srcset="" class="img-fluid rounded-3" width="400"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            <Hero 
                h1={{text: "Refugee", underlined: "Information", reversed: false}} 
                h2="We help our community"
                buttons={[
                    {"text": "Learn More", "link": "#about"},
                    {"text": "Become a Volunteer", "link": "https://docs.google.com/forms/d/e/1FAIpQLSecAWrA9XmRFuKeeElm8SS5E09MsU5nLyrujhs0FRg2w1Glnw/viewform"}
                ]}
                img={img1}
            />
            
            <main id="main">
                <About />
                <Faq />
            </main>
        </>
    )
}

export default Refugee