import React from "react";
import "./a-content.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Nav from "react-bootstrap/Nav";


const AboutContent = () => {
  return (
    <div className="a-container">
      <div className="a-img-card">
      
      </div>
      <div className="a-para-card">
         <small>.</small>
         <div className="receiving-text">
          <h3>Tell me About You <span className="msg-text-send">7.25</span><DoneAllIcon sx={{ marginBottom: "-5px", color: "#34b7f1" }}/></h3>
         </div>
        <div className="msg-flex">  
            {/* As a proficient MERN stack developer, I am well-versed in utilizing
            MongoDB, Express.js, React.js, and Node.js to craft visually
            appealing, functionally sound, and highly performant web
            applications. */}
            <h3 className="title a-para-content">I am a proficient MERN stack developer... 
            </h3>
          <div className="msg-text">
            <h5>
              7:28 &nbsp;
              {/* <DoneAllIcon sx={{ marginBottom: "-5px", color: "#34b7f1" }} /> */}
            </h5>
          </div>
        </div>

       

        <div className="msg-flex">
          <p className="a-para-content">
            I am well-versed in utilizing
            MongoDB, Express.js, React.js, and Node.js to craft visually
            appealing, functionally sound, and highly performant web
            applications.
            With a keen eye for detail and a predilection for solving complex
            problems, I am adept at translating business requirements into
            intuitive user experiences. I am highly efficient and possess a strong work ethic, and am committed to producing high-quality work in a timely manner.
            {/* With a keen eye for detail and a predilection for solving complex
            problems, I am adept at translating business requirements into
            intuitive user experiences. */}
          </p>
          <div className="msg-text">
            <h5>
              7:30 &nbsp;
              {/* <DoneAllIcon sx={{ marginBottom: "-5px", color: "#34b7f1" }} /> */}
            </h5>
          </div>
        </div>
<br />
        <div className="msg-send">
         <input type="text" placeholder="You are hired!" className="input"></input>
         <Nav.Link href="#contactme" className="nav-link">
         <i className="fa-solid fa-paper-plane"></i>
          </Nav.Link>
        </div>

      </div>
    </div>
  );
};

export default AboutContent;
