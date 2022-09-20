import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimationLetters from '../AnimationLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const loadClass = useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return loadClass
  }, [])

  return (
    <>
      <div className="container contact-page">
        <Loader type="pacman" />
        <div className="text-zone">
          <h1>
            <AnimationLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
        </div>
      </div>
    </>
  )
}

export default Contact
