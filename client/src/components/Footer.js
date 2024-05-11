import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <section id="footer">
            <div className="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 me-5">
                        <div class="footer-info rounded-pill">
                          <h3>HomeworkHub</h3>
                          <p class="pb-3"><em>Let's learn and teach together!</em></p>
                          <p>
                            Ontario, Canada
                            <br>
                            <strong>Phone:</strong> +1 917 660 3871<br>
                            <strong>Email:</strong> <a href="mailto:info@homeworkhubtutoring.ca">info@homeworkhubtutoring.ca</a><br>
                          </p>
                        </div>
                      </div>

                      <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links:</h4>
                        <ul>
                          <li><i class="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
                          <li><i class="bx bx-chevron-right"></i> <a href="#about">About Us</a></li>
                          <li><i class="bx bx-chevron-right"></i> <a href="#pricing">Courses</a></li>
                          <li><i class="bx bx-chevron-right"></i> <a href="#pricing">Contact</a></li>
                          <li><i class="bx bx-chevron-right"></i> <a href="code-of-conduct.html">Student & Tutor Code of Conduct</a>
                          </li>
                          <!-- <li><i class="bx bx-chevron-right"></i> <a href="">Terms of service</a></li>
                          <li><i class="bx bx-chevron-right"></i> <a href="">Privacy policy</a></li> -->
                        </ul>
                      </div>
            
                      <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Register and/or Donate:</h4>
                        <ul>
                          <li><i class="bx bx-chevron-right"></i> <a
                              href=https://docs.google.com/forms/d/e/1FAIpQLSeCJdNKBQHUi_8bKE3GW6stMa2GuQe3DyfDc2KEGRVBNjufFg/viewform?embedded=true">Student
                              Registration</a></li>
                          <li><i class="bx bx-chevron-right"></i> <a
                              href="https://docs.google.com/forms/d/e/1FAIpQLSecAWrA9XmRFuKeeElm8SS5E09MsU5nLyrujhs0FRg2w1Glnw/viewform">Tutor
                              Registration</a></li>
                          <li><i class="bx bx-chevron-right"></i> <a
                              href="https://www.paypal.com/donate?business=DRPWCU5CZ3J5J&amp;currency_code=CAD">Make a Donation</a>
                          </li>
                        </ul>
                      </div>
            
                      <div class="col footer-newsletter">
                        <h4>Social Networks:</h4>
                        <ul>
                          <li><i class="bx bxl-instagram"></i> <a href="https://www.instagram.com/hh.tutoring/">Instagram</a></li>
                          <li><i class="bx bxl-facebook"></i> <a href="#">Facebook</a></li>
                        </ul>
            
                      </div>
            
                    </div>
                  </div>
                </div>

                <div class="container">
                  <div class="copyright">
                    &copy; Copyright <strong><span>HomeworkHub</span></strong>. All Rights Reserved
                  </div>
                  <div class="credits">
                    <!-- All the links in the footer should remain intact. -->
                    <!-- You can delete the links only if you purchased the pro version. -->
                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/ -->
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> and Developed by <a
                      href="mailto:mariyatur27@gmail.com">Mariya Turetska</a> and <a
                      href="https://www.linkedin.com/in/andytubeee">Andrew Yang</a>
                  </div>
                </div>
        </section>
    )
}

export default Footer
