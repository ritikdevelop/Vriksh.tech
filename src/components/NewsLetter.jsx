import React, { useEffect } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {

  useEffect(() => {
    // Initialize particles.js for the newsletter section
    if (window.particlesJS) {
      window.particlesJS("particles-js-two", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
          modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
      });
    }

    // Initialize form validation using jQuery Validate
    if (window.$ && window.$.fn.validate) {
      window.$(".newsletter-one__form").validate({
        rules: {
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          email: {
            required: "Please enter your email address",
            email: "Please enter a valid email address"
          }
        },
        submitHandler: function(form) {
          // Handle form submission (e.g., AJAX call)
          alert("Thank you for subscribing!");
          form.reset();
        }
      });
    }
  }, []);

  return (
    <section className="newsletter-one">
      <div className="container">
        <div className="newsletter-one__inner">
          <div className="newsletter-one__left">
            <h2 className="newsletter-one__title">
              Subcribe to Our Newsletter
            </h2>
            <p className="newsletter-one__text">
              Get the latest SEO tips and software insights straight to your
              inbox.
            </p>
          </div>
          <div className="newsletter-one__right">
            <form className="newsletter-one__form">
              <div className="newsletter-one__input">
                <input type="email" name="email" placeholder="Enter email address" />
              </div>
              <button type="submit" className="thm-btn">
                Subscribe Now <span className="fas fa-arrow-right"></span>
              </button>
              <div className="checked-box">
                <input
                  type="checkbox"
                  name="skipper1"
                  id="skipper"
                  checked=""
                />
                <label for="skipper">
                  <span></span>by Subscribing. Your Accept Privacy policy
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="particles-js-two"></div>
    </section>
  );
};

export default NewsLetter;
