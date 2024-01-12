import React from 'react'
import { Link } from 'react-router-dom'

const NewsSlide = ({ link, h3, role, image, width }) => {
    return (
        <div class="testimonial-item">
            <Link to={link}>
                <h3>{h3}</h3>
                <h4>{role}</h4>
                <img src={image} class="partner_img" alt="news article" style={{width: width}} loading="lazy"/>
            </Link>
        </div>
    )
}

export default NewsSlide