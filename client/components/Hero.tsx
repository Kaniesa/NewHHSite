import React from 'react'
import Image from 'next/image'
import { Link } from 'react-router-dom'
import girl from '../assets/img/homepage/girl-studying-in-library.avif'

const Hero = (props: any) => {
    return (
        <section id="hero">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                        <div data-aos="zoom-out">
                            <h1>{props.h1} <span>HomeworkHub!</span></h1>
                            <h2>Let's learn and teach together!</h2>
                            <div className="text-center text-lg-start">
                                <Link to="https://forms.gle/D6hXpn68ztPmQZPH7" className="btn-get-started scrollto m-2">Become a Tutor</Link>
                                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true"
                                    className="btn-get-started scrollto">Become a Student</Link>
                                <Link to="/refugee" className="btn-get-started scrollto m-2">Refugee Info</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-2 hero-img mt-3" data-aos="zoom-out" data-aos-delay="300">
                        <Image
                            src={girl}
                            className="img-fluid animated rounded" alt="" />
                    </div>
                </div>
            </div>
            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28 " preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
                </g>
                <g className="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                </g>
                <g className="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                </g>
            </svg>
        </section>
    )
}

export default Hero