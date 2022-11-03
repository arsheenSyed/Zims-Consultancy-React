import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { faScaleUnbalancedFlip } from "react-icons/fa";
import { HiOutlineScale } from "react-icons/hi";
import { AiOutlinePieChart } from "react-icons/ai";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ImOffice } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import "./section2.css";
import TitleFunc from "../title/title";
export default function Section2() {
  return (
    <div className="section-2">
      <Container className="mb-5 mt-5 pb-5">
        <div className="txt-section pt-5">
          <div className="txt-inner">
            {/* <div className="top-title">
            <div className="super-line">
              <div className="line"></div>
            </div>
            <p>Where can we help you</p>
          </div>
          <h1 className="pb-2">
            <span>Consultancy</span>
            <br />
            <span> Industries</span>
          </h1> */}

            {/* <p className="para pb-1">
            we want to see you succeed we want to
            <br />
            see you suceed we want to see you succeed we
          </p> */}

            <TitleFunc
              width="250"
              topText={"We Want you to succeed"}
              mainText={"Consultancy Industries"}
              topTitleColor="blue"
              bottomText={"Lorem Ipsum dolor sit amet"}
              bottomTitleColor={"black"}
            />
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-md-4 section2-columns">
            <div>
              {" "}
              <h1 className="icons">
                <HiOutlineScale />
              </h1>
            </div>
            <div className="">
              <h3 className="">Solicitory</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-md-4 section2-columns">
            <div>
              {" "}
              <h1 className="icons">
                <AiOutlinePieChart />
              </h1>
            </div>
            <div className="">
              <h3 className="">Business Planning</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-md-4 section2-columns">
            <div>
              {" "}
              <h1 className="icons">
                <IoPeopleCircleOutline />
              </h1>
            </div>
            <div className="">
              <h3 className="">Human Resources</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-md-4 section2-columns">
            <div>
              {" "}
              <h1 className="icons">
                <HiOutlineLightBulb />
              </h1>
            </div>
            <div className="">
              <h3 className="">Strategy</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="col-md-4 section2-columns">
            <div>
              {" "}
              <h1 className="icons">
                <ImOffice />
              </h1>
            </div>
            <div className="">
              <h3 className="">Start Ups</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-md-4 section2-columns">
            <div>
              {" "}
              <h1 className="icons">
                <BsPeopleFill />
              </h1>
            </div>
            <div className="">
              <h3 className="">Organisations</h3>
              <p>lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
