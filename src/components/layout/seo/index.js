import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({
  lang,
  description,
  title,
  og_description,
  og_image,
  og_title,
  twitter_description,
  twitter_image,
  twitter_title,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
