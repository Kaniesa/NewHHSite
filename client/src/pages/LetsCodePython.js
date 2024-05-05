import React from 'react'
import Hero from '../components/Hero'
// import About from '../components/About'
import Faq from '../components/Faq'

import img1 from '../assets/img/gallery/LetsCodePoster.PNG'
import girl from '../assets/img/homepage/girl-studying-in-library.avif'


const LetsCodePython = () => {
    const About = () => {
        return (
            <section id="about" className="about">
                <div className="container-fluid">
                    <div class="row">
                        <div class="d-flex flex-row align-items-center flex-wrap" style={{margin: "20px"}}>
                            <div class="col-8 col-lg-8 icon-boxes d-flex flex-column py-5 px-lg-5" data-aos="fade-left">
                                <h3>What is Let's Code? </h3>
                                <p>HomeworkHub is happy to introduce <b>Let's Code: Python in 8 Weeks</b>, an engaging and interactive 
                                summer coding course taught by <b>UW Computer Science students</b> designed to introduce students in 
                                grades 4 to 8 to the fundamentals of Python programming. With the increasing importance of technology 
                                in our lives, learning to code has become a valuable skill for students of all ages.
                                </p>
                                <ul class="check-list">
                                    <li>Cost: $20 per session</li>
                                    <li>Reduced cost for students in need including refugee and low-income students 
                                    (Please reach out to us through email or a phone call)</li>
                                    <li>Frequency: Once a week, for a total of 8 classes</li>
                                    <li>Duration: 90 minutes per session, including a 10-15 minute break</li>
                                    <li>Age Category: Students in grades 4 to 8</li>
                                    <li>Curriculum: Full Python introduction, approved by a Software Engineer with 30+ years of industry experience!</li>
                                    <li>Instructors: Courses will be taught by a University of Waterloo Computer Science student alongside a qualified 
                                    high-school assistant tutor from HomeworkHub!</li>
                                </ul>
                                <p>
                                Python is a beginner-friendly programming language known for its simplicity and versatility, making it an ideal choice 
                                for young learners to develop problem-solving and critical thinking skills. This program is an excellent opportunity 
                                for students to explore the world of coding in a fun and supportive environment!
                                </p>
                            </div>
                            <img data-aos="fade-down" src={img1} alt="let's code poster" srcset="" class="img-fluid rounded-3" width="400"></img>

                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            <Hero
                h1={{text: "HomeworkHub’s", underlined: "Let's Code: Python in 8 Weeks!", reversed: false}}
                buttons={[
                    // 
                ]}
                img={girl}
            />
            
            <main id="main">
                <About />
                <Faq />
            </main>
        </>
    )
}

export default LetsCodePython