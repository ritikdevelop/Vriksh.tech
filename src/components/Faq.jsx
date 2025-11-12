import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="faq-one">
        <div className="faq-one__shape-2 float-bob-y">
          <img src="images/faq-one-shape-2.png" alt="" />
        </div>
        <div className="faq-one__shape-3 float-bob">
          <img src="images/faq-one-shape-3.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one__left">
                <div className="section-title text-left sec-title-animation animation-style2">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">
                      Frequently Ask Question
                    </span>
                  </div>
                  <h2 className="section-title__title title-animation">
                    Have Questions in <span>Your Mind?</span> Get the Answers
                    Now
                  </h2>
                </div>
                <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>How long should a business plan be</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          From personalized solutions to expert execution, we
                          prioritize quality, reliability, and customer
                          satisfaction in everything we do. Let us be your
                          trusted partner in achieving success.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion active">
                    <div className="accrodion-title">
                      <h4>Do I need a business plan?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          From personalized solutions to expert execution, we
                          prioritize quality, reliability, and customer
                          satisfaction in everything we do. Let us be your
                          trusted partner in achieving success.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>How to Soft Launch Your Business?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          From personalized solutions to expert execution, we
                          prioritize quality, reliability, and customer
                          satisfaction in everything we do. Let us be your
                          trusted partner in achieving success.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accrodion">
                    <div className="accrodion-title">
                      <h4>How Can I Find My Solution?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          From personalized solutions to expert execution, we
                          prioritize quality, reliability, and customer
                          satisfaction in everything we do. Let us be your
                          trusted partner in achieving success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="faq-one__right wow slideInRight"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="faq-one__img-box">
                  <div className="faq-one__shape-1 float-bob-y">
                    <img src="/src/images/faq-one-shape-1.png" alt="" />
                  </div>
                  <div className="faq-one__experience-box">
                    <div className="faq-one__experience-year">
                      <h2 className="odometer" data-count="55">
                        00
                      </h2>
                    </div>
                    <p className="faq-one__experience-text">
                      Year of <br />
                      experience
                    </p>
                  </div>
                  <div className="faq-one__img">
                    <img src="/src/images/faq-one-img-1.jpg" alt="" />
                  </div>
                  <div className="faq-one__img-2">
                    <img src="/src/images/faq-one-img-2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Faq;
