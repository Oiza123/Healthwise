import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dentistry from "../images/dentistry.png";
import eyecare from "../images/eye care.png";
import doctor1 from "../images/doctor 1.png";
import doctor2 from "../images/doctor 2.png";
import doctor3 from "../images/doctor 3.png";
import consultancy from "../images/consultancy.png";
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import "./Home.css";

function Home() {
  return (
    <Container className="container-fluid">
      {/*first row*/}
      <Row>
        <Col className="bg">
          <h2>
            WELCOME TO HEALTH-WISE
            <p className="mt-2">
              Bringing the best medical solutions <br />
              solutions to your fingertips
              <br />
              <Link to="/add" style={{ textDecorationLine: "none" }}>
                <Button className="mt-4" id="appointment">
                  Book Appointment
                </Button>
              </Link>
              <HashLink to="#learn" style={{ textDecorationLine: "none" }}>
                <Button className="mt-4" id="learnmore">
                  Learn More
                </Button>
              </HashLink>
            </p>
          </h2>
        </Col>
      </Row>
      {/*second row*/}
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 3.0,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Row>
          <Col sm className="col1" id="col">
            Register and book appointments at a go
            <br />
            <Link to="/add" style={{ textDecorationLine: "none" }}>
              <Button className="book">Book Appointment</Button>
            </Link>
          </Col>
          <Col sm className="col1">
            Keep up-to-date record of appointments and patient information.
            <br />
            <Link to="/Info" style={{ textDecorationLine: "none" }}>
              <Button className="book">View Record</Button>
            </Link>
          </Col>
          <Col sm className="col1">
            Contact our technical and medical team for support, consultancy or
            to log a complaint
            <br />
            <Link to="/Help" style={{ textDecorationLine: "none" }}>
              <Button className="contact">Contact Us</Button>
            </Link>
          </Col>
        </Row>
      </motion.div>
      {/*third row*/}
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Row id="learn" className="bg3">
          <h3>Types of Appointments</h3>
          <Col sm className="col2">
            <img
              src={eyecare}
              alt=""
              style={{ width: "35%", paddingBottom: "10%" }}
            />
            <h5>Eye Care</h5>
            <p>
              Book an appointment with our ophthalmologist for all kinds of eye
              care and contact fitting.
            </p>
          </Col>
          <Col sm className="col2">
            <img
              src={consultancy}
              alt=""
              style={{ width: "40%", paddingBottom: "10%" }}
            />
            <h5>Consultancy</h5>
            <p>
              Book a session with our consultants for medical, surgical and/or
              psychological cases.
            </p>
          </Col>

          <Col sm className="col2">
            <img
              src={dentistry}
              alt=""
              style={{ width: "50%", paddingBottom: "5%" }}
            />
            <h5>Dentistry</h5>
            <p>
              Book a dentist for teeth whitening, remolding, gum filling and
              general teeth care.
            </p>
          </Col>
        </Row>
      </motion.div>
      {/*fourth row*/}
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 3.0,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Row>
          <h3>Meet our Medical Team</h3>
          <Col sm className="col3">
            <img src={doctor1} alt="" style={{ width: "100%" }} />
            <br />
            <strong>Dr.Chris : Chief Consultant</strong>
            <br />
            <Link to="/add" style={{ textDecorationLine: "none" }}>
              <Button className="book">Book Appointment</Button>
            </Link>
          </Col>
          <Col sm className="col3">
            <img src={doctor2} alt="" style={{ width: "100%" }} />
            <br />
            <strong>Nrs.Anne : Midwife</strong>
            <br />
            <Link to="/add" style={{ textDecorationLine: "none" }}>
              <Button className="book">Book Appointment</Button>
            </Link>
          </Col>
          <Col sm className="col3">
            <img src={doctor3} alt="" style={{ width: "100%" }} />
            <br />
            <strong>Dr. Seth : OB/GYN </strong>
            <br />
            <Link to="/add" style={{ textDecorationLine: "none" }}>
              <Button className="book">Book Appointment</Button>
            </Link>
          </Col>
        </Row>
      </motion.div>
      <hr />
      <Footer />
    </Container>
  );
}

export default Home;
