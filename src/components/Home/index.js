import { Link } from 'react-router-dom'
import LogoPortfolio from '../../assets/images/logo-portfolio.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br /> I'm
          <img src={LogoPortfolio} alt="developer" />
          en
          <br />
          dev web
        </h1>
        <h2>Frontend Developer / Backend Developer / Fullstack Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
