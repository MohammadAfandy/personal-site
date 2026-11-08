/**
 * SEO component for the Gatsby Head API: render inside a page's
 * exported Head component (see src/pages/*.js).
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ description, lang, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <html lang={lang || `en`} />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name={`description`} content={metaDescription} />
      <meta property={`og:title`} content={`${title} | ${site.siteMetadata.title}`} />
      <meta property={`og:description`} content={metaDescription} />
      <meta property={`og:type`} content={`website`} />
      <meta name={`twitter:card`} content={`summary`} />
      <meta name={`twitter:creator`} content={site.siteMetadata.author} />
      <meta name={`twitter:title`} content={`${title} | ${site.siteMetadata.title}`} />
      <meta name={`twitter:description`} content={metaDescription} />
    </>
  )
}
