import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <section className="service-one">
      <div className="services-one__shape-1"></div>
      <div className="services-one__shape-2 float-bob-x">
        <img src="/src/images/services-one-shape-2.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Our Services</span>
          </div>
          <h2 className="section-title__title title-animation">
            Innovative IT Services <br />
            Tailored <span>For Your Success.</span>
          </h2>
        </div>
        <div className="service-one__grid">
          <div className="service-one__single-inner">
            <div className="service-one__single-wrap">
              <div className="service-one__single">
                <div className="service-one__single-shape-1"></div>
                <div className="service-one__icon">
                  <span className="icon-social-media-marketing"></span>
                </div>
                <h3 className="service-one__title">
                  <a href="software-development.html">Software Development</a>
                </h3>
                <p className="service-one__text">
                  Innovating and empowering businesses with tailored solutions
                  for success and growth.
                </p>
              </div>
            </div>
            <div className="service-one__btn-box">
              <a href="software-development.html" className="thm-btn">
                Read More
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>
          <div className="service-one__single-inner">
            <div className="service-one__single-wrap">
              <div className="service-one__single">
                <div className="service-one__single-shape-1"></div>
                <div className="service-one__icon">
                  <span className="icon-financial-risk"></span>
                </div>
                <h3 className="service-one__title">
                  <a href="web-development.html">Risk Management</a>
                </h3>
                <p className="service-one__text">
                  Innovating and empowering businesses with tailored solutions
                  for success and growth.
                </p>
              </div>
            </div>
            <div className="service-one__btn-box">
              <a href="web-development.html" className="thm-btn">
                Read More
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>
          <div className="service-one__single-inner">
            <div className="service-one__single-wrap">
              <div className="service-one__single">
                <div className="service-one__single-shape-1"></div>
                <div className="service-one__icon">
                  <span className="icon-ux-design"></span>
                </div>
                <h3 className="service-one__title">
                  <a href="ui-ux-design.html">UI/UX Design</a>
                </h3>
                <p className="service-one__text">
                  Innovating and empowering businesses with tailored solutions
                  for success and growth.
                </p>
              </div>
            </div>
            <div className="service-one__btn-box">
              <a href="ui-ux-design.html" className="thm-btn">
                Read More
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>

          <div className="service-one__single-inner">
            <div className="service-one__single-wrap">
              <div className="service-one__single">
                <div className="service-one__single-shape-1"></div>
                <div className="service-one__icon">
                  <span className="icon-promotion"></span>
                </div>
                <h3 className="service-one__title">
                  <a href="digital-marketing.html">Digital Marketing</a>
                </h3>
                <p className="service-one__text">
                  Innovating and empowering businesses with tailored solutions
                  for success and growth.
                </p>
              </div>
            </div>
            <div className="service-one__btn-box">
              <a href="digital-marketing.html" className="thm-btn">
                Read More
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>

          <div className="service-one__single-inner">
            <div className="service-one__single-wrap">
              <div className="service-one__single">
                <div className="service-one__single-shape-1"></div>
                <div className="service-one__icon">
                  <span className="icon-implement"></span>
                </div>
                <h3 className="service-one__title">
                  <a href="software-development.html">Cloud Provider</a>
                </h3>
                <p className="service-one__text">
                  Innovating and empowering businesses with tailored solutions
                  for success and growth.
                </p>
              </div>
            </div>
            <div className="service-one__btn-box">
              <a href="software-development.html" className="thm-btn">
                Read More
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>

          <div className="service-one__single-inner">
            <div className="service-one__single-wrap">
              <div className="service-one__single">
                <div className="service-one__single-shape-1"></div>
                <div className="service-one__icon">
                  <span className="icon-monitor"></span>
                </div>
                <h3 className="service-one__title">
                  <a href="business-analysis.html">Data Analytics</a>
                </h3>
                <p className="service-one__text">
                  Innovating and empowering businesses with tailored solutions
                  for success and growth.
                </p>
              </div>
            </div>
            <div className="service-one__btn-box">
              <a href="business-analysis.html" className="thm-btn">
                Read More
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
