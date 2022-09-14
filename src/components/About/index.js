import './index.scss'
import AnimationLetters from '../AnimationLetters'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimationLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            index={15}
          />
        </h1>
        <p>Select inpact text for my personality</p>
        <p>Select inpact text for my personality</p>
        <p>Select inpact text for my personality</p>
      </div>
    </div>
  )
}

export default About
