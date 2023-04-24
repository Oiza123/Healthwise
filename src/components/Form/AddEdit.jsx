import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import fireDb from "../Firebase/firebase";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg3 from "../images/bg 3.jpg";
import { Link } from "react-router-dom";
import "./AddEdit.css";
import { Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

//create the registration form with data being saved to firebase

const initialState = {
  name: "",
  ID: "",
  doctor: "",
  typeofAppointment: "",
  nextAppointment: "",
};

function AddEdit() {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  //destructuring the state
  const { name, ID, doctor, typeofAppointment, nextAppointment } = state;

  //useNavigate hook to navigate to automatically another page after an event
  const navigate = useNavigate();

  //useParam to capture the id and assign value or property to the data linked to the id
  const { id } = useParams();

  //pushing data to firebase on save after refresh of page
  useEffect(() => {
    fireDb.child("Info").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    //clean up function
    return () => {
      setData({});
    };
  }, [id]);

  //updating the data on edit in the local broswer

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }

    //clean up function
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  //calls this function when a change is made in the input box (assigns the inputed value to the setState hook )

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  //calls this function when the form is submitted,
  const handleSubmit = (e) => {
    //prevents browser reload or refresh after submitting
    e.preventDefault();
    //form validation
    if (!name || !ID || !nextAppointment || !doctor || !typeofAppointment) {
      toast.error("Please fill all input field");
    } else {
      //saving the data in the absence of id on firebase
      if (!id) {
        fireDb.child("Info").push(state, (err) => {
          if (err) {
            toast.err(err);
          } else {
            toast.success("Info added successfully");
          }
        });
      } else {
        //updating existing data into firebase(ie- if you use the id from useParam)
        fireDb.child(`Info/${id}`).set(state, (err) => {
          if (err) {
            toast.err(err);
          } else {
            toast.success("Info updated successfully");
          }
        });
      }

      //set time out of 5sec to navigate to table after successfully filling or updating the form
      setTimeout(() => navigate("/Info"), 500);
    }
  };

  //creating the form

  return (
    <Container
      style={{
        backgroundImage: `url('${bg3}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        borderRadius: "5px",
        paddingTop: "50px",
        height: "100vh",
      }}
    >
      <Row>
        <Col sm>
          <div className="formStyle">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={name || ""}
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="ID">Card ID</label>
              <input
                required
                type="text"
                id="number"
                name="ID"
                value={ID || ""}
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="doctor">
                Doctor
                <input
                  required
                  type="text"
                  id="doctor"
                  name="doctor"
                  value={doctor || ""}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label htmlFor="typeofAppointment">
                Type of Appointment
                <input
                  required
                  type="text"
                  id="typeofAppointment"
                  name="typeofAppointment"
                  value={typeofAppointment || ""}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label htmlFor="nextAppointment">
                Next Appointment
                <input
                  required
                  type="date"
                  id="date"
                  name="nextAppointment"
                  value={nextAppointment || ""}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <input type="submit" value={id ? "Update" : "Save"} />
            </form>
          </div>
        </Col>
        <Col sm>
          <div className="formText">
            <h2>Book an appointment today!</h2>
            <hr />
            <strong>
              Register and book an appointment <br />
              with our physicians from the comfort of your home,
              <br />
              Make consultations and access your user details with ease.
            </strong>
            <br />
            <HashLink to="/#learn" style={{ textDecorationLine: "none" }}>
              <Button className="learn">Learn More</Button>
            </HashLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AddEdit;
