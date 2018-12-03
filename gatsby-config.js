const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Watch What?',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Watch What?',
        short_name: 'Watch What?',
        description:
          'Box Office Movie Film Notification for Sexual Assualt & Depression Related Triggers',
        start_url: '/',
        background_color: 'white',
        theme_color: '#663399',
        display: 'standalone',
        icon: `${__dirname}/src/images/watch-what-icon.png`,
        legacy: true, // enable for apple to display icons
      },
    },
    'gatsby-plugin-offline',
  ],
  mapping: {
    'FilmNode.filmIdJoin': 'MarkdownRemark.frontmatter.filmId',
  },
}
