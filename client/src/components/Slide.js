import React from 'react'
import { Link } from 'react-router-dom'

const Slide = ({ id, h1, image, alt, p, link, width, height }) => {
    return (
        <div className="swiper-slide">
            <div className="testimonial-item d-flex max-w-75 flex-column align-items-center">
                <h1>{h1}</h1>
                <div className="d-flex justify-content-center align-items-center w-75 mt-2 flex-wrap">
                    <img className="rounded-3 img-fluid" src={image} height={height} width={width} alt={alt} />
                    <p className="w-75 mt-5" style={{fontStyle: "normal"}}>
                        {p}
                    </p>
                    {link && 
                        <Link to={link}>
                            <button className="reg mb-5">Register Here!</button>
                        </Link>}
                </div>
            </div>
        </div>
    )
}

export default Slide