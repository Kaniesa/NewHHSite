import React from 'react'

const Card = ({ text, count, nameOfClass }) => {
    return (
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
                <i className={nameOfClass}></i>
                <span data-purecounter-start="0" data-purecounter-end={count} data-purecounter-duration="1"
                    className="purecounter">{count}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card