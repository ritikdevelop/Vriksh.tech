import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose.jsx";
import Process from "../components/Process.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Counter from "../components/Counter.jsx";
import Team from "../components/Team.jsx";
import Brand from "../components/Brand.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Contact from "../components/Contact.jsx";
import Faq from "../components/Faq.jsx";
import Blog from "../components/Blog.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import Banner from "../components/Banner.jsx";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <Portfolio />
      <Counter />
      <Team />
      <Brand />
      <Testimonial />
      <Contact />
      {/* <Faq /> */}
      <Blog />
      <NewsLetter />
    </div>
  );
};

export default Home;
