import React from "react";
import "./ContactForm.css";
import { useState } from "react";
import emailjs from "@emailjs/browser"


const ContactForm = () => {

  const [formData, setFormData] = useState({name: "",email: "",subject:"",message: ""});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
    .send(
      "service_mrk1ucv",
      "template_4j31gpc",
      templateParams,
      "Ks-SS-P7cX6hLvNp3"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thanks, message sent successfully");
      },
      function (error) {
        alert("OOPs something went wrong... Try again later");
        console.log("FAILED...", error);
      }
    );
  }

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input type="text" name="name" placeholder="First Name" onChange={handleChange}/>
          <input type="text" name="subject" placeholder="Last Name" onChange={handleChange}/>
        </div>
        <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
        <textarea type="text" name="message" placeholder="Message" rows={3} onChange={handleChange}/>

        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
