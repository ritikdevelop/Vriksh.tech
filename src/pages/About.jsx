import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { ChevronRight } from "lucide-react";
import About from "../components/About";
import Services from "../components/Services";
import Team from "../components/Team";
import Counter from "../components/Counter";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import NewsLetter from "../components/NewsLetter";

const AboutPage = () => {
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
            <h3>About Us</h3>
            <div className="thm-breadcrumb__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <ChevronRight className="chevron" size={16} />
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* About section */}
      <About />
      {/* Services section */}
      <Services />
      {/* Team section */}
      <Team />
      {/* Counter section */}
      <Counter />
      {/* Testimonial section */}
      <Testimonial />
      {/* Blog section */}
      <Blog />
      {/* Newsletter section */}
      <NewsLetter />
    </div>
  );
};

export default AboutPage;
