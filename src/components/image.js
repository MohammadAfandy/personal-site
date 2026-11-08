import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Image = ({ fileName, alt, className }) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 500, height: 500, layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  `)

  const found = allFile.nodes.find(n => n.relativePath === fileName)
  if (!found || !found.childImageSharp) return null

  return (
    <figure>
      <GatsbyImage
        image={found.childImageSharp.gatsbyImageData}
        alt={alt}
        className={className}
      />
    </figure>
  )
}

export default Image
