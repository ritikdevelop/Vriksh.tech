import React, { useEffect } from 'react'
import './Testimonial.css'
import { Quote } from 'lucide-react'

const Testimonial = () => {
  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      $('.testimonial-one__carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      });
    }
  }, []);

  return (
    <section className="testimonial-one">
        <div className="testimonial-one__bg-color">
          <div
            className="testimonial-one__bg"
            style={{backgroundImage: "url(/src/images/testimonial-one-bg.jpg)"}}
          ></div>
        </div>
        <div className="container">
          <div
            className="section-title text-center sec-title-animation animation-style1"
          >
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Testimonials </span>
            </div>
            <h2 className="section-title__title title-animation">
              What Client Say <span>About </span>us
            </h2>
          </div>
          <div className="testimonial-one__carousel owl-theme owl-carousel">

            <div className="item">
              <div className="testimonial-one__single">
                <div className="testimonial-one__single-inner">
                  <div className="testimonial-one__single-shape-1"></div>
                  <div className="testimonial-one__star">
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                  <p className="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div className="testimonial-one__client-info">
                  <div className="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-1.jpg" alt="" />
                  </div>
                  <div className="testimonial-one__client-content">
                    <h4 className="testimonial-one__client-name">
                      <a href="testimonials.html">Thomas Alison</a>
                    </h4>
                    <p className="testimonial-one__sub-title">UI/UX Designer</p>
                  </div>
                </div>
                <div className="testimonial-one__quote">
                  <Quote size={16} />
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial-one__single">
                <div className="testimonial-one__single-inner">
                  <div className="testimonial-one__single-shape-1"></div>
                  <div className="testimonial-one__star">
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                  <p className="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div className="testimonial-one__client-info">
                  <div className="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-2.jpg" alt="" />
                  </div>
                  <div className="testimonial-one__client-content">
                    <h4 className="testimonial-one__client-name">
                      <a href="testimonials.html">Sarah Williams</a>
                    </h4>
                    <p className="testimonial-one__sub-title">Marketing Manger</p>
                  </div>
                </div>
                <div className="testimonial-one__quote">
                  <Quote size={16} />
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial-one__single">
                <div className="testimonial-one__single-inner">
                  <div className="testimonial-one__single-shape-1"></div>
                  <div className="testimonial-one__star">
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                  <p className="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div className="testimonial-one__client-info">
                  <div className="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-3.jpg" alt="" />
                  </div>
                  <div className="testimonial-one__client-content">
                    <h4 className="testimonial-one__client-name">
                      <a href="testimonials.html">James Anderson</a>
                    </h4>
                    <p className="testimonial-one__sub-title">CEO at Anaton</p>
                  </div>
                </div>
                <div className="testimonial-one__quote">
                  <Quote size={16} />
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial-one__single">
                <div className="testimonial-one__single-inner">
                  <div className="testimonial-one__single-shape-1"></div>
                  <div className="testimonial-one__star">
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                  <p className="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div className="testimonial-one__client-info">
                  <div className="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-1.jpg" alt="" />
                  </div>
                  <div className="testimonial-one__client-content">
                    <h4 className="testimonial-one__client-name">
                      <a href="testimonials.html">Thomas Alison</a>
                    </h4>
                    <p className="testimonial-one__sub-title">UI/UX Designer</p>
                  </div>
                </div>
                <div className="testimonial-one__quote">
                  <Quote size={16} />
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial-one__single">
                <div className="testimonial-one__single-inner">
                  <div className="testimonial-one__single-shape-1"></div>
                  <div className="testimonial-one__star">
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                  <p className="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div className="testimonial-one__client-info">
                  <div className="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-2.jpg" alt="" />
                  </div>
                  <div className="testimonial-one__client-content">
                    <h4 className="testimonial-one__client-name">
                      <a href="testimonials.html">Sarah Williams</a>
                    </h4>
                    <p className="testimonial-one__sub-title">Marketing Manger</p>
                  </div>
                </div>
                <div className="testimonial-one__quote">
                  <Quote size={16} />
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial-one__single">
                <div className="testimonial-one__single-inner">
                  <div className="testimonial-one__single-shape-1"></div>
                  <div className="testimonial-one__star">
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                  <p className="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div className="testimonial-one__client-info">
                  <div className="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-3.jpg" alt="" />
                  </div>
                  <div className="testimonial-one__client-content">
                    <h4 className="testimonial-one__client-name">
                      <a href="testimonials.html">James Anderson</a>
                    </h4>
                    <p className="testimonial-one__sub-title">CEO at Anaton</p>
                  </div>
                </div>
                <div className="testimonial-one__quote">
                  <Quote size={16} />
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial-one__single">
                <div className="testimonial-one__single-inner">
                  <div className="testimonial-one__single-shape-1"></div>
                  <div className="testimonial-one__star">
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                  <p className="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div className="testimonial-one__client-info">
                  <div className="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-1.jpg" alt="" />
                  </div>
                  <div className="testimonial-one__client-content">
                    <h4 className="testimonial-one__client-name">
                      <a href="testimonials.html">Thomas Alison</a>
                    </h4>
                    <p className="testimonial-one__sub-title">UI/UX Designer</p>
                  </div>
                </div>
                <div className="testimonial-one__quote">
                  <Quote size={16} />
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial-one__single">
                <div className="testimonial-one__single-inner">
                  <div className="testimonial-one__single-shape-1"></div>
                  <div className="testimonial-one__star">
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                  <p className="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div className="testimonial-one__client-info">
                  <div className="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-2.jpg" alt="" />
                  </div>
                  <div className="testimonial-one__client-content">
                    <h4 className="testimonial-one__client-name">
                      <a href="testimonials.html">Sarah Williams</a>
                    </h4>
                    <p className="testimonial-one__sub-title">Marketing Manger</p>
                  </div>
                </div>
                <div className="testimonial-one__quote">
                  <Quote size={16} />
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial-one__single">
                <div className="testimonial-one__single-inner">
                  <div className="testimonial-one__single-shape-1"></div>
                  <div className="testimonial-one__star">
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star-1"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                  </div>
                  <p className="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div className="testimonial-one__client-info">
                  <div className="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-3.jpg" alt="" />
                  </div>
                  <div className="testimonial-one__client-content">
                    <h4 className="testimonial-one__client-name">
                      <a href="testimonials.html">James Anderson</a>
                    </h4>
                    <p className="testimonial-one__sub-title">CEO at Anaton</p>
                  </div>
                </div>
                <div className="testimonial-one__quote">
                  <Quote size={16} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Testimonial