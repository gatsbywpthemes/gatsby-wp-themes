# Build your awesome website with Gatsby, WordPress and Ginger theme.

Introduction comes here...

## 🚀 What you need to get it running?

### Setting up your WordPress Website.

You will need a running WordPress installation. Gatsby will fetch the data from your WordPress website. There are some configuration options that you need to follow:

#### Mandatory Plugins

You need to install and activate the [wpgraphql plugin.](https:www.wpgraphql.com/) You can download the latest release from [here.](https:github.com/wp-graphql/wp-graphql/releases) and install it on your WordPress site from the .zip file.

#### Permalinks structure

This step is important for your internal links to be properly mapped from your WordPress site to your Gatsby one.
You can configure your WordPress permalinks structure in `Settings > Permalinks`. Make sure to check the **Post name** option.
Another solution is to install the [Headless Node](https://wordpress.org/plugins/headless-mode/) WordPress plugin. Headless Node sets up a redirect for all users trying to access the site

#### SEO Settings

Make sure to discourage search engines from indexing your WordPress website. You do not want to be penalized for the duplicated content. This can be done via `Settings > Reading`.

#### Optional - Forms

Our themes are compatible with Contact Form 7 WordPress plugin. If you want to have a form on your website, you need to install Contact Form 7 and set up your form.

### Configure your Gatsby site - config.js

The default configuration of your gatsby site is as follows

```javascript
const config = {
  wordPressUrl: ``,
  uploadsPath: `wp-content/uploads`,
  postsPrefix: ``,
  postsPath: ``,
  paginationPrefix: `page`,
  postsPerPage: 10,
  addComments: true,
  menuName: "main",
  gingerWidgets: [`SocialFollow`, `RecentPosts`, `Categories`, `Tags`],
  siteUrl: "https://example.com",
  title: `Blog Title Placeholder`,
  author: `Name Placeholder`,
  description: `Description placeholder`,
  social: [
    {
      name: `twitter`,
      url: `https:twitter.com/gatsbyjs`,
    },
  ],
  twitterSummaryCardImage: `Gatsby_Monogram.png`,
  fonts: ["abril fatface", "fira sans"],
  gaTrackingId: 0,
  googleTagManagerId: 0,
  addSiteMap: false,
  siteMapOptions: {},
  useAlgoliaSearch: false,
}
```

#### Options

**wordPressUrl** (required)

required, provide a url to your WordPress website

**uploadsPath** (optional)

`(default wp-content/uploads)`

A relative path to your uploads directory. This is a default value for any WordPress installation. So unless you redefined the `UPLOADS` constant on your WordPress site, you don't have to change it.

**postsPrefix** (optional)

`(default "")`

The prefix for the posts. If you change it, make sure to set the permalinks structure on your WordPress site accordingly.

**postsPath** (optional)

`(default "")`

This is an important settings. It should be left empty if your WordPress homepage displays your latest posts. This corresponds to the default setting in Settings > Reading > Your homepage displays.
If you choose a static page and set a Posts page, you should use the Posts page slug as your postsPath.

Example postsPath: 'blog'

**paginationPrefix** (optional)

`(default 'page')`

The page number prefix for paginated content.
You should not modify it unless you changed this on your WordPress site.

**postsPerPage** (optional)

`(type Integer, default 10)`

This setting will disappear - we will retrieve this value from your WordPress settings.
The number of posts per archive page.

**addComments** (optional)

`(type Boolean, default true)`

Whether comments funcionnality should be activated. This is a global setting that will affect all posts. If `true`, the comments will be displayed for posts that have comments status set to "Allow Comments" on the WordPress side.
Please note, that we only support two levels of comments nesting.

**menuName** (optional)
`(type String, default "main")`

Ginger theme comes with one menu location, in the slide-in sidebar. You can use any of the menus that you had created on your WordPress site. Just paste the name that you had given to your WordPress menu here.

example: `menuName: "Main Menu"`

**gaTrackingId** (optional)
`(default 0)`

Your google analytics UA code. Set to 0 to disable Google Analytics.

**googleTagManagerId** (optional)
`(default 0)`

Your google Tag Mangager Id. Set to 0 to disable this funcionnality.

**addSitemap** (optional)
`(Type boolean, default false)`

Whether you want to create a site map. If set to `true`, please make sure that you provide your production gatsby website url in the SiteUrl option.

**siteMapOptions** (optional)
`(Type Object, default {})`

These options are passed to the [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/) options so please refer to [gatsby-plugin-sitemap options](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#options) for the details.
