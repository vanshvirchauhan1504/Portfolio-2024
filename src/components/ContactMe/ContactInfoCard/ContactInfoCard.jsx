import React from "react";
import "./ContactInfoCard.css";
// import { Link } from "react-scroll";

const ContactInfoCard = ({ iconUrl, text, name }) => {
  return (
    <div className="contact-details-card">
      {/* <div className="icon">
        <img src={iconUrl} alt={text}/>
      </div>
      {
        text==="vanshvirchauhan1504@gmail.com"? 
        <p>{text}</p>:
        <a href={text} target="_blank"><p>{text}</p></a>
      } */}
    </div>
  );
};

export default ContactInfoCard;
