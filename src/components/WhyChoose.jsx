import React, { useEffect } from "react";
import './WhyChoose.css'
import { ArrowRight } from 'lucide-react'
const WhyChoose = () => {
  useEffect(() => {
    // Initialize progress bars
    if (window.jQuery && window.jQuery.fn.appear) {
      const bars = document.querySelectorAll('.count-bar');
      bars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        const countText = bar.querySelector('.count-text');
        if (countText) {
          window.jQuery(bar).appear(function() {
            window.jQuery(bar).animate({
              width: percent
            }, 2000);
            let count = 0;
            const target = parseInt(percent);
            const interval = setInterval(() => {
              if (count >= target) {
                clearInterval(interval);
              } else {
                count++;
                countText.textContent = count + '%';
              }
            }, 20);
          });
        }
      });
    }

    // Initialize odometer for client count
    if (window.odometer) {
      const odometerElement = document.querySelector('.odometer');
      if (odometerElement) {
        const count = odometerElement.getAttribute('data-count');
        const odometer = new window.odometer(odometerElement, {
          duration: 1500,
          theme: 'default'
        });
        odometer.update(count);
      }
    }
  }, []);

  return (
    <section className="why-choose-one">
      <div
        className="why-choose-one__bg-shape-1"
        style={{ backgroundImage: "url(/src/images/why-choose-one-bg-shape-1.png)" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="why-choose-one__left">
              <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">WHY CHOOSE US</span>
                </div>
                <h2 className="section-title__title title-animation">
                  Elevate Growth With Our IT Solutions
                  <span> For Success.</span>
                </h2>
              </div>
              <p className="why-choose-one__text">
                Innovating and empowering businesses with tailored solutions for
                success
                <br />
                and growth. Innovating and empowering
              </p>
              <div className="why-choose-one__progress-box">
                <ul className="why-choose-one__progress-list list-unstyled">
                  <li>
                    <div className="why-choose-one__progress">
                      <h4 className="why-choose-one__progress-title">
                        Business Grow
                      </h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="90%">
                          <div className="count-text">90%</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="why-choose-one__progress">
                      <h4 className="why-choose-one__progress-title">
                        Quality Products
                      </h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="85%">
                          <div className="count-text">85%</div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="why-choose-one__progress">
                      <h4 className="why-choose-one__progress-title">
                        Innovation Design
                      </h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="96%">
                          <div className="count-text">96%</div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="why-choose-one__btn-and-call-box">
                <div className="why-choose-one__btn-box">
                  <a href="about.html" className="thm-btn">
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </div>
                <div className="why-choose-one__call-box">
                  <div className="why-choose-one__call-icon">
                    <span className="icon-call"></span>
                  </div>
                  <div className="why-choose-one__call-content">
                    <p>Call Us Any Time</p>
                    <h5>
                      <a href="tel:0882466422710">+088 (246) 642-27-10</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="why-choose-one__right wow slideInRight"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="why-choose-one__img-box">
                <div className="why-choose-one__img">
                  <img src="/src/images/why-choose-one-img-1.jpg" alt="" />
                </div>
                <div className="why-choose-one__img-2">
                  <img src="/src/images/why-choose-one-img-2.jpg" alt="" />
                </div>
                <div className="why-choose-one__shape-1 rotate-me"></div>
                <div className="why-choose-one__cstomer-services">
                  <div
                    className="why-choose-one__cstomer-services-bg float-bob-x"
                    style={{ backgroundImage: "url(/src/images/why-choose-one-cstomer-services-bg-shape.png)" }}
                  ></div>
                  <h4>24/7 Customer Service</h4>
                </div>
                <div className="why-choose-one__client-active">
                  <div className="why-choose-one__client-count-box">
                    <h3 className="odometer" data-count="13">
                      00
                    </h3>
                    <span>K</span>
                    <span>+</span>
                  </div>
                  <p className="why-choose-one__client-text">Active Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
