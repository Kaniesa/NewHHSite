import React from 'react'
import rosemary from '../assets/img/news/rosemarybartonshow.webp'
import ctv from '../assets/img/news/ctvnewskitchener.webp'
import nationalObserver from '../assets/img/news/National-Observer.webp'
import cbcKids from '../assets/img/news/cbc-kids.png'
import cbcRadio from '../assets/img/news/cbcradiometro.webp'
import NewsSlide from './NewsSlide'

// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const News = () => {
    const data = [
        {
            link: "https://gem.cbc.ca/media/rosemary-barton-live/s02e32",
            h3: "Rosemary Barton Show",
            image: rosemary,
            width: "50%",
        },
        {
            link: "https://www.cbc.ca/news/canada/kitchener-waterloo/student-tutors-ontario-ukraine-homework-hub-1.6409198",
            h3: "CBC News",
            image: "https://www.cbc.ca/mediacentre/content/images/CBC-News_HORZ_4CLR_542x296.jpg",
            width: "50%",
        },
        {
            link: "https://kitchener.ctvnews.ca/waterloo-region-teens-tutor-ukraine-students-who-can-t-go-to-school-1.5854620",
            h3: "CTV News Kitchener",
            image: ctv,
            width: "50%",
        },
        {
            link: "https://www.thestar.com/news/canada/2021/09/16/high-schoolers-behind-homework-hub-expand-free-online-tutoring.html",
            h3: "Toronto Star",
            image: "https://images.thestar.com/IIOsvm8TSkgl_WE0zc6FVqYlgH0=/0x0:3000x1000/3000x1000/smart/filters:cb(1619712149395)/https://www.thestar.com/content/dam/thestar/uploads/2021/04/29/torstar-3000x1000px-1.jpg",
            width: "50%",
        },
        {
            link: "https://www.kitchenertoday.com/local-news/its-a-win-win-local-teens-support-students-with-free-tutoring-volunteer-hours-backpack-fundraiser-4347617",
            h3: "Kitchener Today",
            image: "https://vmcdn.ca/f/files/kitchenertoday/images/kitchenertoday/share_dailyheadlines_1200x628_2_kitchenertoday.jpg",
            width: "50%",
        },
        {
            link: "https://www.nationalobserver.com/2022/03/24/news/ocean-away-canadian-teens-are-helping-their-ukrainian-peers-stay-top-their-studies",
            h3: "National Observer",
            image: nationalObserver,
            width: "50%",
        },
        {
            link: "https://www.cbc.ca/kidsnews/post/profile-ontario-teen-lessens-hybrid-learning-stress-with-free-1-on-1-tutori",
            h3: "CBC Kids",
            image: cbcKids,
            width: "20%",
        },
        {
            link: "https://www.cbc.ca/listen/live-radio/1-39-metro-morning/clip/15904184-homework-help-across-globe-ontario-teenagers-helping-students",
            h3: "CBC Metro Morning",
            image: cbcRadio,
            width: "50%",
        },
        {
            link: "https://www.iheartradio.ca/ctv-news-content/waterloo-based-tutoring-hub-helps-youth-feel-more-connected-1.16905296",
            h3: "iHeart Radio",
            image: "https://i.iheart.com/v3/re/new_assets/598b1a5f7d9c50c7352814e5",
            width: "50%",
        },
        {
            link: "https://toronto.ctvnews.ca/video?clipId=2360231",
            h3: "Toronto CTV News",
            image: "https://www.ctvnews.ca/polopoly_fs/1.4860018.1605665042!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg",
            width: "50%",
        },
    ]
    return (
        <section id="news" class="news">
            <div class="container" id="donors">
                <div class="section-title ps-5" data-aos="fade-up">
                    <h2 class="subtitle">Publicity</h2>
                    <p id="news">HomeworkHub on the News ...</p>
                </div>

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    navigation
                    loop
                    autoplay
                    pagination={{ clickable: true }}>
                    {data.map((item, index) => {
                        return (
                            <SwiperSlide key={item.image}>
                                <NewsSlide {...item} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default News