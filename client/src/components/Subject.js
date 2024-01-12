import React from 'react'
import calculator from '../assets/img/icons/calculating.png'
import science from '../assets/img/icons/science.png'
import book from '../assets/img/icons/book.png'
import french from '../assets/img/icons/french.png'
import geography from '../assets/img/icons/geography.png'
import training from '../assets/img/icons/training.png'
import { Link } from 'react-router-dom'
import SubjectCard from './SubjectCard'


const Subject = () => {
    const firstRowData = [
        {
            delay: "200",
            h2: "Math",
            image: calculator,
            alt: "calculator icon",
        }, 
        {
            delay: "200",
            h2: "Science",
            image: science,
            alt: "science beaker",
        },
        {
            delay: "200",
            h2: "English",
            image: book,
            alt: "book icon",
        },
        {
            delay: "200",
            h2: "French",
            image: french,
            alt: "french flag",
        },
    ]

    const secondRowData = [
        {
            delay: "200",
            h2: "Geography",
            image: geography,
            alt: "globe map and telescope icon",
        }, 
        {
            delay: "200",
            h2: "Intro Programs",
            image: training,
            alt: "teacher training kids",
        },
    ]

    return (
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <p>Enroll Now!</p>
                </div>
                
                <div className="row" data-aos="fade-left">
                    {firstRowData.map((item) => {
                        return <SubjectCard key={item.h2} {...item}/>
                    })}
                </div>

                <div className="row" data-aos="fade-left">
                    {secondRowData.map((item) => {
                        return <SubjectCard key={item.h2} {...item}/>
                    })}
                    <div className="d-flex justify-content-center">
                        <Link
                            to="https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true">
                            <button className="reg">Register Today</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subject