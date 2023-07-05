import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import profilePic from "../../assets/images/profilePic.jpg";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Resume".split("")}
            idx={15}
          />
        </h1>
        <div className="full">
          <div className="left">
            <div className="image">
              <img
                src="src/assets/images/profilePic.jpg"
                alt="Portrait"
              />
            </div>
            <div className="Contact">
              <h2>Contact Me</h2>
              <b>
                <em>Email:</em> 
                kristenroggero@gmail.com
              </b>
              <br />
              <b>
                <em>Mobile: </em>
                +1 (341) 777-8729
              </b>
            </div>
            
            <div className="Skills1">
              <h2>Technical Skills</h2>
              <ul>
                <li>HTML5/CSS3</li>
                <li>JavaScript(ES6+)</li>
                <li>React.js</li>
                <li>GitHub</li>
                <li>React</li>
              </ul>
            </div>
            <div className="Skills2">
              <h2>Soft Skills</h2>
              <ul>
                <li>
                  <b>English writing and composition</b></li>
                <li>Time management</li>
                <li>Problem solving</li>
                <li>Communication and collaboration</li>
              </ul>
            </div>
            <div className="Hobbies">
              <h2>Hobbies</h2>
              <ul>
                <li>Playing chess</li>
                <li>Crocheting</li>
                <li>Coding</li>
                <li>Swimming</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="name">
              <h1>Kristen Roggero</h1>
            </div>
            <div className="title">
              <h2>Web Developer</h2>
            </div>
            <div className="Summary">
              <h3>My Goal</h3>
              <b>
                To secure a challenging position in a reputable organization to
                expand my learning knowledge and skill, as well incorporate art and design
                into the evergrowing techical world.
              </b>
            </div>
            <div className="Education">
              <h2>Education</h2>
              <h3>California State University, East Bay</h3>
              <ul>
                <li>Aquired a Bachelor's Degree from four years of rigorous study.</li>
                <li>Two time recipient of Dean's List from a stellar academic grade point average.</li>
              </ul>
            </div>
            <div className="Experience">
              <h2>Experience</h2>
              <h3>Infosys - Front End Developer</h3>
              <h6>August 2022 to Present</h6>
              <ul>
                <li>
                  Collaborate with peers and mentors to create lively, engaging and stylish user interfaces.
                </li>
                <li>Test and problem solve to ensure that our design reaches its ultimate potential.</li>
              </ul>
              <h3>Revature - Full Stack Developer</h3>
              <h6>March 2022 to August 2022</h6>
              <ul>
                <li>
                  Actively engaged in web creative design and development by following the software development life cycle.
                </li>
                <li>Designing project & planning</li>
                <li>Working on designing</li>
              </ul>
            </div>
           
            <div className="project">
            <h2>Project Experience</h2>
              <h3>Banking Application</h3>
                <ul>
                  <li>
                    <b>While in charge of the user interface, I established a complimentary color scheme that promoted 
                      user-friendliness and ease of use, resulting in easy site direction. 
                    </b>
                  </li>
                </ul>
              <h3>Shopping Application</h3>
                <ul>
                  <li>
                    <b>Implemented all stages of the SDLC to complete a fully functional shoppping 
                      website similar to Amazon. My goal was to create the home page, the login page, and the 
                      checkout page.
                    </b>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pulse" />
    </>
  );
};

export default Portfolio;
