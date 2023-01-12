import React from 'react'
import "./s-content.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ComputerIcon from '@mui/icons-material/Computer';
import DataArrayIcon from '@mui/icons-material/DataArray';

const SkillsContent = () => {
  return (
    <div className="s-content-container">

        <div className="s-content-card">
            <div className="s-content-img">
               <img src="https://img.freepik.com/free-photo/website-html-code-browser-view-printed-white-paper-closeup-view_211682-164.jpg?w=740&t=st=1672846295~exp=1672846895~hmac=8208a7381305f30baba3dfa02253383081c24f1ed646b2a19f0c9114b023722e" alt="Loading" />
            </div>
            <div className="s-content-contentBx">
                <div className="s-content-content">
                    <h3>Technical Skills</h3>
                    <div className="s-content-list">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Frameworks</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>MongoDB</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


        <div className="s-content-card">
            <div className="s-content-img">
                <img src="https://img.freepik.com/free-vector/creative-mini-designers-changing-website-interface-tiny-persons-covering-computer-screen-with-paint-digital-content-flat-vector-illustration-teamwork-marketing-development-concept-banner_74855-22995.jpg?w=740&t=st=1672859149~exp=1672859749~hmac=602f942d7e5d8b5db7e1e33c8e100d9f0af931587f8345a8fe1ba1a77a7e5857" alt="Loading" />
                {/* <img src="https://img.freepik.com/free-vector/company-employees-sharing-thoughts-ideas_74855-5469.jpg?w=740&t=st=1672858023~exp=1672858623~hmac=3f020b98814b7d4ce68e1b5c3459e1c021b5ab5ce2d3bcaf0eb1e6ee78e695d0" alt="Loading" /> */}
            </div>
            <div className="s-content-contentBx">
                <div className="s-content-content">
                      <h3>Professional Skills</h3>
                      <div className="p-s-list">
                      <span><InterpreterModeIcon sx={{color:"#229954",m:"-5px"}}/> &nbsp; Excellent communication and presentation skills</span>
                      <br/>
                      <span><GroupsIcon sx={{color:" #d35400 ",m:"-5px"}}/> &nbsp; Strong teamwork and collaboration abilities</span>
                      <br/>
                      <span><DoneAllIcon sx={{color:"#229954",m:"-5px"}}/> &nbsp; Proven problem-solving and debugging skills</span>
                      </div>                    
                </div>
            </div>
        </div>


        <div className="s-content-card">
            <div className="s-content-img">
                <img src="https://img.freepik.com/free-vector/certification-concept-illustration_114360-5171.jpg?w=740&t=st=1672858889~exp=1672859489~hmac=adb687a27aec77496b0ceb62bdb9f50f34ce4144e3b22d38c108e0ef5692a3a7" alt="Loading" />
            </div>
            <div className="s-content-contentBx">
                <div className="s-content-content">
                    <h3>Qualifications</h3>
                    <div className='q-s-list'>
                        <div className="list-heading">
                        <h4><VerifiedIcon sx={{color:"green",m:"-5px"}}/> &nbsp; Post Graduate</h4>
                        <h5 className='space-1'>2020-22</h5>
                        </div>                    
                      <sub>with a CGPA of 7.81</sub>
                      <div className="list-heading">
                      <h4><VerifiedIcon sx={{color:"green",m:"-5px"}}/> &nbsp; Under Graduate</h4>
                      <h5 className='space-2'>2017-20</h5>
                      </div>
                      <sub>with a CGPA of 7.65</sub>
                      <div className="list-heading">
                      <h4><VerifiedIcon sx={{color:"skyblue",m:"-5px"}}/> &nbsp; HSC </h4>
                      <h5 className='space-3'>2016-17</h5>
                      </div>
                      <sub>with an aggregate of 92.33%</sub>
                      <div className="list-heading">
                      <h4><VerifiedIcon sx={{color:"skyblue",m:"-5px"}}/> &nbsp; SSLC </h4>
                      <h5 className='space-4'>2014-15</h5>
                      </div>
                      <sub>with an aggregate of 95%</sub>                                   
                    </div>
                </div>
            </div>
        </div>

        <div className="s-content-card">
            <div className="s-content-img">
                <img src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=740&t=st=1672859254~exp=1672859854~hmac=2e2dd3d45ee25e4ef67406df710cbe2a1a9e84e34edb759da839da8e7015f5d0" alt="Loading" />
            </div>
            <div className="s-content-contentBx">
                <div className="s-content-content">
                    <h3>Areas of Expertise</h3>
                    <div className="a-s-list">
                        <h4><DashboardIcon sx={{color:"violet",m:"-5px"}}/> &nbsp; Effective UI</h4>
                        <h4><ComputerIcon sx={{color:"green",m:"-5px"}}/> &nbsp; Single-page application (SPA) development</h4>
                        <h4><DataArrayIcon sx={{color:"orangered",m:"-5px"}}/> &nbsp; Database design and management</h4>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SkillsContent;