import React from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Header from "./components/Hero/Header";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Specials from "./components/Specials/Specials";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Header />
        <Specials />
        <Testimonials />
        <About />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
