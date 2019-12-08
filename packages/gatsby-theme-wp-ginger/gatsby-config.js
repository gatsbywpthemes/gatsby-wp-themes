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

  if (options.gingerWidgets) {
    options.widgetAreas = {
      slideMenu: {
        widgets: options.gingerWidgets,
      },
    }
  }

  const plugins = [
    {
      resolve: `gatsby-theme-blog-data`,
      options: {
        addAlgoliaSearch: false,
        addColorModes: true,
        ...options,
        overrideBlogTemplate: `gatsby-theme-wp-ginger/src/templates/posts-query.js`,
        overridePostTemplate: `gatsby-theme-wp-ginger/src/templates/post-query.js`,
        overrideCategoryTemplate: `gatsby-theme-wp-ginger/src/templates/category-query.js`,
        overrideTagTemplate: `gatsby-theme-wp-ginger/src/templates/tag-query.js`,
        overrideUserTemplate: `gatsby-theme-wp-ginger/src/templates/user-query.js`,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
        once: true,
        selector: `[data-sal], .entry-content p, .entry-content blockquote, .entry-content h1,.entry-content h2,.entry-content h3,.entry-content h4,.entry-content h5,.entry-content h6, .entry-content .animate-on-scroll`,
      },
    },
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

  /**
   * Conditionally add google fonts plugin
   * to avoid errors on build
   */
  if (options.addAlgoliaSearch) {
    plugins.push(`gatsby-theme-algolia`)
  }

  return {
    siteMetadata: {
      title: `Gatsby theme WordPress Starter Demo`,
      description: `Gatsby starter site for Gatsby Theme Wordpress Theme.`,
      author: `@pehaa`,
    },
    plugins,
  }
}
