import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {AiFillInstagram} from "react-icons/ai"

import footerStyles from "./Footer.module.scss"
import viber from "../assets/viber.svg"
import whatsapp from "../assets/whatsapp.svg"
import flagNg from "../assets/nigeria.svg"
import flagUk from "../assets/united-kingdom.svg"
import flagPl from "../assets/poland.svg"
import fbIcon from "../assets/facebook-color.svg"
import instaIcon from "../assets/instagram-color.svg"



const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulFooter{
        phoneNg
        phoneUk
        phonePl
        email
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.contacts}>
          
          <p className={footerStyles.contactHeading}>Contact us</p>
          <div className={footerStyles.phoneField}>
            <img src={flagNg} className={footerStyles.footerFlags}/>
            <p>{data.contentfulFooter.phoneNg}</p>
          </div>
          <div className={footerStyles.phoneField}>
            <img src={flagUk} className={footerStyles.footerFlags}/>
            <p>{data.contentfulFooter.phoneUk}</p>
          </div>
          <div className={footerStyles.phoneField}>
            <img src={flagPl} className={footerStyles.footerFlags}/>
            <p>{data.contentfulFooter.phonePl}</p>
          </div>
          <a href="mailto:o.wojcinski@gmail.com">o.wojcinski@gmail.com</a>
        </div>
        <div className={footerStyles.social}>
          <p className={footerStyles.contactHeading}>We are social</p>
          <a href="https://www.facebook.com/mypawcar" aria-label="instagram" target="_blank" rel="noopener noreferrer"><img src={fbIcon} className={footerStyles.footerIcon}/></a>
          <a href="https://www.instagram.com/mypawcar" aria-label="instagram" target="_blank" rel="noopener noreferrer"><img src={instaIcon} className={footerStyles.footerIcon}/></a>
          <a href="#" aria-label="viber" target="_blank" rel="noopener noreferrer"><img src={viber} className={footerStyles.footerIcon}/></a>
          <a href="#" aria-label="whatsapp" target="_blank" rel="noopener noreferrer"><img src={whatsapp} className={footerStyles.footerIcon}/></a>
        </div>
      </div>
      <div className={footerStyles.credits}>
        <div>
          <p>
            Designed and developed by{" "}
            <a
              href="https://www.linkedin.com/in/snebo/"
              title="Steven Nebo"
            >
              Steven Nebo
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
