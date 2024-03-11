import React from "react";
import "./ContactInfoCard.css";
// import { Link } from "react-scroll";

const ContactInfoCard = ({ iconUrl, text, name }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text}/>
      </div>
      <a href={text}>{name}</a>
    </div>
  );
};

export default ContactInfoCard;
