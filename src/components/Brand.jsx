import React, { useEffect } from 'react'
import './Brand.css'

const Brand = () => {
  useEffect(() => {
    if (window.$ && window.$.fn.owlCarousel) {
      $('.brand-one__carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: [
          '<span class="icon-left-arrow"></span>',
          '<span class="icon-next"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          540: {
            items: 2,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 4,
          },
          1320: {
            items: 5,
          },
        },
      });
    }
  }, []);
  return (
     <section className="brand-one">
        <div className="container">
          <div className="brand-one__inner">
            <div className="brand-one__carousel owl-theme owl-carousel">
              <div className="item">
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="/src/images/brand-1-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="/src/images/brand-1-2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="/src/images/brand-1-3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="/src/images/brand-1-4.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="/src/images/brand-1-5.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Brand