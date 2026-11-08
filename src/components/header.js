import { Link } from "gatsby"
import React from "react"

import { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { useTheme } from "../utils/theme"

function ThemeToggle() {
  const [theme, toggleTheme] = useTheme()
  return (
    <label className="theme-toggler nav-link">
      <input
        type="checkbox"
        // Flip logical state on every change event; the DOM's checked value is
        // transient (label+input can double-toggle before `change` dispatches)
        onChange={() => toggleTheme(theme === "dark" ? "light" : "dark")}
        checked={theme === "dark"}
      />
      {/* Icon can differ between SSR (unknown theme) and first client render */}
      {theme === "dark" ? (
        <span role="img" aria-label="Sun" suppressHydrationWarning>
          🌞
        </span>
      ) : (
        <span role="img" aria-label="Moon" suppressHydrationWarning>
          🌚
        </span>
      )}
    </label>
  )
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      visibilityClass: "",
    }
  }

  toggleMenu = value => {
    this.setState({ openMenu: value })
  }

  render() {
    const { openMenu, visibilityClass } = this.state
    return (
      <StaticQuery
        query={graphql`
          query headerLandingTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <nav
              id="header"
              className={`navbar navbar-expand-lg ${visibilityClass}`}
            >
              <div className="container">
                <Link className="navbar-brand" to="/">
                  {/* {data.site.siteMetadata.title} */}
                  Home
                </Link>
                <button
                  onClick={_ => this.toggleMenu(!openMenu)}
                  className={`navbar-toggler navbar-toggler-right ${
                    openMenu ? "" : "collapsed"
                  }`}
                  type="button"
                  aria-controls="navbarResponsive"
                  aria-expanded={openMenu}
                  aria-label="Toggle navigation"
                >
                  ⛛
                </button>

                <div
                  className={`collapse navbar-collapse ${
                    openMenu ? "show" : ""
                  }`}
                  id="navbarResponsive"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item my-auto ml-2">
                      <ThemeToggle />
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>
        )}
      />
    )
  }
}
