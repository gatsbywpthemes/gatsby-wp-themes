const autoprefixer = require('autoprefixer')
module.exports = options => {
  return {
    siteMetadata: {
      title: `Gatsby theme WordPress Starter Demo`,
      description: `Gatsby starter site for Gatsby Theme Wordpress Theme.`,
      author: `@alexadark`,
    },
    plugins: [
      `gatsby-theme-algolia`,
      {
        resolve: `gatsby-theme-blog-data`,
        options,
      },
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-theme-ui`,
      // 'gatsby-theme-style-guide',
      `gatsby-plugin-sass`,
      {
        resolve: 'gatsby-plugin-postcss',
        options: {
          postCssPlugins: [
            autoprefixer({
              overrideBrowserslist: ['last 2 versions'],
            }),
          ],
        },
      },
    ],
  }
}
