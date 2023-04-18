import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg1 from "../images/bg 1.jpg";
import bg3 from "../images/bg 3.jpg";
import dentistry from "../images/dentistry.png";
import eyecare from "../images/eye care.png";
import consultancy from "../images/consultancy.png";
import obstetrics from "../images/obstetrics.png";
import { Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <Container>
      <Row>
        <Col
          style={{
            backgroundImage: `url('${bg1}')`,
            height: "500px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            borderRadius: "5px",
            marginTop: "15spx",
          }}
        >
          <h2
            style={{
              textAlign: "left",
              marginTop: "50px",
              color: "white",
            }}
          >
            WELCOME TO HEALTH-WISE
            <p className="mt-2">
              Bringing the best medical solutions <br />
              solutions to your fingertips
              <br />
              <Link to="/add" style={{ textDecorationLine: "none" }}>
                <Button
                  className="mt-4"
                  style={{
                    width: "150px",
                    backgroundColor: "grey",
                    padding: "12px",
                  }}
                >
                  Appointment
                </Button>
              </Link>
              <HashLink to="#learn" style={{ textDecorationLine: "none" }}>
                <Button
                  className="mt-4"
                  style={{
                    width: "150px",
                    backgroundColor: "transparent",
                    border: "2px solid white",
                    padding: "10px",
                    textDecorationStyle: "none",
                  }}
                >
                  Learn More
                </Button>
              </HashLink>
            </p>
          </h2>
        </Col>
      </Row>
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
          <Col
            sm
            style={{
              backgroundColor: "transparent",
              padding: "60px",
              margin: "25px",
              border: "2px solid whitesmoke",
              height: "300px",
              textAlign: "center",
              boxShadow: "2px 2px 3px grey",
              borderRadius: "10px",
            }}
          >
            Register and book appointments at a go
            <Link to="/add" style={{ textDecorationLine: "none" }}>
              <Button
                className="mt-4"
                style={{
                  width: "150px",
                  backgroundColor: "#55bee4",
                  border: "2px solid white",
                  padding: "10px",
                }}
              >
                Book Appointment
              </Button>
            </Link>
          </Col>
          <Col
            sm
            style={{
              backgroundColor: "transparent",
              padding: "60px",
              margin: "25px",
              border: "2px solid whitesmoke",
              height: "300px",
              textAlign: "center",
              boxShadow: "2px 2px 3px grey",
              borderRadius: "10px",
            }}
          >
            Keep up-to-date record of appointments and patient information.
            <Link to="/Info" style={{ textDecorationLine: "none" }}>
              <Button
                className="mt-4"
                style={{
                  width: "150px",
                  backgroundColor: "#55bee4",
                  border: "2px solid white",
                  padding: "10px",
                  textDecorationStyle: "none",
                }}
              >
                View Record
              </Button>
            </Link>
          </Col>
          <Col
            sm
            style={{
              backgroundColor: "transparent",
              padding: "60px",
              margin: "25px",
              border: "2px solid whitesmoke",
              height: "300px",
              textAlign: "center",
              boxShadow: "2px 2px 3px grey",
              borderRadius: "10px",
            }}
          >
            Contact our technical and medical team for support, consultancy or
            to log a complaint
            <Link to="/Help" style={{ textDecorationLine: "none" }}>
              <Button
                className="mt-4"
                style={{
                  width: "150px",
                  backgroundColor: "#55bee4",
                  border: "2px solid white",
                  padding: "10px",
                  textDecorationStyle: "none",
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Col>
        </Row>
      </motion.div>
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
        <Row
          id="learn"
          style={{
            backgroundImage: `url('${bg3}')`,
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            borderRadius: "5px",
            marginTop: "15px",
          }}
        >
          <h2 style={{ textAlign: "center", margin: "10px" }}>
            Types of Appointments
          </h2>
          <Col
            sm={2}
            style={{
              backgroundColor: "transparent",
              padding: "10px",
              margin: "35px",
              border: "2px solid whitesmoke",
              height: "300px",
              textAlign: "center",
              boxShadow: "2px 2px 3px grey",
              borderRadius: "10px",
            }}
          >
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
          <Col
            sm={2}
            style={{
              backgroundColor: "transparent",
              padding: "10px",
              margin: "35px",
              border: "2px solid whitesmoke",
              height: "300px",
              textAlign: "center",
              boxShadow: "2px 2px 3px grey",
              borderRadius: "10px",
            }}
          >
            <img
              src={consultancy}
              alt=""
              style={{ width: "50%", paddingBottom: "10%" }}
            />
            <h5>Consultancy</h5>
            <p>
              Book a session with our consultants for medical, surgical and/or
              psychological cases.
            </p>
          </Col>
          <Col
            sm={2}
            style={{
              backgroundColor: "transparent",
              padding: "10px",
              margin: "35px",
              border: "2px solid whitesmoke",
              height: "300px",
              textAlign: "center",
              boxShadow: "2px 2px 3px grey",
              borderRadius: "10px",
            }}
          >
            <img
              src={obstetrics}
              alt=""
              style={{ width: "50%", paddingBottom: "10%" }}
            />
            <h5>Obstetrics</h5>
            <p>
              Book an obstetrician for antenatal care, labour and delivery,
              postnatal care and female health issues.
            </p>
          </Col>
          <Col
            sm={2}
            style={{
              backgroundColor: "transparent",
              padding: "10px",
              margin: "35px",
              border: "2px solid whitesmoke",
              height: "300px",
              textAlign: "center",
              boxShadow: "2px 2px 3px grey",
              borderRadius: "10px",
            }}
          >
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
      <hr />
      <Footer />
    </Container>
  );
}

export default Home;
