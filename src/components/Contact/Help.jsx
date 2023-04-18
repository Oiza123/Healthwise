import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import bg3 from "../images/bg 3.jpg";
import "./Help.css";

function Help() {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fn0u6gl",
        "template_n9uea1e",
        form.current,
        "6mcVg4pkcyiYWc8Vp"
      )
      .then(
        (result) => {
          toast.success(result.text);
        },
        (error) => {
          toast.error(error.text);
        }
      );
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url('${bg3}')`,
        height: "90vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        borderRadius: "5px",
        paddingTop: "10px",
      }}
    >
      <div className="style">
        <h4 style={{ margin: "15px" }}>Submit Complaint</h4>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="fname" />
          Name
          <input required type="text" id="fname" name="fname" />
          <label htmlFor="email" />
          Email
          <input required type="email" id="email" name="email" />
        </form>
        <label htmlFor="text" />
        Message
        <input
          required
          type="textarea"
          id="msg"
          name="msg"
          style={{ width: "250px", height: "150px" }}
        />
        <input type="submit" onClick={sendEmail} />
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default Help;
