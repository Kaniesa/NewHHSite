import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TestimonialSlide from './TestimonialSlide';

const Testimonials = () => {
    const data = [
        `My son is fascinated by the meetings with his HomeworkHub tutor. He is looking forward to them and after them he is always excited and continues to play the games they both played. When their last meeting was over, he was very disappointed and cried that they would not see each other again. It's great to see my child inspired to learn!`,
        `From start to finish HomeworkHub was great! Our tutor was friendly and patient with our son and she really took her time to help him with his math.`,
        `My son is an only child, so when school went to remote learning, he was struggling. He
        needed more one on one time, and this program gave it to him. He was happy to have a
        study buddy and someone to guide him through his school work. It was beneficial that he
        was brainstorming with another young student, because he felt more comfortable doing
        homework with a peer instead of an adult.`,
        `Our tutor went the extra mile to help my son on his Math. He sent out a link of Khan
        Academy for him to enrich the knowledge and practice what he learned. During the
        session, he patiently helped my son to understand the concept and sometimes spent extra
        time with him at the end of session.`,
        `Great experience, very helpful. Esther always helped with homework questions and when no
        homework, she played learning games with my child.`,
    ]

    return (
        <section id="real-testimonials" className="testimonials">
            <div className="container ps-5">
                <div className="section-title" data-aos="fade-up">
                    <h2>Testimonials</h2>
                    <p>Here's what our parents have to say:</p>
                </div>

                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    freeMode
                    loop
                    autoplay
                    pagination={{ clickable: true }}>
                        {data.map(item => {
                            return (
                                <SwiperSlide key={item}>
                                    <TestimonialSlide text={item}/>
                                </SwiperSlide>
                            )
                        })}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials