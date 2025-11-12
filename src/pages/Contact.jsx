import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <div>
      {/* Page Banner */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/src/images/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3>Contact</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <ChevronRight className="chevron" size={16} />
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="contact-info">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <Phone size={16} className="icon-call" />
                </div>
                <p>Contact Us</p>
                <h3>
                  <a href="tel:558270575405">+55 827 057 5405</a>
                </h3>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <Mail size={16} className="icon-email" />
                </div>
                <p>Email Us</p>
                <h3>
                  <a href="mailto:example@gamil.com">example@gamil.com</a>
                </h3>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="contact-info__single">
                <div className="contact-info__icon">
                  <MapPin size={16} className="icon-pin" />
                </div>
                <p>Our Office Location</p>
                <h3>12 Green Road 05 New York</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Page */}
      <section className="contact-page">
        <div className="container">
          <div className="contact-page__inner">
            <div
              className="contact-page__bg-shape"
              style={{
                backgroundImage: "url(/src/images/contact-page-bg.jpg)",
              }}
            ></div>
            <div className="row">
              <div className="col-xl-6">
                <div className="contact-page__left">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    className="google-map__one"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="contact-page__right">
                  <h3 className="contact-page__form-title">Get A Free Quote</h3>
                  <form
                    id="contact-form"
                    className="contact-form-validated contact-page__form"
                    action="assets/inc/sendmail.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Mobile"
                            name="phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="contact-page__input-box">
                          <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-page__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Message"
                            required=""
                          ></textarea>
                        </div>
                        <div className="contact-page__btn-box">
                          <button
                            type="submit"
                            className="thm-btn contact-page__btn"
                            data-loading-text="Please wait..."
                          >
                            Send A Message
                            <span className="fas fa-arrow-right"></span>
                          </button>
                        </div>
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

      <NewsLetter />
    </div>
  );
};

export default Contact;
