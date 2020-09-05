import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import HeaderStyles from "./Header.module.scss"

const Header = () => {
  return (    
    <header className={HeaderStyles.mainHeader}>
      <Link className={HeaderStyles.title} to="/">
        <h1 className={HeaderStyles.siteLogo}>Pawcar</h1>
      </Link>

      <nav>
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
            <Link
              className={HeaderStyles.navItem}
              to="/gallery"
            >
              Gallery
            </Link>
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
      </nav>
    </header>
  )
}

export default Header
