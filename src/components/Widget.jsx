import React from 'react'
import './Widget.css'
import { Facebook, Linkedin, Mail, MapPin, MoveRight, Phone, Twitter } from 'lucide-react'
const Widget = ({ onClose, sidebarOpen }) => {
  return (
    <div className={`xs-sidebar-group info-group info-sidebar ${sidebarOpen ? 'isActive' : ''}`}>
      <div className="xs-overlay xs-bg-black"></div>
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <a href="#" className="close-side-widget" onClick={onClose}>X</a>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="logo">
                  <a href="index.html"
                    ><img src="images/logo-2.png" alt=""
                  /></a>
                </div>
                <div className="content-box">
                  <h4>About Us</h4>
                  <div className="inner-text">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </div>
                </div>

                <div className="form-inner">
                  <h4>Get a free quote</h4>
                  <form
                    action="assets/inc/sendemail.php"
                    method="POST"
                    className="contact-form-validated"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Message..."
                        required=""
                      ></textarea>
                    </div>
                    <div className="form-group message-btn">
                      <button
                        className="thm-btn"
                        data-text="Submit Now +"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        Submit Now
                        <MoveRight />
                      </button>
                    </div>
                    <div className="result"></div>
                  </form>
                </div>

                <div className="sidebar-contact-info">
                  <h4>Contact Info</h4>
                  <ul className="list-unstyled">
                    <li>
                      <MapPin size={16} /> ABC Building, 123 Street, City
                    </li>
                    <li>
                      <Phone size={16} />
                      <a href="tel:123456789"> +1 555-9990-153</a>
                    </li>
                    <li>
                      <Mail size={16} />
                      <a href="mailto:info@example.com"> info@example.com</a>
                    </li>
                  </ul>
                </div>
                <div className="thm-social-link1">
                  <ul className="social-box list-unstyled">
                    <li>
                      <a href="#"
                        ><Facebook size={16} /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><Twitter size={16} /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><Linkedin size={16} /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widget