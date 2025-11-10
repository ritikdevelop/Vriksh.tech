import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div
        className="site-footer__bg"
        style={{ backgroundImage: "url(/src/images/site-footer-bg.jpg)" }}
      ></div>
      <div className="site-footer__shape-1 img-bounce-two"></div>
      <div className="site-footer__shape-2 float-bob-y"></div>
      <div className="site-footer__top">
        <div className="container">
          <div className="site-footer__top-inner">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <a href="index.html">
                      <img src="/src/images/logo-2.png" alt="" />
                    </a>
                  </div>
                  <p className="footer-widget__about-text">
                    Car Is Where Early Adopters And Innovation Seekers FindGet
                    the latest SEO tips and software Lively Imaginative Tech.
                  </p>
                  <div className="footer-widget__social">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__links">
                  <h4 className="footer-widget__title">Quick links</h4>
                  <ul className="footer-widget__links-list list-unstyled">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="team.html">Meet Our Team</a>
                    </li>
                    <li>
                      <a href="projects.html">Our Projects</a>
                    </li>
                    <li>
                      <a href="faq.html">Help & FAQs</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__services">
                  <h4 className="footer-widget__title">Services</h4>
                  <ul className="footer-widget__links-list list-unstyled">
                    <li>
                      <a href="web-development.html">Web Development</a>
                    </li>
                    <li>
                      <a href="business-analysis.html">Business Development</a>
                    </li>
                    <li>
                      <a href="software-development.html">Cloud services</a>
                    </li>
                    <li>
                      <a href="product-design.html">Product Management</a>
                    </li>
                    <li>
                      <a href="ui-ux-design.html">UI/UX Design</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__contact">
                  <h3 className="footer-widget__title">Contact Us</h3>
                  <ul className="footer-widget__contact-list list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-pin"></span>
                      </div>
                      <p>
                        4140 Parker Rd. Allentown, New <br />
                        Mexico 31134
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <p>
                        <a href="tel:2195550114">(219) 555-0114</a>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>
                      <p>
                        <a href="mailto:Itzone@gmail.com">Itzone@gmail.com</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <div className="site-footer__copyright">
                  <p className="site-footer__copyright-text">
                    © 2025 Vriksh.Tech By All Rights Reserved.
                  </p>
                </div>
                <div className="site-footer__bottom-menu-box">
                  <ul className="list-unstyled site-footer__bottom-menu">
                    <li>
                      <a href="about.html">Terms of Service</a>
                    </li>
                    <li>
                      <a href="about.html">Privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
