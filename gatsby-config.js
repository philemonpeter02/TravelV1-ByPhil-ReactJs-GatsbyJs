module.exports = {
  siteMetadata: {
    title: `TravelV1 | Phil's`,
    description: `A minimal design travel gallery website. Designed and developed by Philemon Peter.`,
    author: `@philemonpeter02`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TraveV1 | Phil's`,
        short_name: `TravelV1`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
     `gatsby-plugin-offline`,
  ],
}
