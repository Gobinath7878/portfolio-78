import React, { useState } from "react";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DehazeIcon from "@mui/icons-material/Dehaze";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate} from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <Nav.Link href="#contactme" className="nav-logo">
          <GoogleIcon
            sx={{
              height: "43px",
              width: "35px",
              marginRight: "-3px",
              paddingTop: "10px",
              marginBottom: "-5px",
            }}
          />
          obinath S
        </Nav.Link>

        <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <Nav.Link href="#home" className="nav-link">
                <HomeIcon className="nav-icon" />
                Home
              </Nav.Link>
            </li>

            <li className="nav-item">
              <Nav.Link href="#Aboutme" className="nav-link">
                <AccountBoxIcon className="nav-icon" />
                About
              </Nav.Link>
            </li>

            <li className="nav-item">
              <Nav.Link href="#skills" className="nav-link">
                <ImportContactsIcon className="nav-icon" />
                Skills
              </Nav.Link>
            </li>

            <li className="nav-item">
              <Nav.Link href="#projects" className="nav-link">
                <ReceiptIcon className="nav-icon" /> Project
              </Nav.Link>
            </li>

            <li className="nav-item">
              <Nav.Link href="#Services" className="nav-link">
                <EmailIcon className="nav-icon" /> Services
              </Nav.Link>
            </li>

            <li className="nav-item">
              <Nav.Link href="#contactme" className="nav-link">
                <EmailIcon className="nav-icon" /> Contact
              </Nav.Link>
            </li>
          </ul>

          <i className="nav-close" onClick={() => showMenu(!Toggle)}>
            <CloseIcon/>
          </i>
        </div>
        <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
           <DehazeIcon />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
