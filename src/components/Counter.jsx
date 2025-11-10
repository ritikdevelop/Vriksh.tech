import React, { useEffect } from 'react'
import './Counter.css'

const Counter = () => {
  useEffect(() => {
    // Initialize odometer for counters
    if (window.odometer) {
      const countBoxes = document.querySelectorAll('.count-box');
      countBoxes.forEach(box => {
        const countText = box.querySelector('.count-text');
        if (countText) {
          const stopValue = countText.getAttribute('data-stop');
          const speed = countText.getAttribute('data-speed') || 1500;
          const odometer = new window.odometer(countText, {
            duration: speed,
            theme: 'default'
          });
          odometer.update(stopValue);
        }
      });
    }

    // Initialize particles if not already done
    if (window.particlesJS && document.getElementById('particles-js')) {
      window.particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }
  }, []);

  return (
    <section className="counter-one">
        <div
          className="counter-one__bg-shape float-bob-y"
          style={{ backgroundImage: "url(/src/images/counter-one-bg-shape.png)" }}
        ></div>
        <div className="container">
          <div className="row">
          
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-complete"></span>
                </div>
                <div className="counter-one__content count-box">
                  <h3 className="counter-one__count">
                    <span
                      className="count-text"
                      data-stop="1.9"
                      data-speed="1500"
                    ></span
                    >K
                  </h3>
                  <p className="counter-one__text">Project Completed</p>
                </div>
              </div>
            </div>
         
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-costumer"></span>
                </div>
                <div className="counter-one__content count-box">
                  <h3 className="counter-one__count">
                    <span
                      className="count-text"
                      data-stop="25"
                      data-speed="1500"
                    ></span
                    >M
                  </h3>
                  <p className="counter-one__text">Happy Clients Review</p>
                </div>
              </div>
            </div>
          
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-customer"></span>
                </div>
                <div className="counter-one__content count-box">
                  <h3 className="counter-one__count">
                    <span
                      className="count-text"
                      data-stop="350"
                      data-speed="1500"
                    ></span
                    >+
                  </h3>
                  <p className="counter-one__text">Expert Team Members</p>
                </div>
              </div>
            </div>
          
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="400ms"
            >
              <div className="counter-one__single">
                <div className="counter-one__icon">
                  <span className="icon-trophy"></span>
                </div>
                <div className="counter-one__content count-box">
                  <h3 className="counter-one__count">
                    <span
                      className="count-text"
                      data-stop="458"
                      data-speed="1500"
                    ></span
                    >+
                  </h3>
                  <p className="counter-one__text">Creative Plus award</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div id="particles-js"></div>
      </section>
  )
}

export default Counter