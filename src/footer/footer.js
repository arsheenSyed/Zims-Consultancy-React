import React from "react";
import "./footer.css";
import Container from "react-bootstrap/Container";
import TitleFunc from "../title/title";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="pt-4">
        <div className="row pt-4 pb-4">
          <div className="col-md-4 footer-1">
            <TitleFunc
              width="250"
              topText="Zims Consultants"
              mainText="Head Quarters"
              topTitleColor="white"
              bottomTitleColor={"black"}
            />

            <p className="bottom-para">
              Organically grow the holistic world view of disruptive innovation
              via empowerment.
            </p>

            <div className="icon-text">
              <p>
                <AiFillPhone /> <span> +123456789</span>
              </p>
            </div>
            <div className="icon-text">
              <p>
                <MdEmail /> <span> xyz@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 footer-2">
            <TitleFunc
              width="100p"
              // topText="Zims Consultants"
              mainText="Head Quarters"
              topTitleColor="white"
              bottomTitleColor={"black"}
            />

            <div className="links-wrapper">
              <div className="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Cases</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer-3">
            <TitleFunc
              width="250"
              topText="Zims Consultants"
              mainText="Head Quarters"
              topTitleColor="white"
              bottomTitleColor={"black"}
            />

            <div className="social-icons">
              <p>
                <AiFillFacebook />
              </p>

              <p>
                <AiFillInstagram />
              </p>

              <p>
                <AiFillTwitterSquare />
              </p>

              <p>
                <AiFillLinkedin />
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
