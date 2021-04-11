import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons"
import { useStaticQuery, graphql } from "gatsby"

export default function Links() {
  const data = useStaticQuery(graphql`
    query linkPersonalQuery {
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
  `)
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item">
        <a
          href={data.allPersonalsJson.edges[0].node.email}
          target="_blank"
          rel="noreferrer"
          alt="email link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href={data.allPersonalsJson.edges[0].node.github}
          target="_blank"
          rel="noreferrer"
          alt="github link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href={data.allPersonalsJson.edges[0].node.linkedin}
          target="_blank"
          rel="noreferrer"
          alt="linkedin link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href={data.allPersonalsJson.edges[0].node.telegram}
          target="_blank"
          rel="noreferrer"
          alt="telegram link"
        >
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </li>
    </ul>
  )
}
