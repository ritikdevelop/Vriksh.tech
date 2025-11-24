import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import PreLoader from "./components/PreLoader";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import UiUxDesign from "./pages/UiUxDesign";
import AppDevelopment from "./pages/AppDevelopment";
import ProductDesign from "./pages/ProductDesign";
import WebsiteDesign from "./pages/WebsiteDesign";
import BusinessAnalysis from "./pages/BusinessAnalysis";
import WebDevelopment from "./pages/WebDevelopment";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DigitalMarketing from "./pages/DigitalMarketing";
import BackToTop from "./components/BacktoTop";

const App = () => {
  return (
    <div>
      <CustomCursor />
      {/* <PreLoader /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/product-design" element={<ProductDesign />} />
        <Route path="/services/website-design" element={<WebsiteDesign />} />
        <Route
          path="/services/business-analysis"
          element={<BusinessAnalysis />}
        />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chat />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
