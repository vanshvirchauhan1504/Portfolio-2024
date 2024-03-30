import React from "react";
import "./ContactMe.css";
// import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{flex: 1}} className="test">

          <div className="contact-details-card">
            <div className="icon">
              <img src="./assets/images/email-icon.svg" alt="text"/>
            </div>
            <p>vanshvirchauhan1504@gmail.com</p>
          </div>

          <div className="contact-details-card">
            <div className="icon">
              <img src="./assets/images/email-icon.svg" alt="text"/>
            </div>
            <a href="https://github.com/vanshvirchauhan1504" target="_blank">https://github.com/vanshvirchauhan1504</a>
          </div>

          <div className="contact-details-card">
            <div className="icon">
              <img src="./assets/images/email-icon.svg" alt="text"/>
            </div>
            <a href="https://shorturl.at/hFKN7" target="_blank">https://shorturl.at/hFKN7 - Resume</a>
          </div>

          <div className="contact-details-card">
            <div className="icon">
              <img src="./assets/images/email-icon.svg" alt="text"/>
            </div>
            <a href="https://www.linkedin.com/in/vanshvir1504/" target="_blank">https://www.linkedin.com/in/vanshvir1504/</a>

          </div>





          {/* <ContactInfoCard
            iconUrl="./assets/images/email-icon.svg"
            text="vanshvirchauhan1504@gmail.com"
            name="Email"
          />

          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="www.linkedin.com/in/vanshvirchauhan1504"
            name="LinkedIn"
          />

          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://l1nk.dev/MyResume"
            name="Resume"
          />

          <ContactInfoCard
            iconUrl="./assets/images/github-icon.svg"
            text="https://github.com/vanshvirchauhan1504"
            name="Github"
          /> */}

        </div>

        <div style={{flex: 1}}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
