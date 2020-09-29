import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {AiFillInstagram} from "react-icons/ai"

import footerStyles from "./Footer.module.scss"



const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulFooter{
        address
        postcode
        city
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.contacts}>
          <p className={footerStyles.contactHeading}>Contact us:</p>
          <p>{data.contentfulFooter.address}</p>
          <p>{`${data.contentfulFooter.postcode} ${data.contentfulFooter.city}`}</p>
          <a href="mailto:o.wojcinski@gmail.com">o.wojcinski@gmail.com</a>
        </div>
        <div className={footerStyles.social}>
          <p className={footerStyles.contactHeading}>Follow us:</p>
          <a href="https://www.instagram.com/mypawcar" aria-label="instagram" target="_blank" rel="noopener noreferrer"><AiFillInstagram size={30}/></a>
        </div>
      </div>
      <div className={footerStyles.credits}>
        <div>
          <p>
            Designed and developed by{" "}
            <a
              href="https://www.linkedin.com/in/snebo/"
              target="_blank"
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
