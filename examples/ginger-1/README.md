# Build your awesome website with Gatsby, WordPress and Ginger theme.

Introduction comes here...

## 🚀All that you need to get it running.

## Setting up your WordPress Website.

You will need a running WordPress installation. Gatsby will fetch the data from your WordPress website. There are some configuration options that you need to follow:

### Mandatory Plugins

You need to install and activate the [wpgraphql plugin.](https:www.wpgraphql.com/) You can download the latest release [here.](https:github.com/wp-graphql/wp-graphql/releases) Install it on your WordPress site from the .zip file.

### Permalinks structure

This step is essentialfor your internal links to be mapped adequately from your WordPress site to your Gatsby one.
You can configure your WordPress permalinks structure in `Settings > Permalinks`.
Make sure to check the **Post name** option.

### SEO Settings

Make sure to discourage search engines from indexing your WordPress website. You do not want to be penalized for the duplicated content. This can be done via `Settings > Reading`.

Another solution is to install the [Headless Node](https://wordpress.org/plugins/headless-mode/) WordPress plugin. Headless Node sets up a redirect for all users trying to access the site.

### Optional - Forms

Our themes are compatible with Contact Form 7 WordPress plugin. If you want to have a form on your website, you need to install Contact Form 7 and set up your form.

## Configure your Gatsby site - config.js

The default options are as follows:

```javascript
const config = {
  wordPressUrl: ``,
  pathPrefix: "",
  paginationPrefix: `page`,
  postsPerPage: 10,
  addWordPressComments: true,
  menuName: "main",
  slideMenuWidgets: [`SocialFollow`, `RecentPosts`, `Categories`, `Tags`],
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
  addColorModes: true,
}
```

### Options

**wordPressUrl** (required)  
Provide a url to your WordPress website.

---

**pathPrefix** (optional)  
`(default: "")`

You will use this setting if your gatsby website is hosted at something other than the root (/) of their domain.
Adding the path prefix requires two steps:

1. setting the pathPrefix (make sure to preceed it with a slash)
   example:

```javascript
pathPrefix: "/demo"
```

2. You have to add `--prefix-paths` flag when building your website:

```bash
gatsby build --prefix-paths
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

**addWordPressComments** (optional)  
`(type: Boolean, default: true)`

Whether comments funcionality should be activated, this is a global setting that will affect all posts. If `true`, the comments will be displayed for posts that have comments status set to "Allow Comments".

> Please note that we only support two levels of comments nesting.

---

**menuName** (optional)  
`(type: String, default: "main")`

The Ginger theme comes with one menu location, in the slide-in sidebar. You can use any of the menus that you had created on your WordPress site. Just paste the name that you had given to your WordPress menu here.

example:

```javascript
menuName: "Main Menu"
```

---

**slideMenuWidgets** (optional)  
`(type: Array, default: ['SocialFollow', 'RecentPosts', 'Categories', 'Tags'])`

The Ginger theme comes with one widget area in dthe slide-in sidebar below the navigation menu.
There are 4 widgets available: **SocialFollow**, **RecentPosts**, **Categories** and **Tags.**.  
The **SocialFollow** widget display links to your social profiles (see [`social setting`](#social))

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

The author of the website.

---

**description** (obligatory for a production website)  
`(type: Url, default: "Description Placeholder")`

The description of your website. Please note that Ginger theme uses the data fetched from WordPress (Settings > General > Tagline).

---

**social** (optional) <a name="social"></a>  
`(type: Array, default: social: [{name:`twitter`, url:`https:twitter.com/gatsbyjs`}])`

You can list your social profiles here. They will be displayed in the SocialFollows widget.

The supported profiles are: Behance, Codepen, Dev, Discord, Dribbble, Facebook, Github, Gitlab, Instagram, Linkedin, Mastodon, Medium, Pinterest, Reddit, Slack, Slideshare, Snapchat, Soundcloud, StackOverflow, Telegram, Tumblr, Twitter, Vimeo, Youtube.

example:

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

**fonts**<a name="config-fonts"></a>
`(type: Array, default: ["Abril Fatface", "Fira Sans"])`

Here you decide which fonts should be installed.  
The Ginger theme uses two typefaces **Abril Fatface** for headings and **Fira Sans** for the body text. Both of them are Google fonts.  
If you want to use other typefaces, you will have to modify the `fonts` setting in the config.js.  
You will also have to edit the `src/gatsby-plugin-theme-ui/index.js` file to assign your fonts as `heading` or `body`.

examples:

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

> Please note that the font family names are case sensitive.  
> You can also choose font variants that you want to install.

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

**addColorModes** (optional, experimental)  
`(default: true)`

If you want to add dark mode switcher.

> Please note that the dark mode may not be properly applied on some Gutenberg blocks with custom color settings.

## Overriding Theme Styles

### Overriding Typography Settings

You can override the typography settings in `ginger/configTypography.js`  
Uncomment each line that you wish to modify and set your values.

You can change the fonts settings to any system fonts or any of the Google fonts.
When choosing Google fonts please make sure that you add them also in `config.js` ([see here](#config-fonts))

> You can modify the baseFontSize, that is the root level font size which will affect the entire site. Please note that we use mostly rem variables. Changing the baseFontSize will scale the majority of elements.

### Overriding Color Settings

You can override any of the colors used by the theme in `configColors.js.` You can modify colors both in the default and dark mode.

### Overriding Sizes Settings

You can modify the breakpoints values as well as the `header`, `content` and `sidebar` sizes in `configSizes.js`
The breakpoints works in combination with the css properties represented as an array.
That means that the header size is 4.5rem for screen not larger than 40em, and 6rem for screen not larger than 64em.
If you add a third value in the header array, it will be applied for screens larger than 64em.

```javascript
/* configSizes.js */
const sizesSettings = {
  //breakpoints: ["40em", "64em"],
  sizes: {
    //header: ['4.5rem', '6rem'],
    //content: '52.5rem',
    //sidebar: '29.25rem',
  },
}
```

example:

```javascript
/* configSizes.js */
const sizesSettings = {
  //breakpoints: ["40em", "64em"],
  sizes: {
    header: ["4.5rem", "6rem", "4.5rem"],
    //content: '52.5rem',
    //sidebar: '29.25rem',
  },
}
```

### Further Changes

You can also style your website with css. This can be useful if you have to target some specific element or add some more complex styling. You should put your css in `styles/style.scss.` If you are not familiar with sass, you can write plain css in this file.
