import React from 'react'
import studivolt from '../assets/img/sponsors/studivolt.png'
import homework from '../assets/img/sponsors/myhomeworkrewards-logo.webp'
import ignition from '../assets/img/sponsors/ignition-logo.webp'
import horse from '../assets/img/sponsors/redtheoneeyedhourse.webp'
import perthHuron from '../assets/img/sponsors/ivolunteerperthhuron.webp'
import bbyf from '../assets/img/sponsors/bbyf_logo.webp'
import compass from '../assets/img/sponsors/Compass_Refugee_Centre_Logo.webp'
import mill from '../assets/img/sponsors/mill-courtland.webp'
import kwmc from '../assets/img/sponsors/kwmc.webp'
import chinese from '../assets/img/sponsors/chinese_assosiation.webp'
import compassTutoring from '../assets/img/sponsors/compass_logo.png'

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SponsorsSlide from './SponsorsSlide'

const Sponsors = () => {
    const data = [
        {
            link: "https://studivolt.ca/", 
            h3: "StudiVolt", 
            role: "Community Partner", 
            image: studivolt,
        },
        {
            link: "http://myhomeworkrewards.com", 
            h3: "My Homework Rewards", 
            role: "Community Partner", 
            image: homework,
        },
        {
            link: "https://www.ignitionhacks.org/", 
            h3: "Ignition Hacks", 
            role: "Community Partner", 
            image: ignition,
        },
        {
            link: "https://redtheone-eyedhorse.org/", 
            h3: "Red the One-Eyed Horse", 
            role: "Community Partner", 
            image: horse,
        },
        {
            h3: "Volunteer Toronto", 
            role: "Community Partner", 
            image: "https://masadvise.org/wp-content/uploads/2019/07/VolunteerToronto_fullcolour_logo.png",
        },
        {
            h3: "iVolunteer Perth-Huron", 
            role: "Community Partner", 
            image: perthHuron,
        },
        {
            h3: "Building Black Youth Foundation", 
            role: "Community Partner", 
            image: bbyf,
        },
        {
            h3: "Volunteer Action Centre", 
            role: "Community Partner", 
            image: "https://www.volunteerwr.ca/vac/logo.jpg",
        },
        {
            h3: "House of Friendship", 
            role: "Community Partner", 
            image: "https://www.houseoffriendship.org/wp-content/themes/hof2018/images/house-of-friendship-logo.png",
        },
        {
            h3: "COMPASS Refugee Centre", 
            role: "Community Partner", 
            image: compass,
        },
        {
            h3: "Reception House Waterloo Region", 
            role: "Community Partner", 
            image: "https://www.viarail.ca/sites/all/files/corporate/account/company/reception-house-waterloo-region.jpg",
        },
        {
            h3: "Healing of the 7 Generations", 
            role: "Community Partner", 
            image: "https://healingofthesevengenerationskitchener.files.wordpress.com/2018/01/cropped-logo.jpg?w=200",
        },
        {
            h3: "Mill-Courtland & Highland Stirling Community Groups", 
            role: "Community Partner", 
            image: mill,
        },
        {
            h3: "Kitchener-Waterloo Multicultural Center", 
            role: "Community Partner", 
            image: kwmc,
        },
        {
            h3: "Costco Wholesale", 
            role: "Dedicated Donor", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Costco_Wholesale_logo_2010-10-26.svg/1280px-Costco_Wholesale_logo_2010-10-26.svg.png",
        },
        {
            h3: "Rising Youth", 
            role: "Dedicated Donor", 
            image: "https://www.pavedarts.ca/wp_cms/wp-content/uploads/2020/06/Rising-Youth-EN-Colour-665x300.png",
        },
        {
            h3: "Waterloo Chinese Canadian Association", 
            role: "Dedicated Donor", 
            image: chinese,
        },
        {
            h3: "Compass Tutoring", 
            role: "Dedicated Donor", 
            image: compassTutoring,
        },
    ]

    return (
        <section id="testimonials" class="testimonials">
            <div class="container ps-5" id="donors">
                <div class="section-title" data-aos="fade-up">
                    <h2 id="volunteers">Our Donors and Community Partners</h2>
                    <p>Thank you!</p>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    navigation
                    loop
                    pagination={{ clickable: true }}>
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide key={item.image}>
                                <SponsorsSlide {...item} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Sponsors