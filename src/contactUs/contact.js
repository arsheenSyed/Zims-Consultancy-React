import React from "react";
import "./contact.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Btn from "../button/button";
import TitleFunc from "../title/title";

import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    // not common here - pt and pb - 5 and row pt - 3  form mb-3
    <div className="contact">
      <Container className="pt-5 pb-5">
        <TitleFunc
          width="250"
          topText="Connect with Us"
          mainText="Contact Us"
          topTitleColor="blue"
          bottomText={"Lorem Ipsum dolor sit amet"}
          bottomTitleColor={"black"}
        />
        <div className="row pt-5 pb-5">
          <div className="col-md-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className="row">
                  <div className="col-sm-6  col-xs -6 col-md-6">
                    <Form.Control type="text" placeholder="Name" />
                  </div>
                  <div className="col-sm-6  col-xs -6 col-md-6">
                    <Form.Control type="text" placeholder="Company" />
                  </div>
                  <div className="col-sm-6  col-xs-6 col-md-6 mt-4">
                    <Form.Control type="text" placeholder="Email" />
                  </div>
                  <div className="col-sm-6  col-xs -6 col-md-6 mt-4">
                    <Form.Control type="text" placeholder="Phone" />
                  </div>
                </div>

                <Form.Control as="textarea" className="mt-4" rows={7} />
              </Form.Group>

              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
              <Btn color="green" text="Reserve Your Free Consultation" />
            </Form>
          </div>
          <div className="col-md-6">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5252.406929596315!2d55.37181187254899!3d25.261102335327166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db3b14f9b09%3A0xcae0462a35a0d09!2sDubai%20Airport%20Free%20Zone%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1666860399286!5m2!1sen!2sin"
                width={"100%"}
                height={"370"}
                styles={"border:0;"}
                loading={"lazy"}
              ></iframe>

              <div className="row map-inner">
                <div className="col-xs-4 col-sm-4 col-md-4">
                  <h1 className="contact-icon">
                    <HiLocationMarker /> <span>Address </span>
                  </h1>
                  <p>Bloomsbury Square,</p>
                  <p>London WC1B 4EA</p>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4">
                  <h1 className="contact-icon">
                    <FaPhoneAlt />
                    <span>Phone </span>
                  </h1>
                  <p>123-456-789</p>
                  <p>123-456-789</p>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4">
                  <h1 className="contact-icon">
                    <MdEmail /> <span>Email </span>
                  </h1>
                  <p>xyz@gmail.com</p>
                  <p>xyz@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
