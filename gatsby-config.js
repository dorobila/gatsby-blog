module.exports = {
  siteMetadata: {
    title: 'Dorobila',
    author: 'Daniel Dorobantu'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
