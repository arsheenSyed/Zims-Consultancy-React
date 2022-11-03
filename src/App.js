import Home from "./homepage/home";
import "./App.css";
import NavHome from "./navbar/nav";
import Hero from "./Hero-section/Hero";

import styled from "styled-components";
import Hero2 from "./Hero-section/hero2";
import Section2 from "./section2/section2";
import About from "./about/about";
import Footer from "./footer/footer";
import TitleFunc from "./title/title";
import Contact from "./contactUs/contact";
import FooterBottom from "./footerbottom/footerbottom";

function App() {
  return (
    <div className="App">
      <NavHome />
      <Hero2 />
      {/* <TitleFunc
        width="250"
        topTitleColor="blue"
        bottomText={"Lorem Ipsum dolor sit amet"}
        bottomTitleColor={"black"}
      /> */}
      <Section2 />

      <About />

      <Contact />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;
