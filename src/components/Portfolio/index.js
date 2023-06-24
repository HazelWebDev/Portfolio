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
        <div className="full">
          <div className="left">
            <div className="image">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20220202083519/gfglogo.png"
                alt="gfg-logo"
              />
            </div>
            <div className="Contact">
              <h2>Contact</h2>
              <p>
                <b>Email id:</b>xyz@gmail.com
              </p>
              <p>
                <b>Mobile no :</b>1234567890
              </p>
            </div>
            <div className="Skills">
              <h2>Skills</h2>
              <ul>
                <li>
                  <b>Programming Languages : Python, Java, C++</b>
                </li>
                <li>
                  <b>Frontend : HTML5, CSS3, JavaScript, React</b>
                </li>
                <li>
                  <b>Backend : python Node.js</b>
                </li>
              </ul>
            </div>
            <div className="Language">
              <h2>Language</h2>
              <ul>
                <li>English</li>
                <li>Hind di</li>
              </ul>
            </div>
            <div className="Hobbies">
              <h2>Hobbies</h2>
              <ul>
                <li>Playing cricket</li>
                <li>Swimming</li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="name">
              <h1>GeeksforGeeks</h1>
            </div>
            <div className="title">
              <p>Web Developer</p>
            </div>
            <div className="Summary">
              <h2>Summary</h2>
              <p>
                To secure a challenging position in a reputable organization to
                expand my learning knowledge and skill
              </p>
            </div>
            <div className="Experience">
              <h2>Experience</h2>
              <h3>Abc webdev pvt ltd - Senior Web Developer</h3>
              <p>January 2022 to Present</p>
              <ul>
                <li>
                  Actively engaged in web creative design and development.
                </li>
                <li>Designing project & planning</li>
              </ul>
              <h3>Xyz webdev pvt ltd - junior web developer</h3>
              <p>August 2021 to December 2021</p>
              <ul>
                <li>
                  Actively engaged in web creative design and development.
                </li>
                <li>Designing project & planning</li>
                <li>Working on designing</li>
              </ul>
            </div>
            <div className="Education">
              <h2>Education</h2>
              <table>
                <tr>
                  <th>University/college </th>
                  <th>Passing year </th>
                  <th>percentage/cgpa</th>
                </tr>
                <tr>
                  <td>xyz</td>
                  <td>2020</td>
                  <td>8.9</td>
                </tr>
                <tr>
                  <td>pqr</td>
                  <td>2018</td>
                  <td>89%</td>
                </tr>
              </table>
            </div>
            <div className="project">
              <ul>
                <li>
                  <h2>Project1</h2>
                  <p>This project is based on html & used React</p>
                </li>
                <li>
                  <h2>Project2</h2>
                  <p>This project is based on html & used React</p>
                </li>
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
