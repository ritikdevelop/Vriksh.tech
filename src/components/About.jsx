import React from 'react'
import './About.css'
const About = () => {
  return (
     <section className="about-one">
        <div className="about-one__shape-2 float-bob">
          <img src="/src/images/about-one-shape-2.png" alt="" />
        </div>
        <div className="about-one__shape-3 float-bob-y">
          <img src="/src/images/about-one-shape-3.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div
                  className="section-title text-left sec-title-animation animation-style2"
                >
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">About Us</span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Boost Business with Our <br />
                    Innovative
                    <span> IT Solutions</span>
                  </h2>
                </div>
                <p className="about-one__text">
                  Innovating and empowering businesses with tailored solutions
                  for success<br />
                  and growth. Empowering businesses to create meaningful
                  innovation.
                </p>
                <ul className="about-one__points list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-award"></span>
                    </div>
                    <div className="content">
                      <h4>Award-Winning Company.</h4>
                      <p>
                        Partner with us to unlock new possibilities, drive
                        progress, and shape<br />
                        a future filled with success
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-certified"></span>
                    </div>
                    <div className="content">
                      <h4>Certified Company</h4>
                      <p>
                        Partner with us to unlock new possibilities, drive
                        progress, and shape<br />
                        a future filled with success
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="about-one__btn-and-client-info">
                  <div className="about-one__btn-box">
                    <a href="about.html" className="thm-btn"
                      >Learn More
                      <span className="fas fa-arrow-right"></span>
                    </a>
                  </div>
                  <div className="about-one__client-info-inner">
                    <div className="about-one__client-info">
                      <div className="about-one__client-img-inner">
                        <div className="about-one__client-img">
                          <img src="/src/images/about-one-client-img-1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="about-one__client-details">
                        <h5>Adam Smith</h5>
                        <p>ceo,Itzone</p>
                      </div>
                    </div>
                    <div className="about-one__client-sign">
                      <img src="/src/images/about-one-client-sign.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="about-one__right wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-one__img-box">
                  <div className="about-one__shape-1 float-bob-x">
                    <img src="/src/images/about-one-shape-1.png" alt="" />
                  </div>
                  <div className="about-one__img">
                    <img src="/src/images/about-one-img-1.jpg" alt="" />
                  </div>
                  <div className="about-one__img-2">
                    <img src="/src/images/about-one-img-2.jpg" alt="" />
                  </div>
                  <div className="about-one__video-link">
                    <a
                      href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                      className="video-popup"
                    >
                      <div className="about-one__video-icon">
                        <span className="fa fa-play"></span>
                        <i className="ripple"></i>
                      </div>
                    </a>
                  </div>
                  <div className="about-one__client-box">
                    <ul className="about-one__client-box-img-list list-unstyled">
                      <li>
                        <div className="about-one__client-box-img">
                          <img
                            src="/src/images/about-one-client-img-1-1.jpg"
                            alt=""
                          />
                        </div>
                      </li>
                      <li>
                        <div className="about-one__client-box-img">
                          <img
                            src="/src/images/about-one-client-img-1-2.jpg"
                            alt=""
                          />
                        </div>
                      </li>
                      <li>
                        <div className="about-one__client-box-img">
                          <img
                            src="/src/images/about-one-client-img-1-3.jpg"
                            alt=""
                          />
                        </div>
                      </li>
                      <li>
                        <a href="#"><span className="fas fa-plus"></span></a>
                      </li>
                    </ul>
                    <p className="about-one__client-text">
                      <span className="odometer" data-count="120">00</span
                      ><span className="about-one__client-text-letter">K</span>
                      Satisfied Client
                    </p>
                  </div>
                  <div className="about-one__experience-box">
                    <div className="about-one__experience-count-box">
                      <h3 className="odometer" data-count="25">00</h3>
                      <span>+</span>
                    </div>
                    <p className="about-one__experience-text">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About