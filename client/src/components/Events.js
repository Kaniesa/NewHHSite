import React from 'react'
import HoHoHomeworkhub from '../assets/img/gallery/HoHoHomeworkHub.webp'
import tedx from '../assets/img/gallery/tedx4.webp'
import letsCode from '../assets/img/gallery/LetsCodePoster.webp'
import twoYear from '../assets/img/gallery/TeamPic2YearAnn.webp'
import scholarship from '../assets/img/gallery/scholarshipPanel.webp'
import business from '../assets/img/gallery/HHBusinessPanel.webp'
import upenn from '../assets/img/gallery/UPennPanel.webp'
import uniPanel from '../assets/img/gallery/university-panel-poster.webp'
import finance from '../assets/img/gallery/introtofinance.webp'
import grandRiverHospital from '../assets/img/gallery/grandriverhospitaldonation.webp'
import backpacks from '../assets/img/gallery/backpacksdonation.webp'
import code from '../assets/img/gallery/LetsCodePic.webp'
import compassCodes from '../assets/img/gallery/compass_codes.webp'
import laurier from '../assets/img/gallery/laurierevent.webp'
import compassRide from '../assets/img/gallery/Compassrideevent.webp'
import Slide from './Slide'

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Events = () => {
    const sliderData = [
        {
            id: "intro", 
            h1: "Ho Ho HomeworkHub", 
            image: HoHoHomeworkhub, 
            width: 400, 
            alt: "HoHoHomeworkHub Insta Post", 
            p: "This Holiday Season, Homeworkhub is supporting local charities to provide students in KW with backpacks, school supplies, and educational gifts. We're inviting you to our packing party: come together with the community and help package and distribute the gifts to the needy! Meals will be provided, as well as volunteer hours, more details on registration form below!", 
            link: "https://docs.google.com/forms/d/e/1FAIpQLScndCKOgEMR4rnSIMdrXVUNnoVBWnbw6-8jK1WKZrS8euhKyg/viewform",
        },
        {
            id: "intro", 
            h1: "HomeworkHub at Tedx Columbia Lake Youth", 
            image: tedx, 
            width: 600, 
            alt: "HomeworkHub Team at Tedx", 
            p: `Our founder Paris Cai, had the amazing opportunity to speak about HomeworkHub through her Ted Talk "From classNameroom to Cataylst" at the Tedx Columbia Lake Youth 2023 event! We're so proud of how far HomeworkHub has come, and will continue to inspire students to aim for the stars!`,
        },
        {
            id: "intro", 
            h1: "Let's Code: Python in 8 Weeks", 
            image: letsCode, 
            width: 300, 
            alt: "Let's Code Poster", 
            p: `HomeworkHub is happy to introduce Let's Code: Python in 8 Weeks, an engaging and interactive summer coding course taught by UW Computer Science students designed to introduce students in grades 4 to 8 to the fundamentals of Python programming. With the increasing importance of technology in our lives, learning to code has become a valuable skill for students of all ages. More details under Events dropdown on menu!`,
            link: "https://docs.google.com/forms/d/e/1FAIpQLSftP-5hTcQqV_VyGbMqHMkGRgp4I5zYhYxlVD69fVt-mMHhUQ/viewform",
        },
        {
            id: "intro", 
            h1: "HomeworkHub 2-year Anniversary", 
            image: twoYear, 
            width: 600, 
            alt: "2 Year Anniversary Team Picture", 
            p: `HomeworkHub celebrates its two year anniversary this February! We are so grateful for all of our team members, volunteers, and students who have supported us along this amazing journey. We hope to have many more years with you all.`,
        },
        {
            id: "intro", 
            h1: "Top Canadian Scholarships", 
            image: scholarship, 
            width: 400, 
            alt: "2 Year Anniversary Team Picture", 
            p: `Our guest panelists, 2022 Schulich Scholar Sarah Wilson from University of Waterloo's Computer Science program and 2023 Queen's Chancellor Scholar Sammi Wang from Queen's University's Commerce Program, will discuss their experience applying to and winning top scholarships in Canada!`,
        },
        {
            id: "intro", 
            h1: "Top Canadian Business Programs", 
            image: business, 
            width: 375, 
            alt: "Top Canadian business program poster portrait", 
            p: `Our guest panelists, Prem Mehta-Spooner from Queen's University's Commerce Program and Jane Huang from Western University's IVEY Business School will discuss their experience applying to and attending top business programs in Canada!`,
        },
        {
            id: "intro", 
            h1: "My Experience at the Wharton Business School", 
            image: upenn, 
            width: 375, 
            alt: "UPenn Panel poster", 
            p: `Our guest panelist, Marissa Sawicki, who is currently an MBA student at the University of Pennsylvania Wharton school of business joined us to discuss her experience applying to and attending one of the top business schools in the world!`,
        },
        {
            id: "intro", 
            h1: "UW and UofT Software Engineering Panel", 
            image: uniPanel, 
            width: 375, 
            alt: "Software Engineering panel poster", 
            p: `Our guest panelists, Victor Wei from the University of Waterloo’s SE program and Andrey Kobyakov from the University of Toronto’s SE program joined us to discuss their experience applying to and attending university software engineering programs!`,
        },
        {
            id: "intro", 
            h1: "Intro to Finance", 
            image: finance, 
            width: 375, 
            alt: "Intro to finance poster", 
            p: `The intro to Finance lecture, also given to SHAD Canada students last summer, introduced the fundamentals of business and market competition which has been extensively studied in economics and business domains. Through a series of fun examples, engaging exercises and interesting discussions, students discovered the basics of competition within economic and business contexts while also having the opportunity to attend a lecture hosted by Laurier University professor of marketing Martin Qiu. A big THANK YOU to you Professor Qiu for your kindness and support!`,
        },
        {
            id: "intro", 
            h1: "Ho Ho HomeworkHub", 
            image: grandRiverHospital, 
            width: 700, 
            alt: "Intro to finance poster", 
            p: `Thanks to the help of our community partners and Rising Youth, HomeworkHub was able to donate over $2000 worth of Holiday Gifts to students in our community this Holiday Season for our inaugural "Ho Ho HomeworkHub" Holiday Fundraiser!`,
        },
        {
            id: "intro", 
            h1: "Back to School with Backpacks Fundraiser", 
            image: backpacks, 
            width: 700, 
            alt: "Backpacks fundraiser photo with table of backpacks", 
            p: `For HomeworkHub Tutoring's "Back to School with Backpacks" fundraiser, we raised over 250 backpacks with school supplies so our community's students to can be school-ready for the Back to School season. We couldn't have done this without the support of our community partners over at Rising Youth and all the help from our wonderful Students and Volunteers!`,
        },
        {
            id: "intro", 
            h1: "Let's Code Intro Session", 
            image: code, 
            alt: "lets code poster", 
            p: `HomeworkHub's "Let's Code" intro session was hosted in partnership with our friends over at Compass Tutoring! Our tutors introduced students to the world of coding and computer science with the help of code.org, JavaScript, and Python. If you're interested in coding, please visit Compass Tutoring for more information and stay tuned for future intro sessions!`,
        },
        {
            id: "intro", 
            h1: "Compass Codes", 
            image: compassCodes, 
            width: 300, 
            height: 800,
            alt: "compass codes meeting picture", 
            p: `Compass Codes is a 2-month long, FREE introductory coding program hosted in partnership with Compass Tutoring. This program, brought to you by our very best computer science tutors Charles Zhang and Feng Zhang, will host fun, engaging, and hands-on lessons to teach students grade 5 to 10 the basics of computer science, web-development, and user-friendly and dynamic web-applications.`,
        },
        {
            id: "intro", 
            h1: "Laurier Volunteers Fair!", 
            image: laurier, 
            width: 600, 
            alt: "compass codes meeting picture", 
            p: `A big thank you to Laurier University for inviting HomeworkHub to their University Fair!`,
        },
        {
            id: "intro", 
            h1: "Compass RIDE for Refugee", 
            image: compassRide, 
            width: 800, 
            alt: "compass codes meeting picture", 
            p: `Thank you to our community partner Compass Refugee for inviting HomeworkHub to their annual RIDE for Refuge event!`,
        },
    ]

    return (
        <section id="events" className="testimonials events">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <p>Events</p>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    navigation
                    loop
                    pagination={{ clickable: true }}>
                        {sliderData.map((item, index) => {
                            return (
                                <>
                                    <SwiperSlide key={index}>
                                        <Slide {...item} />
                                    </SwiperSlide>
                                </>
                            )
                        })}
                </Swiper>
            </div>
        </section>
    )
}

export default Events