import { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimationLetters from '../AnimationLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const loadClass = useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return loadClass
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_kt2okta',
        'template_4rtjq0l',
        refForm.current,
        'xNNO1vlD8Jb0tk2rt'
      )
      .then(
        () => {
          alert('Email sent successfully 🎉')
          window.location.reload(false)
        },
        () => {
          alert('Failed sent please try again or use social-media Links !')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimationLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
            If you wish to contact me for freelance projects, a position in a
            company, or any other request or question do not hesitate to contact
            me using the link below
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    htmlFor="name"
                    name="name"
                    placeholder="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    htmlFor="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="subject"
                    type="text"
                    name="subject"
                    htmlFor="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Ben Devweb
          <br />
          France
          <br />
          Bourgogne Auxerre,
          <br /> 89000
          <br />
          <span>bendevweb@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[47.4759, 3.34]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[47.4759, 3.34]}>
              <Popup className="layout-popup">
                Ben Lives here, come over for a cup of coffee ☕
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
