module.exports = {
  siteMetadata: {
    title: `ols.engineer`,
    description: `jake ols — software engineer in san francisco.`,
    author: `@jakeols`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `ols.engineer`,
        short_name: `ols`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#575757`,
        display: `minimal-ui`,
        icon: `src/images/ols.png`,
      },
    },
  ],
}
