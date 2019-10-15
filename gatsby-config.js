module.exports = {
  siteMetadata: {
    title: 'Blog',
    author: 'Daniel Dorobantu'
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            }

          },
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: 'Dark+ (default dark)'
            }
          }
        ],
      },
    },
  ]
}
