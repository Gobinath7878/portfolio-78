import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./c-contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from '@mui/icons-material/Description';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Result = () => {
  return <p><DoneAllIcon sx={{fontSize:"30px",marginBottom:"-8px",color:"green"}}/>Your Message has been Sent Successfully.</p>;
};
export const ContactForm = () => {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6u7a0km",
        "template_gyfv1b4",
        form.current,
        "WzW5Iw21ULgS0fiw_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  },4000);

  return (
    <div className="contact-section">
      <div className="contact-content">
        <img
          src="https://img.freepik.com/free-vector/email-campaign-concept-illustration_114360-1633.jpg?w=740&t=st=1673419634~exp=1673420234~hmac=670d549d9f359c3f1dde176a5d78650d3421aa861783ef9b6c029c8be879ea7c"
          alt=""
        />
         <div className="group-link-contact">
            
            <a href="https://github.com/Gobinath7878" target="_blank" rel="noreferrer" className="nav-github nav-link" id="hover-link">
              <GitHubIcon sx={{ fontSize: "30px", marginBottom: "35px" }} />
              <h4>Github</h4>
            </a>

            <a href="https://www.linkedin.com/in/gobinath-s-466466250/" target="_blank" rel="noreferrer" className="nav-github nav-link" id="hover-link">
              <LinkedInIcon sx={{ fontSize: "30px", marginBottom: "35px" }} />
              <h4>Linkedin</h4>
            </a>

            <a href="https://drive.google.com/file/d/1w_EEhs2WNhFxoZP6dZXLfbbSLC_ehXQi/view?usp=sharing" target="_blank" rel="noreferrer" className="nav-github nav-link" id="hover-link">
              <DescriptionIcon sx={{ fontSize: "30px", marginBottom: "35px" }} />
              <h4>Resume</h4>
            </a>
          </div>
      </div>
      <div className="c-card-form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            required
            className="form-name"
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            required
            className="form-mail"
            placeholder="Email"
          />

          <textarea name="message" required className="form-msg" placeholder="message"/>
          <div className="send-btn px-3">
            <button type="submit" className="c-btn">
              Send
            </button>
            <div className="alert">{result ? <Result /> : null}</div>
          </div>
        </form>
      </div>
    </div>
  );
};
