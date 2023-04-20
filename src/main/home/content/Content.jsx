import React from "react";
import "./Content.css";
import Nav from "react-bootstrap/Nav";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';

const Content = () => {
  return (
    <section className="home-section">    
        <div className="home-content">
          
          {/* <div className="group-link-home">
            <Nav.Link href="#contactme" className="nav-github" id="hover-link">
              <GitHubIcon sx={{ fontSize: "35px", marginBottom: "30px" }} />
              <h4>Github</h4>
            </Nav.Link>

            <Nav.Link href="#contactme" className="nav-github" id="hover-link">
              <LinkedInIcon sx={{ fontSize: "35px", marginBottom: "30px" }} />
              <h4>Linkedin</h4>
            </Nav.Link>
          </div> */}

          <div className="home-img">
            <div className="card">
              <div className="imgBx">
                {/* <img src="profile-5.jpg" alt="loading"/> */}
              </div>
            </div>
            <div className="group-link-home">
            <a href="https://github.com/Gobinath7878" target="_blank" rel="noreferrer" className="nav-github" id="hover-link">
              <GitHubIcon sx={{ fontSize: "30px", marginBottom: "35px" }} />
              <h4>Github</h4>
            </a>

            <a href="https://www.linkedin.com/in/gobinath-s-466466250/" target="_blank" rel="noreferrer" className="nav-github" id="hover-link">
              <LinkedInIcon sx={{ fontSize: "30px", marginBottom: "35px" }} />
              <h4>Linkedin</h4>
            </a>

            <Nav.Link href="#contactme" className="nav-github" id="hover-link">
              <EmailIcon sx={{ fontSize: "30px", marginBottom: "35px" }} />
              <h4>Email</h4>
            </Nav.Link>
          </div>
          </div>

          {/* home page */}

          <div className="home-data">
            <h1 className="home-title">
              <span>H</span>i !<br></br>I'<span>m</span> <span>Gob</span>i
              <span>nath</span>
            </h1>
            {/* <h1>I'm Gob<span>i</span>nath S</h1> */}
            <div className="wrapper">
              <p>I can Cook</p>
              <div className="words">
                <span>Websites</span>
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>Node.js</span>
              </div>
            </div>
            <div className="home-btn-flex">
              <Nav.Link href="#contactme" className="hireme-btn" id="hiremebtn">
                Hire Me
              </Nav.Link>
              <a
                href="https://drive.google.com/file/d/1mqGqCscFxBwHqkIyLnMUZ6Nj-A6XB3iQ/view?usp=sharing"
                className="hireme-btn" id="resumebtn"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Content;
