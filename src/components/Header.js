import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";


import useWindowDimensions from "../hooks/windowDimension"
import HeaderStyles from "./Header.module.scss"



const Header = () => {

  const { width } = useWindowDimensions();

  let navMenu;
  if (width < 769) {
    navMenu = (
      <nav role="navigation">

        <div className={HeaderStyles.menuToggle}>
          <input 
          type="checkbox"
          />

          <span></span>
          <span></span>
          <span></span>
          
          <ul className={HeaderStyles.mobileMenu}>
            <a href="#"><li>Home1</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li className={HeaderStyles.lastChild}>Contact</li></a>
          </ul>
        </div>
      </nav>)
  } else {
    navMenu = (<nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              className={HeaderStyles.navItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <AnchorLink
              title="Our Services"
              className={HeaderStyles.navItem}
              to="/#services"
            >
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={HeaderStyles.navItem}
              to="/#about"
            >
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={HeaderStyles.navItem}
              to="/#contact"
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </nav>)
  }
  

  return (    
    <header className={HeaderStyles.mainHeader}>
      <Link className={HeaderStyles.title} to="/">
        <h1 className={HeaderStyles.siteLogo}>Pawcar</h1>
      </Link>
      {navMenu}
      {/* <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              className={HeaderStyles.navItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <AnchorLink
              title="Our Services"
              className={HeaderStyles.navItem}
              to="/#services"
            >
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={HeaderStyles.navItem}
              to="/#about"
            >
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className={HeaderStyles.navItem}
              to="/#contact"
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header
