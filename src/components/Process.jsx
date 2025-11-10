import React from "react";
import "./Process.css";

const Process = () => {
  return (
    <section className="process-one">
      <div className="process-one__shape-1"></div>
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Working Process</span>
          </div>
          <h2 className="section-title__title title-animation">
            How To Work <span>It</span>
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay="100ms"
          >
            <div className="process-one__single-inner">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-complete"></span>
                </div>
                <h3 className="process-one__title">Choose a project</h3>
                <p className="process-one__text">
                  Once the strategy is in place, we move to designing and
                  developing your vision.
                </p>
              </div>
              <div className="process-one__count"></div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay="200ms"
          >
            <div className="process-one__single-inner">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-social-media-marketing"></span>
                </div>
                <h3 className="process-one__title">Project analysis</h3>
                <p className="process-one__text">
                  Once the strategy is in place, we move to designing and
                  developing your vision.
                </p>
              </div>
              <div className="process-one__count"></div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="process-one__single-inner">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-execution"></span>
                </div>
                <h3 className="process-one__title">Plan Execute</h3>
                <p className="process-one__text">
                  Once the strategy is in place, we move to designing and
                  developing your vision.
                </p>
              </div>
              <div className="process-one__count"></div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
            data-wow-delay="400ms"
          >
            <div className="process-one__single-inner">
              <div className="process-one__single">
                <div className="process-one__icon">
                  <span className="icon-results"></span>
                </div>
                <h3 className="process-one__title">Deliver result</h3>
                <p className="process-one__text">
                  Once the strategy is in place, we move to designing and
                  developing your vision.
                </p>
              </div>
              <div className="process-one__count"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
