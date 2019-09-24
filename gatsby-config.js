module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    author: `iZettle`,
    siteUrl: `https://nostalgic-lalande-2304b6.netlify.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "4zLB1uOlBxP2da9sm6iuzgtt",
        homeSlug: "home",
        version: getVersion(),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /.svg$/
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Izettle`,
        short_name: `Izettle`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `Izettle`,
      },
    },
  ],
}

function getVersion ()  {
  if (process.env.NODE_ENV === "production" && process.env.APP === 'preview') {
    return 'draft'
  } else if (process.env.NODE_ENV === "production") {
    return 'published'
  } else {
    return 'draft'
  }
}
