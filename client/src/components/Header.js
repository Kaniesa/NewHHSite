import React, { useEffect, useState } from 'react'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [styles, setStyles] = useState(null);

    const handleScroll = () => {
        const newY = window.pageYOffset;
        newY !== 0 ? setStyles('header-scrolled') : setStyles(null)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => handleScroll());

        return () => { 
            window.removeEventListener("scroll", () => handleScroll());
        };
    }, [])


    return (
        <header id="header" className={"fixed-top d-flex align-items-center header-transparent py-5 " + styles}>
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <div className="together">
                        <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
                        <h1><Link to="/"><span>HomeworkHub</span></Link></h1>
                    </div>
                </div>
                
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="dropdown">
                            <Link to="#function"><span>Students</span> <i className="bi bi-chevron-down"></i></Link>
                            <ul>
                                <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true">Register</Link></li>
                                <li><Link to="/university-panel">University Info Panels</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true">Register</Link></li>
                                <li><Link to="/refugee">Refugee Info</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="/volunteer"><span>Volunteers</span> <i className="bi bi-chevron-down"></i></Link>
                            <ul>
                                <li><a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSecAWrA9XmRFuKeeElm8SS5E09MsU5nLyrujhs0FRg2w1Glnw/viewform">Register</a>
                                </li>
                                <li><Link to="/volunteer">Volunteer Information</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#events"><span>Events</span> <i className="bi bi-chevron-down"></i></Link>
                            <ul>
                                <li>
                                    <Link to="/university-panel">University Info Panels</Link>
                                </li>
                                <li>
                                    <Link to="/python-course">Let's Code: Python in 8 Weeks</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#"><span>Our Community</span> <i className="bi bi-chevron-down"></i></Link>
                            <ul>
                                <li><Link to="/team">Our High School Team</Link></li>
                                <li><Link to="/board-of-directors">Our Board of Directors</Link></li>
                                <li><Link to="#donors">Our Partners</Link></li>
                                <li><Link to="#news">Our Features</Link></li>
                            </ul>
                        </li>
                        <li><Link to="#real-testimonials">Testimonials</Link></li>
                        <li><Link to="#donations">Donate</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header