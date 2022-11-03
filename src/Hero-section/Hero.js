import React from "react";
import "./Hero.css";
import Container from "react-bootstrap/Container";
import heroImg from "../assets/hero.png";
import heroImg2 from "../assets/hero2.jpg";
import Title from "../title/title";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="txt pt-5">
          <Title color={"green"} text={"we want to see you succeed"} />
          <h1 className="title-font-sanSerif">Hello</h1>
        </div>
        <div className="img">
          <img src={heroImg} />
        </div>
      </div>

      {/* <div className="skewed">
        <div className="text"> title and text here </div>
        <div className="image">
          <div>
            <img src={heroImg} />
          </div>
        </div>
      </div> */}
    </div>
  );
}

//     <div className="Hero">
{
  /* <div className="content">
<Container>
  <h1>Hello</h1>
</Container>
</div>
<div className="img">{/* <img src={heroImg} /> </div>
</div> */
}

{
  /* <div className="skewed skewed-left">
<div className="image">
  <img src={heroImg2} />
</div>
</div>

<div className="text">
<small>Lorem Ipsum</small>
<h1>City Skyline</h1>
<p>Lorem ipsum color sit amet </p>
<a href="#">Read More</a>
</div> */
}
