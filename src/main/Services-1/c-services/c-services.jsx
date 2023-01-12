import React from "react";
import "./c-services.css";

const ServicesContent = () => {
  return (
    <div className="services-container">

      <div className="services-card-2">
        <div className="services-content-1">
          <div className="imgbx-service">
            <img src="https://img.freepik.com/free-vector/designer-concept-illustration_114360-836.jpg?w=740&t=st=1673263784~exp=1673264384~hmac=2fc7b085856106fa4c0f5fd8f84f49eee3f2ab4c3fbe659b50354f2a7e827d09" alt="" />
            <h1>Web design</h1>
          </div>
          <div className="services-content-text">
            <div>
              <h6>
                I create visually appealing and user-friendly websites that
                reflect your brand and meet the needs of your target audience.
              </h6>
            </div>
          </div>
        </div>

        <div className="services-content-1">
          <div className="imgbx-service ">
             <img src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg?w=740&t=st=1673493078~exp=1673493678~hmac=0145cefaed651e66be6507e80bdf72147b9282fedd5a1b40cfe7d996cddcbec1" alt="" />
            <h1>Web development</h1>
          </div>
          <div className="services-content-text">
            <div>
              <h6>
              I use a variety of technologies to build custom websites that are fast, scalable, and secure.
              </h6>
            </div>
          </div>
        </div>

        <div className="services-content-1">
          <div className="imgbx-service">
            <img src="https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1859.jpg?t=st=1673249128~exp=1673249728~hmac=c5b628c3cb76bac38dcb12307ec4a9fd34f19adbd0132a2fbd5ef4323fa44bc4" alt="" />
            <h1>Maintenance</h1>
          </div>
          <div className="services-content-text">
            <div>
              <h6>
              I keep your website up-to-date and performing optimally through ongoing maintenance and troubleshooting.
              </h6>
            </div>
          </div>
        </div>

        <div className="services-content-1">
          <div className="imgbx-service">
            <img src="https://img.freepik.com/free-vector/interaction-design-concept-illustration_114360-1863.jpg?w=740&t=st=1673264551~exp=1673265151~hmac=aad02142a6d6b288cdf3888c2cbe65ab00b0469841358ebb153a4320d8fc1a7c" alt="" />
            <h1>Mobile optimization</h1>
          </div>
          <div className="services-content-text">
            <div>
              <h6>
              I ensure that your website looks and works great on all devices, including phones and tablets.
              </h6>
            </div>
          </div>
        </div>

        <div className="services-content-1">
          <div className="imgbx-service">
            <img src="https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-244.jpg?w=740&t=st=1673263702~exp=1673264302~hmac=60b74604665bdde5142fdcc03562a3e3a5bd130f894eea0176975edd7e78a1de" alt="" />
            <h1>Content creation</h1>
          </div>
          <div className="services-content-text">
            <div>
              <h6>
              I can help you create new, high-quality content for your website, including blog posts, articles, product descriptions, and more
              </h6>
            </div>
          </div>
        </div>     
      </div>
    </div>
  );
};

export default ServicesContent;
