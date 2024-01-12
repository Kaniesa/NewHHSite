import React from 'react'


const Faq = () => {
    return (
        <section id="faq" class="faq section-bg">
            <div class="container px-4">
                <div class="section-title" data-aos="fade-up">
                    <h2>F.A.Q</h2>
                    <p>Frequently Asked Questions</p>
                </div>
                <div class="faq-list">
                    <ul>
                        <li data-aos="fade-up">
                            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse"
                                data-bs-target="#faq-list-1">Can I sign up for more than one subject?<i
                                class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                                <p>
                                    As of August 2023, we are now back to our regular 3 subject sign-up. Students can sign up for a maximum of 
                                    three subjects instead of one! If you have any urgent needs or requests, please email us.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="100">
                            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2"
                                class="collapsed">My 8 weeks are up. Can I sign up again?<i class="bx bx-chevron-down icon-show"></i><i
                                class="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Yes! You can sign up as many times as you want! Again, availability may vary.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="200">
                            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3"
                                class="collapsed">My Tutor/Student is unresponsive, what do I
                            do?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Please email us! We'll get in touch with the person and sort it out. If they are still
                                    unresponsive, we'll assign you to someone new!
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300">
                            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4"
                                class="collapsed">I finished my sessions! What do I do now?<i
                                class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Congratulations! Log in your hours and we'll contact you when we have someone new for
                                    you!
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="400">
                            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5"
                                class="collapsed">I signed up for HomeworkHub but no one has
                            been in touch?<i class="bx bx-chevron-down icon-show"></i><i
                                class="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Please check your spam inbox! Our emails sometimes wind up in there.
                                    If you still haven’t heard from us, that may be because we don’t have anyone available for you at
                                    the moment.
                                    If you are in urgent need for a tutor, please send us an email and we will do our best to pair you
                                    ASAP.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="500">
                            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-6"
                                class="collapsed">I’m an adult looking to volunteer, can I register?
                            <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-6" class="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Thank you for your interest in volunteering!
                                    If you are in University, then you absolutely can so long as you provide a valid vulnerable sector
                                    police check.
                                    If you are an adult out of school, a check must still be provided and you will most likely be
                                    paired with an adult student.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="500">
                            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-7"
                                class="collapsed">I am tutoring/tutored with HomeworkHub, can I get a reference?
                            <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-7" class="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Absolutely! Current/past tutors with HomeworkHub can get references/letters of recommendations by
                                    emailing
                                    our <a style={{display: "inline", padding: 0}} href="mailto:zhou_xuan@homeworkhubtutoring.ca">references
                                    director</a>. Information regarding your
                                    time at HomeworkHub will need to be provided in your email.
                                </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="500">
                            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-8"
                                class="collapsed">How do I complete the checkout process?
                            <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-8" class="collapse" data-bs-parent=".faq-list">
                                <p>
                                    For regular students, HomeworkHub asks for a non-mandatory $10 donation to help maintain our services. Please make sure to follow the checkout link after submitting the registration questions to complete payment if you decide on making a donation. 
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Faq