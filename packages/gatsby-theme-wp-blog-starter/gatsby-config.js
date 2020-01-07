module.exports = options => {
  options.fonts = options.fonts || ['abril fatface', 'fira sans']
  options.customFonts = []
  if (options.fonts) {
    options.customFonts = options.fonts.filter(
      el =>
        el.toLowerCase().indexOf(`fira sans`) === -1 &&
        el.toLowerCase().indexOf(`abril fatface`) === -1
    )
  }
  const plugins = [
    `gatsby-theme-algolia`,
    {
      resolve: `gatsby-theme-blog-data`,
      options,
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sass`,
  ]

  /**
   * Conditionally add google fonts plugin
   * to avoid errors on build
   */
  if (options.customFonts.length) {
    plugins.push({
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: options.customFonts,
        display: 'swap',
      },
    })
  }
  return {
    siteMetadata: {
      title: `Gatsby theme WordPress Starter Demo`,
      description: `Gatsby starter site for Gatsby Theme Wordpress Theme.`,
      author: `@alexadark`,
    },
    plugins,
  }
}
