import React from 'react'
import './Contact.css'
import { ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <section className="contact-one">
        <div className="contact-one__shape-1 float-bob-x">
          <img src="/src/images/contact-one-shape-1.png" alt="" />
        </div>
        <div className="contact-one__shape-2"></div>
        <div className="container">
          <div className="row">
           
            <div className="col-xl-6 col-lg-6">
              <div className="contact-one__left">
                <div
                  className="section-title text-left sec-title-animation animation-style2"
                >
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">Get In Touch</span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Let’s Talk About Business <span>Solutions</span> With Us
                  </h2>
                </div>
                <div className="contact-one__img-and-content">
                  <div className="contact-one__img">
                    <img src="/src/images/contact-one-img-1.jpg" alt="" />
                  </div>
                  <div className="contact-one__content">
                    <p className="contact-one__text">
                      We're here to listen! Whether you have questions,
                      feedback, or just want to say hello, feel free to reach
                      out.
                    </p>
                    <div className="contact-one__call-box">
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <div className="content">
                        <p>Call Us Any Time</p>
                        <h3>
                          <a href="tel:0882466422710">+088 (246) 642-27-10</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="col-xl-6 col-lg-6">
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
                          <span className="icon-user"></span>
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
                      <h4 className="contact-one__input-title">Email Address</h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-mail"></span>
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
                      <h4 className="contact-one__input-title">Phone Number</h4>
                      <div className="contact-one__input-box">
                        <div className="contact-one__input-icon">
                          <span className="icon-phone-call"></span>
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
                          <span className="icon-edit"></span>
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
                    <h4 className="contact-one__input-title">Inquiry about</h4>
                    <div className="contact-one__input-box text-message-box">
                      <div className="contact-one__input-icon">
                        <span className="icon-edit"></span>
                      </div>
                      <textarea
                        name="message"
                        placeholder="Write your message"
                        required=""
                      ></textarea>
                    </div>
                    <div className="contact-one__btn-box">
                      <button type="submit" className="thm-btn">
                        Submit Now <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="result"></div>
                </form>
              </div>
            </div>
  
          </div>
        </div>
      </section>
  )
}

export default Contact