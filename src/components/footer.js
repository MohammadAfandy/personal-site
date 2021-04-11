import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  // faArrowUp
} from "@fortawesome/free-solid-svg-icons"
import {
  faTelegram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

// import { Link } from "react-scroll"

export default class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query footerTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
            allPersonalsJson {
              edges {
                node {
                  name
                  job
                  github
                  email
                  telegram
                  linkedin
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <footer>
              <div className="container py-4">
                <div className="row justify-content-center mt-2">
                  <ul className="list-style-none">
                    <li className="list-inline-item mr-4" alt="site title">
                      &copy; {new Date().getFullYear()}.{" "}
                      {data.site.siteMetadata.title}
                    </li>
                  </ul>
                </div>
                <div className="row justify-content-center mt-2">
                  <ul className="list-style-none">
                    <li className="list-inline-item mr-4">
                      <a
                        href={data.allPersonalsJson.edges[0].node.email}
                        target="_blank"
                        rel="noreferrer"
                        alt="email link"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href={data.allPersonalsJson.edges[0].node.github}
                        target="_blank"
                        rel="noreferrer"
                        alt="github link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href={data.allPersonalsJson.edges[0].node.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        alt="linkedin link"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={data.allPersonalsJson.edges[0].node.telegram}
                        target="_blank"
                        rel="noreferrer"
                        alt="twitter link"
                      >
                        <FontAwesomeIcon icon={faTelegram} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row justify-content-center mt-2">
                  <ul className="list-style-none">
                    <li className="list-inline-item mr-4" alt="site title">
                      Theme By {" "}
                      <a
                        href="https://github.com/gmlunesa/gatsby-starter-personal-portfolio"
                        target="_blank"
                        rel="noreferrer"
                      >
                        @gmlunesa
                      </a>
                    </li>
                    {/* <li className="list-inline-item ml-2">
                      <Link
                        to="header"
                        className="link"
                        smooth={true} 
                        role="button"
                        aria-label="To the top"
                      >
                        <FontAweso
                        eIcon icon=
                        faArrowUp
                        //  />
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </footer>
          </>
        )}
      ></StaticQuery>
    )
  }
}
