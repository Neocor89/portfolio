import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from 'react-loaders'
import AnimationLetters from '../AnimationLetters'
import './index.scss'
import portfolioData from '../../../src/data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const loadClass = useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return loadClass
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="portfolio-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="list-container_image" key={idx}>
              <img
                src={port.cover}
                onClick={() => window.open(port.url)}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <div className="info-container"></div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1 className="">
            <AnimationLetters
              index={15}
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            />
          </h1>
          <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
