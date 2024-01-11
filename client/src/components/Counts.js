import React from 'react'
import Card from './Card'

const Counts = ({ data }) => {
    return (
        <section id="counts" className="counts">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <Card text="Students" count={data.studentCount} nameOfClass="bi bi-journal-richtext" />
                    <Card text="HomeworkHub Tutors" count={data.tutorCount} nameOfClass="bi bi-headset" />
                    <Card text="Hours Tutored" count={data.hoursCount} nameOfClass="bi bi-people" />
                </div>
            </div>
        </section>
    )
}

export default Counts