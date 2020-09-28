import React, { useState } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { graphql, useStaticQuery } from "gatsby"

import "../styles/bulma.scss"
import logo from "../assets/logo.png"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulServices {
        edges {
          node {
            title
            systemName
          }
        }
      }
    }
  `)

  const [isMenuActive, setIsMenuActive] = useState(false)

  const nameOrder = ["truck", "heavy", "parts", "import"]

  let servicesArray = []

  // Sort the array of objects based on nameOrder array
  for (const service of data.allContentfulServices.edges) {
    const inputIndex = nameOrder.findIndex(
      value => value === service.node.systemName
    )
    if (inputIndex >= 0) {
      servicesArray[inputIndex] = service
    }
  }
  // Filter empty elements
  servicesArray = servicesArray.filter(() => true)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} id="navbar-logo" alt="pawcar-logo" />
        </Link>

        <div
          role="button"
          className={`navbar-burger burger ${isMenuActive ? "is-active" : ""}`}
          onClick={() => setIsMenuActive(prevIsMenuActive => !prevIsMenuActive)}
          onKeyDown={() =>
            setIsMenuActive(prevIsMenuActive => !prevIsMenuActive)
          }
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavBar"
          tabIndex={0}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div
        id="mainNavBar"
        className={`navbar-menu ${isMenuActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link" href="#">
              Services
            </div>
            <div className="navbar-dropdown">
              <AnchorLink
                title="Our Services"
                className="navbar-item"
                to={`#${servicesArray[0].node.systemName}`}
              >
                {servicesArray[0].node.title}
              </AnchorLink>
              <AnchorLink
                title="Agriculture and construction machinery"
                className="navbar-item"
                to={`#${servicesArray[1].node.systemName}`}
              >
                {servicesArray[1].node.title}
              </AnchorLink>
              <AnchorLink
                title="Parts new and used"
                className="navbar-item"
                to={`#${servicesArray[2].node.systemName}`}
              >
                {servicesArray[2].node.title}
              </AnchorLink>
              <AnchorLink
                title="Our Services"
                className="navbar-item"
                to={`#${servicesArray[3].node.systemName}`}
              >
                {servicesArray[3].node.title}
              </AnchorLink>
            </div>
          </div>
          <AnchorLink className="navbar-item" to="/#about">
            About
          </AnchorLink>
          <Link className="navbar-item" to="/gallery">
            Gallery
          </Link>
          <AnchorLink className="navbar-item" to="/#contact">
            Contact
          </AnchorLink>
        </div>
      </div>
    </nav>
  )
}

export default Header
