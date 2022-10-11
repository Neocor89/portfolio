import './index.scss'
import AnimationLetters from '../AnimationLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  //: Animation Management
  const loadClass = useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return loadClass
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimationLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
            I master the different technical steps of the creation of a web
            application: from the understanding of the user needs, to the
            frontend or backend development, I am passionate about the
            innovations of the decentralized web3.0 blockchain.
          </p>
          <p>
            Openclassrooms certified web developer, with 1 year experience. I'm
            a computer geek and learn new technologies, I'm able to realize your
            projects with different programming languages (Javascript, PHP, SQL,
            Nodejs, ... React) and I've created personal projects, including a
            youtube and airbnb clone site.
          </p>
          <p>
            Having developed several diverse and compelling web applications
            based on Javascript, React and SQL technologies. In perpetual
            training, always looking for innovations, new programs and
            development tools, adept at clean code and the DRY principle. I like
            to go to the end of the projects and have a final product impeccable
            in all points.
          </p>
        </div>

        <div className="stage-cube-container">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#03e0ff" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#e34e26" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#2260ac" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#f0cd35" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDatabase} color="#ca0924" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#d94634" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
