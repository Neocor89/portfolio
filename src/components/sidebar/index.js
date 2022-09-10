import { Link, NavLink } from 'react-router-dom'

//: scss
import './index.scss'

//: Images
import LogoPortfolio from '../../assets/images/logo-portfolio.png'
import LogoSubtitle from '../../assets/images/logo-subtitle.png'

//: Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoPortfolio} alt="brand logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="name logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/benoit-cortes/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/Neocor89">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="CREATE MY NEW PRO TWITTER ACCOUNT AND ADD LINK"
        >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href=" STOP CODING IN THIS FIELD">
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar