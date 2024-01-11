import React from 'react'
import logo from '../assets/img/logo.png'

const Header = () => {
    return (
        <header id="header" className="fixed-top d-flex align-items-center header-transparent py-5">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <div className="together">
                        <a href="index.html"><img src={logo} alt="logo" className="img-fluid" /></a>
                        <h1><a href="index.html"><span>HomeworkHub</span></a></h1>
                    </div>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a href="/index.html">Home</a></li>
                        <li className="dropdown">
                            <a href="#function"><span>Students</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true">Register</a></li>
                                <li><a href="/university-panel.html">University Info Panels</a></li>
                            </ul>
                            <ul>
                                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true">Register</a></li>
                                <li><a href="/refugee.html">Refugee Info</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="volunteer.html"><span>Volunteers</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSecAWrA9XmRFuKeeElm8SS5E09MsU5nLyrujhs0FRg2w1Glnw/viewform">Register</a>
                                </li>
                                <li><a href="volunteer.html">Volunteer Information</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#events"><span>Events</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li>
                                    <a href="/university-panel.html">University Info Panels</a>
                                </li>
                                <li>
                                    <a href="/python-course.html">Let's Code: Python in 8 Weeks</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#"><span>Our Community</span> <i className="bi bi-chevron-down"></i></a>
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
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header