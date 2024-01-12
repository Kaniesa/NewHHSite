import React from 'react'
import { Link } from 'react-router-dom'

const SponsorsSlide = ({ link, h3, role, image }) => {
    return (
        <div class="testimonial-item">
            <Link to={link}>
                <h3>{h3}</h3>
                <h4>{role}</h4>
                <img src={image} class="partner_img" alt="partner logo on slideshow" />
            </Link>
        </div>
    )
}

export default SponsorsSlide