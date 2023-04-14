import React from "react";
import "./c-projects.css";
import Nav from "react-bootstrap/Nav";
import Drinksbuddy from '../../../assests/about/chegostore-project-Img.png';
import Chatapp from '../../../assests/about/chatapp-project-Img.png'
import Tourapp from '../../../assests/about/tourapp-project-Img.png'
import Elitemail from '../../../assests/about/elitemailpro-project-Img.png'



const ProjectsContent = () => {
  return (
    
    <>
      <div className="container-3">
        <div className="box">
          <div className="img-container">
            <img
              src={Drinksbuddy}
              alt="loading"
            />
            <h4>Drinks Buddy</h4>
            <Nav.Link href="https://chego-store.netlify.app" className="pro-btn">Live site</Nav.Link>
            <Nav.Link href="https://github.com/Gobinath7878/cheGo-store-fe" className="pro-btn">Frond-End</Nav.Link>
            <Nav.Link href="https://github.com/Gobinath7878/cheGo-store-be" className="pro-btn">Back-End</Nav.Link>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              src={Chatapp}
              alt="loading"
            />
            <h4>Chat App</h4>
            <Nav.Link href="https://chat-fe-8kpa.onrender.com" className="pro-btn">Live site</Nav.Link>
            <Nav.Link href="https://github.com/Gobinath7878/chat-fe" className="pro-btn">Frond-End</Nav.Link>
            <Nav.Link href="https://github.com/Gobinath7878/chat-be" className="pro-btn">Back-End</Nav.Link>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              src={Tourapp}
              alt="loading"
            />
            <h4>Tour App</h4>
            <Nav.Link href="https://travego-na.netlify.app" className="pro-btn">Live site</Nav.Link>
            <Nav.Link href="https://github.com/Gobinath7878/Tour-app-FE" className="pro-btn">Frond-End</Nav.Link>
            <Nav.Link href="https://github.com/Gobinath7878/Tour-App-BE" className="pro-btn">Back-End</Nav.Link>
          </div>
        </div>

        <div className="box">
          <div className="img-container">
            <img
              src={Elitemail}
              alt="loading"
            />
            <h4>EliteMail Pro</h4>
            <Nav.Link href="https://bulk-email-tool.netlify.app" className="pro-btn">Live site</Nav.Link>
            <Nav.Link href="https://github.com/Gobinath7878/Bulk-Email-Tool-Frontend" className="pro-btn">Frond-End</Nav.Link>
            <Nav.Link href="https://github.com/Gobinath7878/Bulk-Email-Tool-Backend" className="pro-btn">Back-End</Nav.Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
