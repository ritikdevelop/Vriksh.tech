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
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";


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
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chat />
      <Footer />

    </div>
  );
};

export default App;
