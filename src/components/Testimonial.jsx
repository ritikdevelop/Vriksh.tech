import React, { useEffect } from 'react'
import './Testimonial.css'

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
    <section class="testimonial-one">
        <div class="testimonial-one__bg-color">
          <div
            class="testimonial-one__bg"
            style={{backgroundImage: "url(/src/images/testimonial-one-bg.jpg)"}}
          ></div>
        </div>
        <div class="container">
          <div
            class="section-title text-center sec-title-animation animation-style1"
          >
            <div class="section-title__tagline-box">
              <span class="section-title__tagline">Testimonials </span>
            </div>
            <h2 class="section-title__title title-animation">
              What Client Say <span>About </span>us
            </h2>
          </div>
          <div class="testimonial-one__carousel owl-theme owl-carousel">
         
            <div class="item">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-shape-1"></div>
                  <div class="testimonial-one__star">
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <p class="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-1.jpg" alt="" />
                  </div>
                  <div class="testimonial-one__client-content">
                    <h4 class="testimonial-one__client-name">
                      <a href="testimonials.html">Thomas Alison</a>
                    </h4>
                    <p class="testimonial-one__sub-title">UI/UX Designer</p>
                  </div>
                </div>
                <div class="testimonial-one__quote">
                  <span class="fal fa-quote-right"></span>
                </div>
              </div>
            </div>
           
            <div class="item">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-shape-1"></div>
                  <div class="testimonial-one__star">
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <p class="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-2.jpg" alt="" />
                  </div>
                  <div class="testimonial-one__client-content">
                    <h4 class="testimonial-one__client-name">
                      <a href="testimonials.html">Sarah Williams</a>
                    </h4>
                    <p class="testimonial-one__sub-title">Marketing Manger</p>
                  </div>
                </div>
                <div class="testimonial-one__quote">
                  <span class="fal fa-quote-right"></span>
                </div>
              </div>
            </div>
     
            <div class="item">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-shape-1"></div>
                  <div class="testimonial-one__star">
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <p class="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-3.jpg" alt="" />
                  </div>
                  <div class="testimonial-one__client-content">
                    <h4 class="testimonial-one__client-name">
                      <a href="testimonials.html">James Anderson</a>
                    </h4>
                    <p class="testimonial-one__sub-title">CEO at Anaton</p>
                  </div>
                </div>
                <div class="testimonial-one__quote">
                  <span class="fal fa-quote-right"></span>
                </div>
              </div>
            </div>
         
            <div class="item">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-shape-1"></div>
                  <div class="testimonial-one__star">
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <p class="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-1.jpg" alt="" />
                  </div>
                  <div class="testimonial-one__client-content">
                    <h4 class="testimonial-one__client-name">
                      <a href="testimonials.html">Thomas Alison</a>
                    </h4>
                    <p class="testimonial-one__sub-title">UI/UX Designer</p>
                  </div>
                </div>
                <div class="testimonial-one__quote">
                  <span class="fal fa-quote-right"></span>
                </div>
              </div>
            </div>
         
            <div class="item">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-shape-1"></div>
                  <div class="testimonial-one__star">
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <p class="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-2.jpg" alt="" />
                  </div>
                  <div class="testimonial-one__client-content">
                    <h4 class="testimonial-one__client-name">
                      <a href="testimonials.html">Sarah Williams</a>
                    </h4>
                    <p class="testimonial-one__sub-title">Marketing Manger</p>
                  </div>
                </div>
                <div class="testimonial-one__quote">
                  <span class="fal fa-quote-right"></span>
                </div>
              </div>
            </div>
         
            <div class="item">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-shape-1"></div>
                  <div class="testimonial-one__star">
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <p class="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-3.jpg" alt="" />
                  </div>
                  <div class="testimonial-one__client-content">
                    <h4 class="testimonial-one__client-name">
                      <a href="testimonials.html">James Anderson</a>
                    </h4>
                    <p class="testimonial-one__sub-title">CEO at Anaton</p>
                  </div>
                </div>
                <div class="testimonial-one__quote">
                  <span class="fal fa-quote-right"></span>
                </div>
              </div>
            </div>
          
            <div class="item">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-shape-1"></div>
                  <div class="testimonial-one__star">
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <p class="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-1.jpg" alt="" />
                  </div>
                  <div class="testimonial-one__client-content">
                    <h4 class="testimonial-one__client-name">
                      <a href="testimonials.html">Thomas Alison</a>
                    </h4>
                    <p class="testimonial-one__sub-title">UI/UX Designer</p>
                  </div>
                </div>
                <div class="testimonial-one__quote">
                  <span class="fal fa-quote-right"></span>
                </div>
              </div>
            </div>
        
            <div class="item">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-shape-1"></div>
                  <div class="testimonial-one__star">
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <p class="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-2.jpg" alt="" />
                  </div>
                  <div class="testimonial-one__client-content">
                    <h4 class="testimonial-one__client-name">
                      <a href="testimonials.html">Sarah Williams</a>
                    </h4>
                    <p class="testimonial-one__sub-title">Marketing Manger</p>
                  </div>
                </div>
                <div class="testimonial-one__quote">
                  <span class="fal fa-quote-right"></span>
                </div>
              </div>
            </div>
          
            <div class="item">
              <div class="testimonial-one__single">
                <div class="testimonial-one__single-inner">
                  <div class="testimonial-one__single-shape-1"></div>
                  <div class="testimonial-one__star">
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star-1"></span>
                    <span class="icon-star"></span>
                    <span class="icon-star"></span>
                  </div>
                  <p class="testimonial-one__text">
                    Absolutely fantastic experience! The team exceeded our
                    expectations and delivered a solution that perfectly met our
                    needs. Their attention to detail and commitment to quality
                    is unmatched.
                  </p>
                </div>
                <div class="testimonial-one__client-info">
                  <div class="testimonial-one__client-img">
                    <img src="/src/images/testimonial-1-3.jpg" alt="" />
                  </div>
                  <div class="testimonial-one__client-content">
                    <h4 class="testimonial-one__client-name">
                      <a href="testimonials.html">James Anderson</a>
                    </h4>
                    <p class="testimonial-one__sub-title">CEO at Anaton</p>
                  </div>
                </div>
                <div class="testimonial-one__quote">
                  <span class="fal fa-quote-right"></span>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </section>
  )
}

export default Testimonial