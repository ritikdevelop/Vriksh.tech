import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Twitter,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import Widget from "./Widget";
import logo from "../images/logo-1.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${sticky ? "is-sticky" : ""}`}>
        <div className="main-menu__top">
          <div className="main-menu__top-inner">
            <ul className="main-menu__contact-list">
              <li>
                <div className="icon">
                  <Mail className="text-white" />
                </div>
                <div className="text">
                  <p>
                    <Link href="mailto:info@Itzone24.com">
                      info@Itzone24.com
                    </Link>
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <MapPin className="text-white" />
                </div>
                <div className="text">
                  <p>ABC Building, 123 Street, City, Country</p>
                </div>
              </li>
            </ul>

            <div className="main-menu__top-right">
              <p className="main-menu__social-title">Follow Us On:</p>
              <div className="main-menu__social">
                <Link href="#">
                  <Twitter size={16} />
                </Link>
                <Link href="#">
                  <Facebook size={16} />
                </Link>

                <Link href="#">
                  <Instagram size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>

              <div
                className={`main-menu__main-menu-box ${
                  mobileOpen ? "open" : ""
                }`}
              >
                <button
                  aria-label="Toggle mobile menu"
                  className="mobile-nav__toggler"
                  onClick={() => setMobileOpen(!mobileOpen)}
                ></button>

                <ul className="main-menu__list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link className="arrow" to="/services">
                      Services <ChevronDown size={18} />
                    </Link>
                    <ul className="shadow-box">
                      <li>
                        <Link to="/ui-ux-design">UI/UX Design</Link>
                      </li>
                      <li>
                        <Link to="/web-development">Web Development</Link>
                      </li>
                      <li>
                        <Link to="/digital-marketing">Digital Marketing</Link>
                      </li>
                      <li>
                        <Link to="/business-analysis">Business Analysis</Link>
                      </li>
                      <li>
                        <Link to="/software-development">
                          Software Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-design">Product Design</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__nav-sidebar-icon">
                  <Link
                    className="navSidebar-button"
                    to="#"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                  >
                    <span className="icon-dots-menu-one"></span>
                    <span className="icon-dots-menu-two"></span>
                    <span className="icon-dots-menu-three"></span>
                  </Link>
                </div>
                <div className="main-menu__btn-box">
                  <Link to="/about" className="thm-btn">
                    Discover More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className={`stricky-header ${sticky ? "visible" : ""}`}>
        <div className="sticky-header__content" />
      </div>

      <Widget onClose={() => setSidebarOpen(false)} sidebarOpen={sidebarOpen} />
    </>
  );
};

export default Header;
