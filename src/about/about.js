import React from "react";
import "./about.css";
import Container from "react-bootstrap/Container";
import aboutImg from "../assets/about.png";
import Button from "react-bootstrap/Button";
import TitleFunc from "../title/title";

export default function About() {
  return (
    <div className="about pt-5 pb-5">
      <div className="about-inner">
        <Container>
          <div className="pt-5">
            <div className="txt-inner">
              <div className="row pt-4">
                <div className="col-md-8">
                  {/* <div className="top-title">
                    <div className="super-line">
                      <div className="line"></div>
                    </div>
                    <p className="about-top-title">Who We are</p>
                  </div> */}
                  {/* <h1 className="pb-2">
                    <span>Consultancy</span>
                    <br />
                    <span> Industries</span>
                  </h1> */}

                  <TitleFunc
                    width="250"
                    topText={"We Want you to succeed"}
                    mainText={"Consultancy Industries"}
                    topTitleColor="white"
                    // bottomText={"Lorem Ipsum dolor sit amet"}
                    // bottomTitleColor={"black"}
                  />
                  <p className="para pb-1">
                    we want to see you succeedwe want to see you succeedwe want
                    to see you succeedwe want to see you succeedwe want to see
                    you succeedwe want to see you succeedwe want to see you
                    succeedwe want to see you succeedwe want to see you
                    succeedwe want we want to see you succeedwe want to see you
                    succeedwe want to see you succeedwe want to see you
                  </p>

                  <Button className="btn-about">More About Us</Button>
                </div>
                <div className="col-md-4 img-about-section d-flex justify-content-end align-items-center">
                  <img src={aboutImg} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
