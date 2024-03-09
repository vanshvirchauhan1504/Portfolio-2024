import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{flex: 1}} className="test">
          <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="vanshvirchauhan1504@gmail.com"
          />

          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/time-to-program"
          />

          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/time-to-program"
          />

          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/time-to-program"
          />

        </div>

        <div style={{flex: 1}}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
