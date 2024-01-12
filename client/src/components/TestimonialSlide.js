import React from 'react'

const TestimonialSlide = ({ text }) => {
    return (
        <div className="testimonial-item">
            <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {text}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
        </div>
    )
}

export default TestimonialSlide