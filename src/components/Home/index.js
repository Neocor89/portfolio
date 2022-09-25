//: ReactHooks
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'

//: Assets
import LogoPortfolio from '../../assets/images/logo-portfolio.png'
import AnimationLetters from '../AnimationLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'n']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v']

  const loadClass = useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return loadClass
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoPortfolio} alt="developer" />
            <AnimationLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimationLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={12}
            />
            <br />
          </h1>
          <h2>Frontend Developer / Backend Developer & Fullstack</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
