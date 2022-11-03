import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TitleFunc from "../title/title";
// import HeroImg from "../assests/heropage2.jpg";
import LargeImg from "../assets/heroImageNew.png";
export default function Hero2() {
  return (
    <div className="hero2-outer">
      <div className="hero2-wrapper">
        <div className="hero2">
          <div className="img">
            <img src={LargeImg} />
          </div>
        </div>

        <div className="txt-hero">
          <Container>
            <div className="txt-hero">
              <div className="txt-inner">
                {/* <div className="top-title">
                  <div className="super-line">
                    <div className="line"></div>
                  </div>
                  <p>Where can we help you</p>
                </div>
                <h1 className="pb-1">
                  <span>Consultancy</span>
                  <br />
                  <span> Industries</span>
                </h1> */}

                <TitleFunc
                  width="250"
                  topText={"We Want you to succeed"}
                  mainText={"Consultancy Industries"}
                  topTitleColor="white"
                  bottomText={"Lorem Ipsum dolor sit amet"}
                  bottomTitleColor={"white"}
                />
              </div>
            </div>
          </Container>
        </div>
        {/* <div className="txt-hero">
          <div className="txt-inner">
            <div className="top-title">
              <div className="super-line">
                <div className="line"></div>
              </div>
              <p>We want to see you succeed</p>
            </div>
            <h1 className="pb-3">
              You're <span>Success</span>
              <br />
              <span> Our</span> Business
            </h1>

            <p className="para pb-3">
              we want to see you succeedwe want to
              <br />
              see you succeedwe want to see you succeedwe
              <br /> want to see you succeedwe want to see you succeed
            </p>
            <Button size="lg">Find Out More</Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
