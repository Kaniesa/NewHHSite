import React from 'react'
import Hero from '../components/Hero'
import Faq from '../components/Faq'

import Paris from '../assets/img/team/Paris.webp'
import Leah from '../assets/img/team/Leah.webp'
import Neha from '../assets/img/team/Neha.webp'

const BoardOfDirectors = () => {
  return(
    <section id="board" class="team">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>Board of Directors</h2>
          <p>Our Board of Directors</p>
        </div>

        <div class="row" data-aos="fade-left">

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
            <div class="member" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic" data-bioName="Paris"><img src={Paris} class="img-fluid tmpSize" alt="Paris Cai">
              </div>
              <div class="member-info">
                <h4>Paris Cai</h4>
                <span>Executive Director</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
            <div class="member" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic" data-bioName="Neha"><img src={Neha} class="img-fluid tmpSize" alt="Neha Shanavas">
              </div>
              <div class="member-info">
                <h4>Neha Shanavas</h4>
                <span>Director of Operations</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-5">
            <div class="member" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic" data-bioName="Leah"><img src={Leah} class="img-fluid tmpSize" alt="Leah Cai">
              </div>
              <div class="member-info">
                <h4>Leah Cai</h4>
                <span>Director of Operations</span>
              </div>
            </div>
          </div>
          
          <p> </p>
          <P> </P>
          <p><i>Contact info@homeworkhubtutoring.ca to apply to be a board director</i></p>
          <Faq />
        </div>
      </section>
    )
}

return (
        <>
            <Hero 
                h1={{text: "Volunteer at", underlined: "HomeworkHub!", reversed: false}} 
                h2="Let's learn and teach together!"
                img={girl}
            />
)

export default BoardOfDirectors
