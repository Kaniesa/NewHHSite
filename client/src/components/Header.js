import React from 'react'

const Header = () => {
    return (
        <header id="header" class="fixed-top d-flex align-items-center header-transparent py-5">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="logo">
                    <div class="together">
                        <a href="index.html"><img src="assets/img/logo.png" alt="logo" class="img-fluid" /></a>
                        <h1><a href="index.html"><span>HomeworkHub</span></a></h1>
                    </div>
                </div>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a href="/index.html">Home</a></li>
                        <li class="dropdown">
                            <a href="#function"><span>Students</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true">Register</a></li>
                                <li><a href="/university-panel.html">University Info Panels</a></li>
                            </ul>
                            <ul>
                                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true">Register</a></li>
                                <li><a href="/refugee.html">Refugee Info</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="volunteer.html"><span>Volunteers</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSecAWrA9XmRFuKeeElm8SS5E09MsU5nLyrujhs0FRg2w1Glnw/viewform">Register</a>
                                </li>
                                <li><a href="volunteer.html">Volunteer Information</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#events"><span>Events</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li>
                                    <a href="/university-panel.html">University Info Panels</a>
                                </li>
                                <li>
                                    <a href="/python-course.html">Let's Code: Python in 8 Weeks</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#"><span>Our Community</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="team.html">Our High School Team</a></li>
                                <li><a href="board-of-directors.html">Our Board of Directors</a></li>
                                <li><a href="#donors">Our Partners</a></li>
                                <li><a href="#news">Our Features</a></li>
                            </ul>
                        </li>
                        <li><a href="#real-testimonials">Testimonials</a></li>
                        <li><a href="#donations">Donate</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header