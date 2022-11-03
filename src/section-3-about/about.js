import React from "react";
import TitleFunc from "../title/title";
import Container from "react-bootstrap/Container";
// import aboutImg from "../assets/about.png";
import "./about.css";

export default function About() {
  return (
    <div classabout="about">
      <Container>
        <div className="pt-5">
          <div className="txt-inner">
            {/* <div className="top-title">
              <div className="super-line">
                <div className="line"></div>
              </div>
              <p className="about-top-title">Who We are</p>
            </div>
            <h1 className="pb-2">
              <span>Consultancy</span>
              <br />
              <span> Industries</span>
            </h1> */}
            <TitleFunc
              width="250"
              topText={"We Want you to succeed"}
              mainText={"Consultancy Industries"}
              topTitleColor="blue"
              bottomText={"Lorem Ipsum dolor sit amet"}
              bottomTitleColor={"black"}
            />

            <div className="row pt-4">
              <div className="col-md-6">
                <p className="para pb-1">
                  we want to see you succeedwe want to see you succeedwe want to
                  see you succeedwe want to see you succeedwe want to see you
                  succeedwe want to see you succeedwe want to see you succeedwe
                  want to see you succeedwe want to see you succeedwe want
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                {/* <img src={aboutImg} /> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
