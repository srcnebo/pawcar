import React from "react"
import {HiOutlineMail} from "react-icons/hi"
import {BsHouse} from "react-icons/bs"
import {FaInstagram} from "react-icons/fa"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.contacts}>
        <a href="www.instagram.com"><FaInstagram size={20}/> @mypawcar</a>
        <p><BsHouse/> Address goes here</p>
        <p><HiOutlineMail/>  wojcinska.natalia@gmail.com</p>
      </div>
      <div className={footerStyles.credits}>
        <div>
          <p>
            Icon made by{" "}
            <a
              href="https://www.flaticon.com/authors/mynamepong"
              title="mynamepong"
            >
              mynamepong
            </a>{" "}
            and{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
