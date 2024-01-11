import React from 'react'
import boyComputerImg from '../assets/img/other/boy_and_computer.webp'
import Counts from './Counts'

const About = (props) => {
    return (
        <section id="about" className="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex align-items-center flex-wrap">
                        <div data-aos="fade-right">
                            <img src={boyComputerImg} width='400' className="rounded mx-4" alt="Boy sitting at table with computer"/>
                        </div>
                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column py-5 px-lg-5" data-aos="fade-left">
                            <h3>About Us</h3>
                            <p>HomeworkHub is a youth-led, non-profit organization dedicated to providing free, accessible,
                                and quality educational resources to all students and families in need. Over the past two years,
                                the HomeworkHub community has grown to over <strong>{props.data.totalMembers}</strong> members across the world
                                including tutors and students from Canada, the US, China, Kenya, India, Philippines, and Indonesia!
                            </p>
                            <h3 className='mt-5'>HomeworkHub's Mission...</h3>
                            <p>Through our <strong>FREE tutoring program</strong>, we provide Elementary school students with the
                                one-on-one
                                academic support they lack in order to lessen the stress of learning. Through our FREE seminars,
                                workshops, and panels, we provide high school and university students with the information and
                                guidance they need to achieve their academic goals. Additionally, we provide community service
                                hours to our volunteer tutors, all from the comfort and safety of your own homes! HomeworkHub is
                                dedicated to providing academic assistance to all students and their families in need.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Counts data={props.data}/>
        </section>
    )
}

export default About