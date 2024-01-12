import React from 'react'
import { Link } from 'react-router-dom'

const Donate = () => {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2 id="donations">Donations</h2>
                    <p>Become a HomeworkHub Donor Today!</p>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div
                            className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                            data-aos="fade-left">
                            <h2>How to Donate?</h2>
                            <p>Donate to us through the PayPal link below!</p>
                            <h2>How are Donations Used?</h2>
                            <ul>
                                <li>Events</li>
                                <li>Organizational Platforms (such as this website)</li>
                                <li>Teaching Material</li>
                                <li>Other Expenses</li>
                            </ul>
                            <Link href="https://www.paypal.com/donate?business=DRPWCU5CZ3J5J&amp;currency_code=CAD"><button
                                className="donate">Donate Now</button></Link>
                            <p><strong>Alternative: </strong>Email transfer your amount to <i>info@homeworkhubtutoring.ca</i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Donate