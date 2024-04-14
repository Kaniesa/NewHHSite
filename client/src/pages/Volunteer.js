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
                    <div class="section-title" data-aos="fade-up">
                    <h2 id="volunteers">Volunteers</h2>
                    <p>Need Volunteering Hours?</p>
                    </div>

                    <div class="container-fluid">
                        <div class="row">
                            <div
                            class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                            data-aos="fade-left">
                            <h1>Become a HomeworkHub Tutor</h1>
                            <p>Not only will you have the opportunity to work with younger students in need and earn volunteer hours
                                and great experience, you are also given the opportunity to develop excellent leadership and
                                communication skills all while staying safe!
                            </p>
                            <h4 class="vol">Task Description</h4>
                            <p>After the application process, you will be paired with an elementary school student and tutor a 45
                                minute class every week during an 8 week session.
                            </p>
                            <h4 class="vol">During These Session You Will Be:</h4>
                            <ul>
                                <li>Planning your lessons in advance
                                </li>
                                <li>Arriving to lessons on time and ready to teach.
                                </li>
                                <li>Assisting your student in their chosen subject.
                                </li>
                                <li>Logging your time!</li>
                            </ul>
                            <h4 class="vol">Requirements</h4>
                            <ul>
                                <li>At least 14 years old or be in high school</li>
                                <li>Committed and dedicated to the task </li>
                                <li>Comfortable with working with kids and pre-teens </li>
                                <li>Maintaining good academic grades and communication skills! </li>
                                <li>Vulnerable sector police checks required for tutors 18 and up</li>
                            </ul>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSecAWrA9XmRFuKeeElm8SS5E09MsU5nLyrujhs0FRg2w1Glnw/viewform"><button
                                type="button" class="reg">Register</button></a>
                            </div>
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
                buttons={[
                    // {"text": "Learn More", "link": "#about"},
                    // {"text": "Become a Volunteer", "link": "https://docs.google.com/forms/d/e/1FAIpQLSecAWrA9XmRFuKeeElm8SS5E09MsU5nLyrujhs0FRg2w1Glnw/viewform"}
                ]}
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