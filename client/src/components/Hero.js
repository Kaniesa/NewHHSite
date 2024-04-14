import React from 'react'
import { Link } from 'react-router-dom'

const Hero = (props) => {
    return (
        <section id="hero">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                        <div data-aos="zoom-out">
                            {props.h1.reversed ? (
                                <h1><span>{props.h1.underlined}</span> {props.h1.text}</h1>
                            ) : (
                                <h1>{props.h1.text} <span>{props.h1.underlined}</span></h1>
                            )}
                            <h2>{props.h2}</h2>
                            <div className="text-center text-lg-start">
                                {props.buttons.map(function(button, i) {
                                    return <Link to={button.link} className="btn-get-started scrollto m-2">{button.text}</Link>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-2 hero-img mt-3" data-aos="zoom-out" data-aos-delay="300">
                        <img
                            src={props.img}
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