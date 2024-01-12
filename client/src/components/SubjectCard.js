import React from 'react'

const SubjectCard = ({ delay, h2, image, alt }) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="box featured" data-aos="zoom-in" data-aos-delay={delay}>
                <h2>{h2}</h2>
                <img className="subjects" src={image} alt={alt} />
            </div>
        </div>
    )
}

export default SubjectCard