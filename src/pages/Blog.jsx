import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import NewsLetter from "../components/NewsLetter";

const Blog = () => {
  return (
    <div> 
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(/src/images/page-header-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h3>Blog</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <ChevronRight className="chevron" size={16} />
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blog page */}
      <section className="blog-page">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="/src/images/blog-2-1.jpg" alt="" />
                  <div className="blog-one__tags">
                    <span>Digital</span>
                    <span>Technology</span>
                  </div>
                </div>
                <div className="blog-one__content">
                  <div className="blog-one__user">
                    <div className="blog-one__user-img">
                      <img src="/src/images/blog-one-user-1.jpg" alt="" />
                    </div>
                    <p className="blog-one__user-title">Malaika alise</p>
                  </div>
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="blog-details.html"
                        ><span className="far fa-calendar-alt"></span>April 5,
                        2025</a
                      >
                    </li>
                    <li>
                      <a href="blog-details.html"
                        ><span className="fal fa-comments"></span>80 Comments</a
                      >
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="blog-details.html"
                      >Improving Business Growth with New Technology</a
                    >
                  </h3>
                  <div className="blog-one__btn-box">
                    <a href="blog-details.html" className="thm-btn"
                      >Read More
                      <ChevronRight className="fas fa-arrow-right" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="/src/images/blog-2-2.jpg" alt="" />
                  <div className="blog-one__tags">
                    <span>Digital</span>
                    <span>Technology</span>
                  </div>
                </div>
                <div className="blog-one__content">
                  <div className="blog-one__user">
                    <div className="blog-one__user-img">
                      <img src="/src/images/blog-one-user-2.jpg" alt="" />
                    </div>
                    <p className="blog-one__user-title">Readik males</p>
                  </div>
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="blog-details.html"
                        ><span className="far fa-calendar-alt"></span>April 5,
                        2025</a
                      >
                    </li>
                    <li>
                      <a href="blog-details.html"
                        ><span className="fal fa-comments"></span>80 Comments</a
                      >
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="blog-details.html"
                      >Regional Manager & limited management.</a
                    >
                  </h3>
                  <div className="blog-one__btn-box">
                    <a href="blog-details.html" className="thm-btn"
                      >Read More
                      <ChevronRight className="fas fa-arrow-right" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="/src/images/blog-2-3.jpg" alt="" />
                  <div className="blog-one__tags">
                    <span>Digital</span>
                    <span>Technology</span>
                  </div>
                </div>
                <div className="blog-one__content">
                  <div className="blog-one__user">
                    <div className="blog-one__user-img">
                      <img src="/src/images/blog-one-user-3.jpg" alt="" />
                    </div>
                    <p className="blog-one__user-title">Tamu Tanu</p>
                  </div>
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="blog-details.html"
                        ><span className="far fa-calendar-alt"></span>April 5,
                        2025</a
                      >
                    </li>
                    <li>
                      <a href="blog-details.html"
                        ><span className="fal fa-comments"></span>80 Comments</a
                      >
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="blog-details.html"
                      >Easy and Most Powerful Server and Platform.</a
                    >
                  </h3>
                  <div className="blog-one__btn-box">
                    <a href="blog-details.html" className="thm-btn"
                      >Read More
                     <ChevronRight className="fas fa-arrow-right" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft"
              data-wow-delay="400ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="/src/images/blog-2-4.jpg" alt="" />
                  <div className="blog-one__tags">
                    <span>Digital</span>
                    <span>Technology</span>
                  </div>
                </div>
                <div className="blog-one__content">
                  <div className="blog-one__user">
                    <div className="blog-one__user-img">
                      <img src="/src/images/blog-one-user-4.jpg" alt="" />
                    </div>
                    <p className="blog-one__user-title">Hardik Pandey</p>
                  </div>
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="blog-details.html"
                        ><span className="far fa-calendar-alt"></span>Aug 9, 2025</a
                      >
                    </li>
                    <li>
                      <a href="blog-details.html"
                        ><span className="fal fa-comments"></span>80 Comments</a
                      >
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="blog-details.html"
                      >Improving Business Growth with New Technology</a
                    >
                  </h3>
                  <div className="blog-one__btn-box">
                    <a href="blog-details.html" className="thm-btn"
                      >Read More
                     <ChevronRight className="fas fa-arrow-right" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="/src/images/blog-2-5.jpg" alt="" />
                  <div className="blog-one__tags">
                    <span>Digital</span>
                    <span>Technology</span>
                  </div>
                </div>
                <div className="blog-one__content">
                  <div className="blog-one__user">
                    <div className="blog-one__user-img">
                      <img src="/src/images/blog-one-user-5.jpg" alt="" />
                    </div>
                    <p className="blog-one__user-title">Ronalfi Kenis</p>
                  </div>
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="blog-details.html"
                        ><span className="far fa-calendar-alt"></span>may 14,
                        2025</a
                      >
                    </li>
                    <li>
                      <a href="blog-details.html"
                        ><span className="fal fa-comments"></span>80 Comments</a
                      >
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="blog-details.html"
                      >The Role of AI in IT Support and Security</a
                    >
                  </h3>
                  <div className="blog-one__btn-box">
                    <a href="blog-details.html" className="thm-btn"
                      >Read More
                     <ChevronRight className="fas fa-arrow-right" size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img">
                  <img src="/src/images/blog-2-6.jpg" alt="" />
                  <div className="blog-one__tags">
                    <span>Digital</span>
                    <span>Technology</span>
                  </div>
                </div>
                <div className="blog-one__content">
                  <div className="blog-one__user">
                    <div className="blog-one__user-img">
                      <img src="/src/images/blog-one-user-6.jpg" alt="" />
                    </div>
                    <p className="blog-one__user-title">Tapila Gos</p>
                  </div>
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="blog-details.html"
                        ><span className="far fa-calendar-alt"></span>January 15,
                        2025</a
                      >
                    </li>         
                    <li>
                      <a href="blog-details.html"
                        ><span className="fal fa-comments"></span>80 Comments</a
                      >
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <a href="blog-details.html"
                      >Cloud vs. On-Premise Is Right for You?</a
                    >
                  </h3>
                  <div className="blog-one__btn-box">
                    <a href="blog-details.html" className="thm-btn"
                      >Read More
                      <ChevronRight className="fas fa-arrow-right" size={16} />
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="blog-list__pagination">
              <ul className="pg-pagination list-unstyled">
                <li className="count active"><a href="#">1</a></li>
                <li className="count"><a href="#">2</a></li>
                <li className="count"><a href="#">3</a></li>
                <li className="next">
                  <a href="#" aria-label="Next"
                    >
                      <ChevronRight className="fas fa-angle-right" size={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <NewsLetter />
    </div>
  );
};

export default Blog;
