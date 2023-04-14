import React from "react";
import "./c-projects.css";
import Nav from "react-bootstrap/Nav";

const ProjectsContent = () => {
  return (
    
    <>
      <div className="container-3">
        <div className="box">
          <div className="img-container">
            <img
              src="https://img.freepik.com/free-photo/coffee-latte-with-cookies-coffiee-beans_141793-17440.jpg?w=740&t=st=1673166089~exp=1673166689~hmac=ee8f3043480a1939b9b85040cbc5899845a0fc72fdd1d5052eb3f53f0ec9ff2f"
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
              src="https://img.freepik.com/free-vector/cinema-design-concept-with-set-square-compositions-with-female-characters-reels-camera-with-smartphone-illustration_1284-57177.jpg?w=826&t=st=1673166355~exp=1673166955~hmac=dadbd5ce76f1ee1840dee78dc66452fc91ffc461fd586c63d1bd2838360fcb12"
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
              src="https://img.freepik.com/free-vector/people-planning-trip-around-world-they-are-pointing-map-using-app-mobile-phone-travel-vacations-concept_1150-51089.jpg?w=900&t=st=1673166477~exp=1673167077~hmac=ce2df0e500d64e25e6986d35d08b9c45ebad555ef6b9950bf77ae442d2c7564c"
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
              src="https://img.freepik.com/free-vector/music-mobile-phone-app_23-2148827274.jpg?w=740&t=st=1673166592~exp=1673167192~hmac=b28bf4aac86eec46ff6bb91666f17db74e73f34d03a4b82e87f4724357e9016c"
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
