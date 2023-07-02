import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

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
        <div className="container portfolio">
          <div className="leftside">
            <div className="image">
              <img src="img" alt="gfg-logo" />
            </div>
            <div className="Contact">
              <h2 className="contactTitle">Contact Me</h2>
              <p>
                <b>Email: </b> @gmail.com
              </p>
              <p>
                <b>Mobile: </b> 111
              </p>
            </div>
            <div className="education">
              <h2>Education</h2>
              <table>
                <tr>
                  <th>University </th>
                  <th> Duration</th>
                </tr>
                <tr>
                  <td>xyz</td>
                  <td>2020</td>
                </tr>
              </table>
            </div>
            <div className="skills">
              <h2 className="skillTitle"> Technical Skills</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Java</li>
              </ul>
              <h2>Soft Skills</h2>
              <ul>
                <li>Communication</li>
                <li>Collaboration</li>
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Multitasking</li>
                <li>English</li>
              </ul>
              <h2>Certifications</h2>
              <ul>
                <li>Certified Web Developer - freeCodeCamp</li>
                <li>codeCademy</li>
              </ul>
            </div>
            <div className="Hobbies">
              <h2>Hobbies</h2>
              <ul>
                <li>Playing chess</li>
                <li>Crocheting</li>
                <li>Reading</li>
                <li>Swimming</li>
              </ul>
            </div>
          </div>
          <div className="rightside">
            <h1 className="name">Kristen Roggero</h1>
            <div className="title">
              <h5>Web Developer</h5>
            </div>
            <div className="aboutMe">
              <h3>About Me</h3>
              <p>
                My goal as a developer is to create remarkable and inspiring
                user interfaces.
              </p>
            </div>
            <div className="experiences">
              <h3 className="experience">Experience</h3>
              <h4>Infosys - Software Engineer</h4>
              <p className="duration">August 2021 to December 2021</p>
              <p>Roles and Responsibilities... </p>
              <ul>
                <li>
                  Actively engaged in web creative design and development.
                </li>
                <li>Designing project & planning</li>
                <li>Working on designing</li>
              </ul>
              <br />
              <h4>Revature - Software Engineer</h4>
              <p className="duration">August 2021 to December 2021</p>
              <p>Roles and Responsibilities... </p>
              <ul>
                <li>
                  Actively engaged in web creative design and development.
                </li>
                <li>Designing project & planning</li>
                <li>Working on designing</li>
              </ul>
              <br />
              <h4>Merced County Library - Library Resource Technician</h4>
              <p className="duration">August 2021 to December 2021</p>
              <p>Roles and Responsibilities... </p>
              <ul>
                <li>
                  Actively engaged in web creative design and development.
                </li>
                <li>Designing project & planning</li>
                <li>Working on designing</li>
              </ul>
            </div>
            <div className="project">
              <h3 className="myProjects">Projects I've Done</h3>
              <h4>Project1</h4>
              <ul>
                <li>This project is based on html & used React</li>
              </ul>
              <h4>Project2</h4>
              <ul>
                <li>This project is based on html & used React </li>
              </ul>
              <h4>Project3</h4>
              <ul>
                <li>This project is based on html & used React </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
