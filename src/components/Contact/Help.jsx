import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
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
    <div className="bg2">
      <div className="style">
        <h4>Submit Complaint</h4>
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
          className="textarea"
          required
          type="textarea"
          id="msg"
          name="msg"
        />
        <input type="submit" onClick={sendEmail} />
      </div>
      <br />
      <hr />
      <Footer />
    </div>
  );
}

export default Help;
