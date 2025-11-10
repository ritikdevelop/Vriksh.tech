import React from "react";
import "./Portfolio.css";
import project1 from "../images/project-1-1.jpg";
import project2 from "../images/project-1-2.jpg";
import project3 from "../images/project-1-3.jpg";
import project4 from "../images/project-1-4.jpg";

const Portfolio = () => {
  return (
    <section className="project-one">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="section-title__tagline">Portfolio</span>
          </div>
          <h2 className="section-title__title title-animation">
            Explore Our Recent
            <span>Projects</span>
          </h2>
        </div>
        <div className="project-one__carousel-container">
          <div className="project-one__carousel owl-carousel owl-theme">
            <div className="item">
              <div className="project-one__single-box">
                <ul className="project-one__box list-unstyled">
                  <li>
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project1})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Innovative Solutions,
                            <br />
                            Powerful Results
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project1}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Innovative Solutions,
                              <br />
                              Powerful Results
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="active">
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project2})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Transforming Ideas Into
                            <br />
                            Digital Excellence
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project2}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Transforming Ideas Into Digital Excellence
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project3})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Driving Success Through
                            <br />
                            Technology
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project3}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Driving Success Through Technology
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project4})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Empowering Businesses
                            <br />
                            with Cutting-Edge IT
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project4}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Empowering Businesses with Cutting-Edge IT
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="project-one__single-box">
                <ul className="project-one__box list-unstyled">
                  <li>
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project1})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Innovative Solutions,
                            <br />
                            Powerful Results
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project1}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Innovative Solutions,
                              <br />
                              Powerful Results
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="active">
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project2})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Transforming Ideas Into
                            <br />
                            Digital Excellence
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project2}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Transforming Ideas Into Digital Excellence
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project3})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Driving Success Through
                            <br />
                            Technology
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project3}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Driving Success Through Technology
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project4})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Empowering Businesses
                            <br />
                            with Cutting-Edge IT
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project4}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Empowering Businesses with Cutting-Edge IT
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div className="project-one__single-box">
                <ul className="project-one__box list-unstyled">
                  <li>
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project1})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Innovative Solutions,
                            <br />
                            Powerful Results
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project1}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Innovative Solutions,
                              <br />
                              Powerful Results
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="active">
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project2})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Transforming Ideas Into
                            <br />
                            Digital Excellence
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project2}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Transforming Ideas Into Digital Excellence
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project3})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Driving Success Through
                            <br />
                            Technology
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project3}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Driving Success Through Technology
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="project-one__box-content">
                      <div
                        className="single-project-one__bg"
                        style={{ backgroundImage: `url(${project4})` }}
                      ></div>
                      <div className="project-one__title">
                        <h3>
                          <a href="project-details.html">
                            Empowering Businesses
                            <br />
                            with Cutting-Edge IT
                          </a>
                        </h3>
                      </div>
                      <div className="project-one__content-box">
                        <div className="project-one__icon">
                          <a
                            href={project4}
                            className="img-popup"
                          >
                            <span className="icon-right-arrow"></span>
                          </a>
                        </div>
                        <div className="project-one__title-box">
                          <h3 className="project-one__title-2">
                            <a href="project-details.html">
                              Empowering Businesses with Cutting-Edge IT
                            </a>
                          </h3>
                          <p className="project-one__text">
                            Explore How We've Empowered Businesses with
                            Innovative Tech Solutions
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
