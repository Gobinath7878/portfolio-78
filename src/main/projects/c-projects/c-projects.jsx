import React from "react";
import "./c-projects.css";
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
            <a href="https://chego-store.netlify.app" target="_blank" rel="noreferrer" className="pro-btn">Live site</a>
            <a href="https://github.com/Gobinath7878/cheGo-store-fe" target="_blank" rel="noreferrer" className="pro-btn">Frond-End</a>
            <a href="https://github.com/Gobinath7878/cheGo-store-be" target="_blank" rel="noreferrer" className="pro-btn">Back-End</a>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              src={Chatapp}
              alt="loading"
            />
            <h4>Chat App</h4>
            <a href="https://chat-fe-8kpa.onrender.com" target="_blank" rel="noreferrer" className="pro-btn">Live site</a>
            <a href="https://github.com/Gobinath7878/chat-fe" target="_blank" rel="noreferrer" className="pro-btn">Frond-End</a>
            <a href="https://github.com/Gobinath7878/chat-be" target="_blank" rel="noreferrer" className="pro-btn">Back-End</a>
          </div>
        </div>
        <div className="box">
          <div className="img-container">
            <img
              src={Tourapp}
              alt="loading"
            />
            <h4>Tour App</h4>
            <a href="https://travego-na.netlify.app" target="_blank" rel="noreferrer" className="pro-btn">Live site</a>
            <a href="https://github.com/Gobinath7878/Tour-app-FE" target="_blank" rel="noreferrer" className="pro-btn">Frond-End</a>
            <a href="https://github.com/Gobinath7878/Tour-App-BE" target="_blank" rel="noreferrer" className="pro-btn">Back-End</a>
          </div>
        </div>

        <div className="box">
          <div className="img-container">
            <img
              src={Elitemail}
              alt="loading"
            />
            <h4>EliteMail Pro</h4>
            <a href="https://bulk-email-tool.netlify.app" target="_blank" rel="noreferrer" className="pro-btn">Live site</a>
            <a href="https://github.com/Gobinath7878/Bulk-Email-Tool-Frontend" target="_blank" rel="noreferrer" className="pro-btn">Frond-End</a>
            a href="https://github.com/Gobinath7878/Bulk-Email-Tool-Backend" target="_blank" rel="noreferrer" className="pro-btn">Back-End</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
