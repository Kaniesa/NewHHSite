import React from 'react'

const PricingCard = ({ image, delay, h3, h5, p }) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="box featured" data-aos="zoom-in" data-aos-delay={delay}>
                <h3>{h3}</h3>
                <img className="icons" src={image} alt='student-icon'/>
                <h5>{h5}</h5>
                <p>{p}</p>
            </div>
        </div>
    )
}

export default PricingCard