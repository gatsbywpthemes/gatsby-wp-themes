/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require("./config")

module.exports = {
  siteMetadata: {
    title: `Gatsby theme WordPress Starter Demo`,
    description: `Gatsby starter site for Gatsby Theme Wordpress Theme.`,
    author: `@pehaa`,
    wordPressUrl: config.wordpressUrl,
    siteUrl: "http://vcard.pehaa.com",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
      {
        name: `CodePen`,
        url: `https://codepen.io/pehaa`,
      },
      {
        name: `Instagram`,
        url: `#`,
      },
      {
        name: `Linkedin`,
        url: `#`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-wp-ginger`,
      options: {
        wordPressUrl: config.wordPressUrl,
        postsPrefix: ``,
        /* use false or slug, for example 'home' */
        staticHomePagePath: `home`,
        /* make sure to leave it as empty string if staticHomePage is false. 
        Otherwise make sur to set a path, for example: 'blog' */
        postsPath: `blog`,
        // paginationPrefix: `page`,
        postsPerPage: 2,
        disqus: `webstantly`,
        menuName: `MENU_1`,
        /* the file should be placed in static folder, set the file name,
        this image wil be used in a summary format - it should be square and minimum 144px x 144px */
        twitterSummaryCardImage: `Gatsby_Monogram.png`,
        /* available widgets: SocialFollow, RecentPosts, Categories, Tags */
        /*fonts: [
           "Anton",
          "Arya:400,700",
          // you can also specify font weights and styles
        ],*/
        addSiteMap: true,
        siteMapOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-wpcf7`,
      options: {
        wordPressUrl: config.wordPressUrl,
      },
    },
  ],
}
