import React from 'react'
import student from '../assets/img/icons/students.png'
import PricingCard from './PricingCard'
import duration from '../assets/img/icons/duration.png'
import session from '../assets/img/icons/session.png'
import creditLimit from '../assets/img/icons/credit-limit.png'

const Pricing = () => {
    return (
        <section id="function" className="pricing">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <p>Here's How We Work...</p>
                </div>
                <div className="row" data-aos="fade-left">
                    <PricingCard delay="100" h3="Grades" image={student} h5="We are tutoring" p="Grades 1 - 8" />
                    <PricingCard delay="200" h3="Duration" image={duration} h5="Each session is" p="45 minutes"/>
                    <PricingCard delay="300" h3="Sessions" image={session} h5="A subject is tutored for" p="8 sessions"/>
                    <PricingCard delay="400" h3="Subject Limit" image={creditLimit} h5="You can sign up for" p={"3 subjects at a time"}/>
                </div>
            </div>
        </section>
    )
}

export default Pricing