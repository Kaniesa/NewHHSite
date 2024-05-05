import React from 'react'
import Hero from '../components/Hero'
// import About from '../components/About'
import Faq from '../components/Faq'

import girl from '../assets/img/homepage/girl-studying-in-library.avif'

const Volunteer = () => {
    const About = () => {
        return (
            <section id="about" className="about">
                <div class="container">
                    
                </div>

                <div className="container-fluid">
                    <div class="row">
                        <div class="d-flex flex-row align-items-center flex-wrap" style={{margin: "20px"}}>
                            
                            <div class="col-8 col-lg-8 icon-boxes d-flex flex-column py-5 px-lg-5" data-aos="fade-left">
                            <div class="section-title" data-aos="fade-up">
                                <h2 id="volunteers" style={{color: 'black'}}>Volunteers</h2>
                                <p>Need Volunteering Hours?</p>
                            </div>  
                            
                            <h4>Become a HomeworkHub Tutor</h4>
                            <p>Not only will you have the opportunity to work with younger students in need and earn volunteer hours
                                and great experience, you will also given the opportunity to develop excellent leadership and
                                communication skills.
                            </p>
                            <h4>Task Description</h4>
                            <p>After the application process, you will be paired with an elementary school student and tutor a 45
                                minute class every week during an 8 week session. During these sessions, you will:
                            </p>
                            <ul>
                                <li>Plan your lessons in advance</li>
                                <li>Arrive to lessons on time and ready to teach</li>
                                <li>Assist your student in their chosen subject</li>
                                <li>Log your time!</li>
                            </ul>

                            <h4>Requirements</h4>
                            <ul>
                                <li>At least 14 years old or be in high school</li>
                                <li>Committed and dedicated to the task </li>
                                <li>Comfortable with working with kids and pre-teens</li>
                                <li>Maintaining good academic grades and communication skills</li>
                                <li>Vulnerable sector police checks required for tutors 18 and up</li>
                            </ul>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSecAWrA9XmRFuKeeElm8SS5E09MsU5nLyrujhs0FRg2w1Glnw/viewform">
                                <button type="button" class="reg">Register Now</button>
                            </a>

                            </div>
                            <img data-aos="fade-down" src={girl} alt="refugee image 2" srcset="" class="img-fluid rounded-3" width="400"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            <Hero 
                h1={{text: "Volunteer at", underlined: "HomeworkHub!", reversed: false}} 
                h2="Let's learn and teach together!"
                buttons={[]}
                img={girl}
            />
            
            <main id="main">
                <About />
                {/* <Faq /> */}
            </main>
        </>
    )
}

export default Volunteer