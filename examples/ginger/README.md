# Build your awesome website with Gatsby, WordPress and Ginger theme.

Introduction comes here...

## 🚀All that you need to get it running.

### Setting up your WordPress Website.

You will need a running WordPress installation. Gatsby will fetch the data from your WordPress website. There are some configuration options that you need to follow:

#### Mandatory Plugins

You need to install and activate the [wpgraphql plugin.](https:www.wpgraphql.com/) You can download the latest release [here.](https:github.com/wp-graphql/wp-graphql/releases) Install it on your WordPress site from the .zip file.

#### Permalinks structure

This step is essentialfor your internal links to be mapped adequately from your WordPress site to your Gatsby one.
You can configure your WordPress permalinks structure in `Settings > Permalinks`.
Make sure to check the **Post name** option.

#### SEO Settings

Make sure to discourage search engines from indexing your WordPress website. You do not want to be penalized for the duplicated content. This can be done via `Settings > Reading`.

Another solution is to install the [Headless Node](https://wordpress.org/plugins/headless-mode/) WordPress plugin. Headless Node sets up a redirect for all users trying to access the site.

#### Optional - Forms

Our themes are compatible with Contact Form 7 WordPress plugin. If you want to have a form on your website, you need to install Contact Form 7 and set up your form.

### Configure your Gatsby site - config.js

The default options are as follows:

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
  fonts: ["Abril Fatface", "Fira Sans"],
  gaTrackingId: 0,
  googleTagManagerId: 0,
  addSiteMap: false,
  siteMapOptions: {},
  useAlgoliaSearch: false,
}
```

#### Options

**wordPressUrl** (required)

Provide a url to your WordPress website.

**uploadsPath** (optional)

`(default: wp-content/uploads)`

A relative path to your uploads directory. `wp-content/uploads` is default for any WordPress installation. So unless you redefined the `UPLOADS` constant on your WordPress site, you don't have to change it.

---

**postsPrefix** (optional)

`(default: "")`

The prefix for the posts. If you change it, make sure to set the permalinks structure on your WordPress site accordingly.

---

**postsPath** (optional)

`(default: "")`

This is an important setting. It should be left empty if your WordPress homepage displays your latest posts. This corresponds to the default in Settings > Reading > Your homepage displays.
If you choose a static page and set a Posts page, you should use the Posts page slug as your postsPath.

Example

```javascript
postsPath: "blog"
```

---

**paginationPrefix** (optional)

`(default: 'page')`

Prefix for paginated content.
You should not modify it unless you changed this on your WordPress site.

---

**postsPerPage** (optional)

`(type: Integer, default: 10)`

The number of posts per archive page.

---

**addComments** (optional)

`(type: Boolean, default: true)`

Whether comments funcionality should be activated, this is a global setting that will affect all posts. If `true`, the comments will be displayed for posts that have comments status set to "Allow Comments".
Please note that we only support two levels of comments nesting.

---

**menuName** (optional)
`(type: String, default: "main")`

The Ginger theme comes with one menu location, in the slide-in sidebar. You can use any of the menus that you had created on your WordPress site. Just paste the name that you had given to your WordPress menu here.

example:

```javascript
menuName: "Main Menu"
```

---

**_siteUrl_** (obligatory for a production website)
`(type: Url, default: "https://example.com")`

You can use the placeholder value `https://example.com` in the developement phase but once your site is built for production you should provide the url of your destination site

---

**title** (obligatory for a production website)

`(type: Url, default: "Blog Title Placeholder")`

The title of your website. Please note that Ginger theme uses the data fetched from WordPress (Settings > General > Site Title).

---

**author** (optional)

`(type: Url, default: "Name Placeholder")`

The author of the website

---

**description** (obligatory for a production website)

`(type: Url, default: "Description Placeholder")`

The description of your website. Please note that Ginger theme uses the data fetched from WordPress (Settings > General > Tagline).

---

**social** (optional)

`(type: Array, default: social: [{name:`twitter`, url:`https:twitter.com/gatsbyjs`}])`

You can list your social profiles here. They will be displayed in the SocialFollows widget.

The supported profiles are: Behance, Codepen, Dev, Discord, Dribbble, Facebook, Github, Gitlab, Instagram, Linkedin, Mastodon, Medium, Pinterest, Reddit, Slack, Slideshare, Snapchat, Soundcloud, StackOverflow, Telegram, Tumblr, Twitter, Vimeo, Youtube.

Example:

```javascript
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
    name: `Discord`,
    url: `https://gatsby.dev/discord`
  }
],
```

And if you have no social profiles:

```javascript
social: []
```

---

**twitterSummaryCardImage**

`(default: Gatsby_Monogram.png)`

When sharing your content on Twitter, articles will use their featured image for the Twitter card.
Other pages will use a common twitterSummaryCardImage. Please make sure to place it in the `/static` folder. Your image should be square and at least 144px x 144px.

---

**fonts**

`(type: Array, default: ["abril fatface", "fira sans"])`

Here you decide what fonts should be installed.
The Ginger theme uses two typefaces **Abril Fatface** for headings and **Fira Sans** for the body text. Both of them are Google fonts.
If you want to use other typefaces, you will have to modify the `fonts` setting in the config.js. You will also have to edit the `src/gatsby-plugin-theme-ui/index.js` file to assign your fonts as `heading` or `body`.

Examples:

If you want to use system fonts :

```javascript
/* config.js */

fonts: []
```

```javascript
/* src/gatsby-plugin-theme-ui/index.js */
fonts: {
  heading: "Georgia, serif",
  body: "Arial, sans-serif",
},
fontWeights: {
  heading: 700,
},
```

If you want to use some other Google Fonts:

```javascript
/* config.js */

fonts: ["Alfa Slab One", "Raleway:400,400i,700,700i"]
```

```javascript
/* src/gatsby-plugin-theme-ui/index.js */
fonts: {
  heading: "Alfa Slab One, serif",
  body: "Raleway, sans-serif",
},
fontWeights: {
  body: 400,
},
```

Please note that the font family names are case sensitive. You can choose font variants that you want to install.

---

**gaTrackingId** (optional)
`(default: 0)`

---

Your google analytics UA code. Set to 0 to disable Google Analytics.

---

**googleTagManagerId** (optional)

`(default: 0)`

Your google Tag Mangager Id. Set to 0 to disable this funcionality.

---

**addSitemap** (optional)

`(type: boolean, default: false)`

Whether you want to create a site map. If set to `true`, please make sure that you provide your production gatsby website url in the SiteUrl option.

---

**siteMapOptions** (optional)

`(type: Object, default: {})`

These options are passed to the [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/) options so please refer to [gatsby-plugin-sitemap options](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#options) for the details.

---

**useAlgoliaSearch** (optional, experimental)

`(default: false)`

If you want to use Algolia with your project, make sure to include `.env` file in the project root:

```
GATSBY_ALGOLIA_APP_ID=your-app-id
GATSBY_ALGOLIA_SEARCH_KEY=your-algolia-search-key
ALGOLIA_ADMIN_KEY=your-algolia-admin-key
```
