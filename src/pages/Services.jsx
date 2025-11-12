import { ChevronRight, FilePenLine, Mail, MapPin, Phone, Plus, SquarePen, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
import NewsLetter from "../components/NewsLetter";

const Services = () => {
  return (
    <div>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/src/images/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3>Services</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <ChevronRight className="chevron" size={16} />
                </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Page Start */}
      <section className="services-page">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="/src/images/services-2-1.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-ux-design"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="ui-ux-design.html">UI/UX Design</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="ui-ux-design.html">
                      <Plus size={16} className="plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="/src/images/services-2-2.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-software-development"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="software-development.html">APP Development</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="software-development.html">
                      <Plus size={16} className="plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="500ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="/src/images/services-2-3.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-product-design"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="product-design.html">Product Design</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="product-design.html">
                      <Plus size={16} className="plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="700ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="/src/images/services-2-4.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-code"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="web-development.html">Website Design</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="web-development.html">
                     <Plus size={16} className="plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="900ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="/src/images/services-2-5.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-promotion-1"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="business-analysis.html">Business Analysis</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="business-analysis.html">
                      <Plus size={16} className="plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="1100ms"
            >
              <div className="services-two__single">
                <div className="services-two__img-box">
                  <div className="services-two__img">
                    <img src="/src/images/services-2-6.jpg" alt="" />
                  </div>
                  <div className="services-two__icon">
                    <span className="icon-social-media-marketing"></span>
                  </div>
                </div>
                <div className="services-two__content">
                  <h3 className="services-two__title">
                    <a href="web-development.html">Web Devolopment</a>
                  </h3>
                  <p className="services-two__text">
                    Comprehensive IT management, including network monitoring,
                    data backup,
                  </p>
                  <div className="services-two__plus">
                    <a href="web-development.html">
                      <Plus size={16} className="plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In touch */}
      <section className="contact-three">
        <div className="contact-three__bg-color">
          <div
            className="contact-three__bg-shape"
            style={{
              backgroundImage: "url(/src/images/contact-3-bg-shape.png)",
            }}
          ></div>
        </div>
        <ul className="contact-three__sliding-text-list list-unstyled marquee_mode-3">
          <li>
            <h2
              data-hover="Branding"
              className="contact-three__sliding-text-title"
            >
              GET IN TOUCH *
            </h2>
          </li>
          <li>
            <h2
              data-hover="Branding"
              className="contact-three__sliding-text-title"
            >
              GET IN TOUCH *
            </h2>
          </li>
          <li>
            <h2
              data-hover="Branding"
              className="contact-three__sliding-text-title"
            >
              GET IN TOUCH *
            </h2>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="contact-three__left">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Get In Touch</span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Conversation <span>– Reach</span>
                    <br />
                    <span>Out Anytime</span>
                  </h2>
                </div>
                <p className="contact-three__text">
                  We're here to listen! Whether you have questions, feedback,
                  <br />
                  or just want to say hello, feel free to reach out.
                </p>
                <ul className="contact-three__contact-list list-unstyled">
                  <li>
                    <div className="icon">
                      <Mail className="mail" size={18} />
                    </div>
                    <div className="content">
                      <span>Email Us</span>
                      <p>
                        <a href="mailto:info@domain.com">info@domain.com</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <Phone className="mail" size={18} />
                    </div>
                    <div className="content">
                      <span>Contact US</span>
                      <p>
                        <a href="tel:9900567780">+99 (00) 567 780</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <MapPin className="mail" size={18} />
                    </div>
                    <div className="content">
                      <span>Our Address</span>
                      <p>
                        1629 N. Dixie Avenue,
                        <br />
                        Kentucky, 42701
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="contact-three__right">
                <div className="contact-three__img-1">
                  <img src="/src/images/contact-three-img-1.png" alt="" />
                </div>
                <div className="contact-one__right">
                  <form
                    className="contact-form-validated contact-one__form"
                    action="assets/inc/sendemail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <h4 className="contact-one__input-title">Full Name</h4>
                        <div className="contact-one__input-box">
                          <div className="contact-one__input-icon">
                            <User size={16} />
                          </div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Thomas Alison"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <h4 className="contact-one__input-title">
                          Email Address
                        </h4>
                        <div className="contact-one__input-box">
                          <div className="contact-one__input-icon">
                            <Mail size={16} />
                          </div>
                          <input
                            type="email"
                            name="email"
                            placeholder="thomas@domain.com"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <h4 className="contact-one__input-title">
                          Phone Number
                        </h4>
                        <div className="contact-one__input-box">
                          <div className="contact-one__input-icon">
                            <Phone size={16} />
                          </div>
                          <input
                            type="text"
                            name="Phone"
                            placeholder="+12 (00) 123 4567 890"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <h4 className="contact-one__input-title">Subject</h4>
                        <div className="contact-one__input-box">
                          <div className="contact-one__input-icon">
                            <FilePenLine size={16} />
                          </div>
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <h4 className="contact-one__input-title">
                        Inquiry about
                      </h4>
                      <div className="contact-one__input-box text-message-box">
                        <div className="contact-one__input-icon">
                          <SquarePen size={16} />
                        </div>
                        <textarea
                          name="message"
                          placeholder="Write your message"
                          required=""
                        ></textarea>
                      </div>
                      <div className="contact-one__btn-box">
                        <button type="submit" className="thm-btn">
                          Submit Now{" "}
                          <span className="fas fa-arrow-right"></span>
                        </button>
                      </div>
                    </div>
                    <div className="result"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-two">
        <div
          className="process-two__bg-shape"
          style={{
            backgroundImage: "url(/src/images/process-two-bg-shape.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Working Process</span>
            </div>
            <h2 className="section-title__title title-animation">
              How we <span>works</span>
            </h2>
          </div>
          <ul className="row list-unstyled">
            <li
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="process-two__single">
                <div className="process-two__single-shape-1"></div>
                <div className="process-two__single-shape-2"></div>
                <div className="process-two__icon">
                  <span className="icon-self-service"></span>
                </div>
                <div className="process-two__count"></div>
                <h3 className="process-two__title">Choose a Service</h3>
                <p className="process-two__text">
                  Continua scale empowered metrics with cost effective
                  innovation.
                </p>
              </div>
            </li>

            <li
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="process-two__single process-two__single-margin">
                <div className="process-two__single-shape-1"></div>
                <div className="process-two__single-shape-2"></div>
                <div className="process-two__icon">
                  <span className="icon-conference"></span>
                </div>
                <div className="process-two__count"></div>
                <h3 className="process-two__title">Request a Meeting</h3>
                <p className="process-two__text">
                  Continua scale empowered metrics with cost effective
                  innovation.
                </p>
              </div>
            </li>

            <li
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="process-two__single">
                <div className="process-two__single-shape-1"></div>
                <div className="process-two__single-shape-2"></div>
                <div className="process-two__icon">
                  <span className="icon-execution"></span>
                </div>
                <div className="process-two__count"></div>
                <h3 className="process-two__title">Receive Custom Plan</h3>
                <p className="process-two__text">
                  Continua scale empowered metrics with cost effective
                  innovation.
                </p>
              </div>
            </li>

            <li
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="700ms"
              data-wow-duration="1500ms"
            >
              <div className="process-two__single process-two__single-margin">
                <div className="process-two__single-shape-1"></div>
                <div className="process-two__single-shape-2"></div>
                <div className="process-two__icon">
                  <span className="icon-results"></span>
                </div>
                <div className="process-two__count"></div>
                <h3 className="process-two__title">Let’s Make it Happen</h3>
                <p className="process-two__text">
                  Continua scale empowered metrics with cost effective
                  innovation.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <NewsLetter />
    </div>
  );
};

export default Services;
