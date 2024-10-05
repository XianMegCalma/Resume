import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="header">
        <h1>Xian Meg Calma</h1>
        <h2>DIRECTOR OF SOFTWARE ENGINEERING</h2>
      </div>
      
      <div className="contact">
        <p>Email: xianmegcalma23@gmail.com</p>
        <p>Phone:09069454022</p>
        <p>Location:Sto Tomas, Pampanga</p>
        <p>LinkedIn | Github</p>
      </div>

      <div className="section">
        <h3>EDUCATION</h3>
        <p>Bachelor of Science in Information Technology</p>
        <p>University of the Assumption</p>
      </div>

      <div className="section">
        <h3>SKILLS</h3>
        <p>HTML/CSS, Javascript, React, Node, MongoDB, React, Git/Github</p> 
      </div>

      <div className="section">
        <h3>WORK EXPERIENCE</h3>
        
        <div className="job">
          <h4>Aspiring programmer</h4>
          <p>June 2025 - Present | San Jose, CA</p>
          <ul>
            <li>Worked closely with backend developers to implement RESTful API integrations.</li>
            <li>Enhanced user experience by optimizing website speed and accessibility.</li>
            <li>Developed and maintained responsive web pages using React and CSS</li>
          </ul>
        </div>
        
        <div className="job">
          <h4>Junior Web Developer</h4>
          <p>PayPal, 2014 - 2019 | San Jose, CA</p>
          <ul>
            <li>Developed and launched websites for small businesses utilizing contemporary web technologies.</li>
            <li>Tailored WordPress themes and incorporated third-party plugins.</li>
          </ul>
        </div>
        
        <div className="job">
          <h4>Principal Software Engineer</h4>
          <p>Intel, 2020-2026</p>
          <ul>
            <li>Optimized storage processing through Apache Hadoop, resulting in a 47% capacity increase</li>
            <li>Led team in creating databases with 98% uptime</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
