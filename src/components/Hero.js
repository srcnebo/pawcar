import React from 'react'

import HeroStyles from './Hero.module.scss'

const Hero = (props) => {
  return (
    <div className={HeroStyles.backgroundImage} 
      style={{
        "backgroundImage": `url(${props.image})`
      }}>
      <div className={HeroStyles.content}>
        <h1 className={HeroStyles.slogan}>{props.slogan}</h1>
        <p className={HeroStyles.subHeading}>{props.subHeading}</p>
      </div>
    </div>
  )
}

export default Hero