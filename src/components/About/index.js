import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am a person of many passions, the most favored being art and creativity. This is precisely what called me to
              front-end development: the imaginative synergy between art and technology. I am fascinated by the ability to create unique and
              inspirational websites.
            </p>
            <p align="LEFT">
            Additionally, I'm an enthusiastic learner who is always looking to expand her skills and knowledge. 
            I'm fascinated by the intersection of art and technology and sees web development as an opportunity to create beautiful and functional digital experiences.
            As a front-end developer, I combine my artistic background with technical skills to create visually stunning and user-friendly websites. 
            HTML, CSS, and JavaScript, stand as my foundation. Given how fast the tech world moves, I'm always learning new frameworks and technologies to stay ahead of the curve.
            </p>
            <p>
            I'm a team player who thrives in collaborative environments. I'm a clear communicator and work closely with designers, project managers, and other developers to ensure that projects are completed on time and to the highest quality.
            In my free time, I enjoy exploring Austin's vibrant arts and culture scene. I'm also an avid reader and love writing short stories in my spare time.
            </p>
          </div>
  
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
        <Loader type="line-scale-pulse-out" />
      </>
    )
  }
  
  export default About