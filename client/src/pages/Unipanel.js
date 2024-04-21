import React from 'react'
import Hero from '../components/Hero'
// import About from '../components/About'
import Faq from '../components/Faq'

const Unipanel = () => {

    const About = () =>{

        return(
           
            <section id="about" className="about">
              <div class="container-fluid">
        
                <div class="row">
                  
                  <div class="d-flex flex-row align-items-center flex-wrap" style="margin: 20px;">
                    <div class="col-8 col-lg-8 icon-boxes d-flex flex-column py-5 px-lg-5 justify-content-center"
                      data-aos="fade-left">
                      <h3>University Information Panels</h3>
                      <p>University and college applications are an undoubtedly complicated process for any student, which,
                        combined with their heavy course loads, busy schedules, and lack of accessible resources and information
                        can also be an extremely stressful experience.
        
                        Through a series of panels and seminars, student guest speakers from top universities/programs across
                        Canada and the US will present their experiences applying to university and share their own insights and
                        advice to other students looking to follow similar paths. These panels will allow participants to gain
                        more insight on:
        
                      <ul class="check-list">
                        <li>Academics and course selection</li>
                        <li>University applications essays</li>
                        <li>Extracurricular activities and community involvement</li>
                        <li>School and program selection</li>
                      </ul>
        
                      Whether you are a new grade 9 student looking for guidance during high school or a rising grade 12 student
                      looking to get advice for the upcoming application season, HomeworkHub is dedicated to helping you relieve
                      the stress of your high school career and application process!
                      </p>
                      
        
                    </div>
                     
                  </div>
        
         
                  <div class="row">
                    <div class="icon-boxes d-flex flex-column py-5 px-lg-5 justify-content-center align-items-center"
                      data-aos="fade-left">
                      <h3>Panel Schedule</h3>
        
                   
                    <p>
                      Top Canadian Scholarships, <strong>Saturday March 25th at 3:15 PM EST</strong>
                    </p>
                    <img data-aos="fade-down" src="./assets/img/scholarshipPanel.PNG" alt="scholarship panel" srcset="" class="img-fluid rounded-3 mb-5" width="400">
                  
                    <p class="panel-text">
                      Our guest panelists, 2022 Schulich Scholar Sarah Wilson from University of Waterloo’s Computer Science program and 2023 Queen’s Chancellor Scholar Sammi Wang from Queen's University's Commerce Program, will discuss their experience applying to and winning top scholarships in Canada! 
                    </p>
        
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQEsmlS9zP5F9FnfcxGrFnXCxG6uJeVKyvvL0Wl1cX_Nu1ug/viewform">
                      <button class="reg mb-5">Register Here!</button>
                    </a>
        
                    
                      
                    <p>
                      Top Canadian Business Programs, <strong>Sunday November 6th at 7:00 PM EST</strong>
                    </p>
                    <img data-aos="fade-down" src="./assets/img/other/HHBusinessPanel.png" alt="upenn panel" srcset="" class="img-fluid rounded-3 mb-5" width="400">
                  
                    <p class="panel-text">
                      Our guest panelists, Prem Mehta-Spooner from Queen's University's Commerce Program and Jane Huang from Western University's IVEY Business School will discuss their experience applying to and attending top business programs in Canada! 
                    </p>
        
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeVGOx9n2Rzr2-7GxfqDRFzNUdql5yf2nbagT3LAcqT_GB0nA/viewform?usp=sf_link ">
                      <button class="reg mb-5">Register Here!</button>
                    </a>
        
        
                  
                    
                    <p>
                      My Experience at the Wharton Business School at the University of Pennsylvania, <strong>October 2nd at 7:00 PM EST</strong>
                    </p>
                    <img data-aos="fade-down" src="./assets/img/other/UPennPanel.png" alt="upenn panel" srcset="" class="img-fluid rounded-3 mb-5" width="400">
                  
                    <p class="panel-text">
                      Our guest panelist, Marissa Sawicki, who is currently an MBA student at the University of Pennsylvania Wharton school of business joined us to discuss her experience applying to and attending one of the top business schools in the world!
                    </p>
        
                    <a href="https://forms.gle/7683Sa244QitCYug7">
                      <button class="reg">Register Here!</button>
                    </a>
                    
        
                    
                    <div class="icon-boxes d-flex flex-column py-5 px-lg-5 justify-content-center align-items-center">
                    <p>
                      UW and UofT Software Engineering Panel, <strong>September 25th at 5:00 PM EST!</strong>
                    </p>
                    
        
                    <p class="panel-text">
                      Our guest panelists, Victor Wei from the University of Waterloo’s SE program and Andrey Kobyakov from the University of Toronto’s SE program joined us to discuss their experience applying to and attending university software engineering programs!
                    </p>
                    
                    <a href="https://forms.gle/YYW2sDNNWXxJfYis7">
                      <button class="reg">Register Here!</button>
                    </a>
        
                  </div>
                  </div>
                  </div>
        
                  
                  
            </section>
        
        )
    }
}