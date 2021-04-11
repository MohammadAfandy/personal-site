import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faCode,
} from "@fortawesome/free-solid-svg-icons"

import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                  language
                  github
                }
              }
            }
            allLanguagesJson {
              edges {
                node {
                  id
                  language
                }
              }
            }
            allJobsJson {
              edges {
                node {
                  name
                  position
                  date
                  description
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <section className="content" id="content">
              <div className="container">
                {/* + Job subsection */}
                <div className="subsection">
                  <h2>
                    <span className="dot"></span>Where have I{" "}
                    <span className="word">worked</span>?
                  </h2>

                  {data.allJobsJson.edges.map(({ node }, index) => (
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title">
                          <h3>{node.name}</h3>
                          <h4>
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="mr-2"
                            />{" "}
                            {node.position}
                          </h4>
                          <h4>
                            <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                            {node.date}
                          </h4>
                        </div>

                        <div className="card-text">
                          {node.description.map((v) => (
                            <div>◆ {v}</div>
                          ))}
                        </div>
                      </div>
                      <div className="card-footer">
                        <a
                          href={node.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                {/* - Job subsection */}

                {/* + Technologies subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>What do I{" "}
                    <span className="word">know</span>?
                  </h2>
                  <div className="row">
                    {data.allLanguagesJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card">
                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              {node.language}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* - Technologies subsection */}

                {/* + School subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>Where have I{" "}
                    <span className="word">study</span>?
                  </h2>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>SMK Negeri 4 Kota Tangerang</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Software Engineering
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          Jun 2013
                        </h4>
                      </div>

                      {/* <div className="card-text">
                        I earned my Bachelor's Degree in Computer Science in
                        Tokyo Institute of Technology. For my undergraduate
                        thesis, I wrote this model motion development through
                        convolutional neural networks.
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* - School subsection */}

                {/* + Projects subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>What have I{" "}
                    <span className="word">experimented with</span>?
                  </h2>
                  <div className="row">
                    {data.allProjectsJson.edges.map(({ node }, index) => (
                      <div className="col-lg-6" key={index}>
                        <div className="card mb-4 card-project">
                          <div className="card-body">
                            <div className="card-title">
                              <h3>{node.project}</h3>
                              <h4>
                                <FontAwesomeIcon
                                  icon={faCode}
                                  className="mr-2"
                                />
                                {node.language}
                              </h4>
                              <h4>
                                <FontAwesomeIcon
                                  icon={faGithub}
                                  className="mr-2"
                                />
                                <a
                                  href={node.github}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Code
                                </a>
                              </h4>
                            </div>

                            <div className="card-text">{node.description}</div>
                          </div>
                          <div className="card-footer">
                            <a
                              href={node.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* - Projects subsection */}
            </section>
          </>
        )}
      />
    )
  }
}
