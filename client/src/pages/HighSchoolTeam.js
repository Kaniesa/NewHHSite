import React from 'react'
import Hero from '../components/Hero'
import Faq from '../components/Faq'

import Anne from '../assets/img/team/anne.webp'
import Grace from '../assets/img/team/Grace Qiu.webp'
import Gurman from '../assets/img/team/Gurman.webp'
import Kaniesa from '../assets/img/team/Kaniesa.webp'
import Jimmy from '../assets/img/team/Jimmy.webp'
import Cici from '../assets/img/team/Cici.webp'
import Priyanshi from '../assets/img/team/Priyanshi.webp'
import Naayeli from '../assets/img/team/Naayeli.webp'
import Maggie from '../assets/img/team/Mag.webp'
import Leah from '../assets/img/team/Leah C.webp'
import Fiona from '../assets/img/team/Fiona.webp'
import Hyewon from '../assets/img/team/Hyewon Image.webp'
import Marwa from '../assets/img/team/Marwa Image.webp'
import Chloe from '../assets/img/team/Chloe Image.webp'
import Nihitha from '../assets/img/team/Nihitha image.webp'
import Cindy from '../assets/img/team/Cindy Image.webp'
import Morgan from '../assets/img/team/Morgan.webp'
import Erin from '../assets/img/team/Erin.webp'
import Zaynah from '../assets/img/team/Zaynah.webp'
import Ayushi from '../assets/img/team/Ayushi Pandit.webp'
import Camille from '../assets/img/team/Camille Bernardo.webp'
import Lucy from '../assets/img/team/Lucy Chen.webp'
import Krisha from '../assets/img/team/Krisha Raichura.webp'
import William from '../assets/img/team/WilliamLiang.webp'
import girl from '../assets/img/homepage/girl-studying-in-library.avif'

const HighSchoolTeam = () => {
  return (
    <>
      <Hero 
                h1={{text: "Volunteer at", underlined: "HomeworkHub!", reversed: false}} 
                h2="Let's learn and teach together!"
                img={girl}
            />
      <section id="team" class="team">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>Our High School Team</p>
          </div>

          <div class="row" data-aos="fade-left">
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic" data-bioName="Anne"><img src={Anne} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Anne Zhang</h4>
                  <span>President</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="300">
                <div class="pic"><img src={Grace} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Grace Qiu</h4>
                  <span>Vice President</span>
                </div>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Gurman} width="6000" class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Gurman Sahota</h4>
                  <span>Vice President</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Kaniesa} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Kaniesa Deswal</h4>
                  <span>Tech Team Director</span>
                </div>
              </div>
            </div>
      
          <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Jimmy} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Jimmy Tao</h4>
                  <span>Students and Pairing Director</span>
                </div>
              </div>
            </div>    

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Cici} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Cici Zhu</h4>
                  <span>Volunteers Team Director</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Priyanshi} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Priyanshi Dokania</h4>
                  <span>QA Director</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Naayeli} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Naayeli Prakash</h4>
                  <span>Tech Team Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Maggie} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Maggie Hu</h4>
                  <span>Pairing Team Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Leah} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Leah Chin</h4>
                  <span>Pairing Team Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Fiona} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Fiona Jiang</h4>
                  <span>Pairing Team Member</span>
                </div>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Hyewon} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Hyewon Lee</h4>
                  <span>Media & Marketing Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Marwa} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Marwa Kabir</h4>
                  <span>Media & Marketing Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Chloe} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Chloe Cho</h4>
                  <span>Media & Marketing Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Nihitha} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Nihitha Sriram</h4>
                  <span>Media & Marketing Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Cindy} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Cindy Li</h4>
                  <span>Media & Marketing Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Morgan} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Morgan Pankarican</h4>
                  <span>Media & Marketing Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Erin} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Erin Yang</h4>
                  <span>Volunteers Team Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Zaynah} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Zaynah Kashif</h4>
                  <span>Volunteers Team Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Ayushi} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Ayushi Pandit</h4>
                  <span>QA Team Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Camille} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Camille Bernardo</h4>
                  <span>QA Team Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Lucy} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Lucy Chen</h4>
                  <span>QA Team Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={Krisha} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>Krisha Raichura</h4>
                  <span>QA Team Member</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
              <div class="member" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src={William} class="img-fluid tmpSize" alt=""/>
                </div>
                <div class="member-info">
                  <h4>William Liang</h4>
                  <span>Social Media Member</span>
                </div>
              </div>
            </div>
          </div>
          <Faq/>
        </div>
      </section>
    </>
  )
}

export default HighSchoolTeam
