import React from 'react'

const Features = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Features</h2>
                    <p>Why Choose Us?</p>
                </div>
                <div className="together">
                    <div className="dsc_len">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <i className="ri-store-line" style={{"color": "#ffbb2c"}}></i>
                            <div className="seperate">
                                <h3>We’re Accessible</h3>
                                <p className="mt-2">We believe that everyone should have access to quality educational resources. Financing your student's educational journey shouldn't be something you need to worry about! For our tutoring program, we only ask for a non-mandatory $10 donation from regular students while remaining  completely FREE for students in need. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="dsc_len">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="50" style={{"height": "calc(100% - 40px)", "alignItems": "flex-start"}}>
                            <div style={{"display": "flex", "alignItems": "center"}}>
                                <i className="ri-bar-chart-box-line" style={{"color": "#5578ff"}}></i>
                                <div className="seperate">
                                    <h3>One on One Attention</h3>
                                    <p className="mt-2">During our sessions, your student will receive personalized, one on one attention
                                        from their
                                        tutor!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="together">
                    <div className="dsc_len">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
                            <i className="ri-calendar-todo-line" style={{"color": "#e80368"}}></i>
                            <div className="seperate">
                                <h3>Qualified Tutors</h3>
                                <p className="mt-2">Our high school and university tutors have all been where your child is today! Our application,
                                    interview and training process ensures only the best for your child.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="dsc_len">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                            <i className="ri-paint-brush-line" style={{"color": "#e361ff"}}></i>
                            <div className="seperate">
                                <h3>100% Safe and Virtual Services</h3>
                                <p className="mt-2"> All of our sessions are held online over virtual meeting platforms to ensure our tutors and 
                                    students can stay safe while learning!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="together">
                    <div className="dsc_len">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="250">
                            <i className="ri-database-2-line" style={{"color": "#47aeff"}}></i>
                            <div className="seperate">
                                <h3>We Cater to ESL Students</h3>
                                <p className="mt-2">If English isn't your child's first language, just select the ESL option when
                                    registering. We'll
                                    select a tutor from our many talented multilingual volunteers just for them!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="dsc_len">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                            <i className="ri-store-line" style={{"color": "#ffbb2c"}}></i>
                            <div className="seperate">
                                <h3>Get Tutoring in Multiple Subjects</h3>
                                <p className="mt-2">At HomeworkHub, we offer students the ability to sign up for up to 3 different subjects at a time. 
                                    This enables students to receive all the help they may need without subject limit restrictions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features