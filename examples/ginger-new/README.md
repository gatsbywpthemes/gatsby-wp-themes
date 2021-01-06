# Build your awesome website with Gatsby, WordPress and Ginger theme.

Introduction comes here...

## 🚀All that you need to get it running.

## Setting up your WordPress Website.

You will need a running WordPress installation. Gatsby fetches the data from your WordPress website. There are some configuration options that you need to follow:

## Requirements<a name="wp-requirements"></a>

### Mandatory plugins: WPGraphQL

You need to install and activate the [wpgraphql plugin.](https:www.wpgraphql.com/) You can download the latest release [here.](https:github.com/wp-graphql/wp-graphql/releases) Install it on your WordPress site from the .zip file.

### Permalinks structure

In order that the plugin works correctly, your WordPress installation must have pretty permalinks enabled (commonly oprovided by the majority of hosting servives). Also, The permalink structure **must not** be the default (plain, `http://example.com/?p=123.`) WordPress permalink structure. This can be done via your WordPress admin area in Settings > Permalinks.

### Redirecting your WordPress website

If you want to redirect all non logged-in users accessing your WordPress site URL to your gatsby website, we recommend installing the [Headless Node](https://wordpress.org/plugins/headless-mode/) WordPress plugin.

### Forms

Ginger theme is compatible with Contact Form 7 WordPress plugin. If you want to have a form on your website, make sure to install Contact Form 7. Next proceed as you would normally do, create your form(s) and add them within your pages(s).

### Lightbox Galleries

Ginger theme comes with lightbox galleries (clicking a photo opens a fullscreen-mode slideshow). This feature is optional, enabled by default (you can turn it off here).
There is also a particular configuration required for the gallery itself, that needs to be set up on your WordPress website.

Edit your WordPress page.
Select the gallery blog. In the gallery settings make sure to choose Link to: Media File.

![Gallery Box setting - choose Link to Media File](https://wptemplates.pehaa.com/docs/gatsby-themes/assets/gallery-settings.png)

### Mapbox

Our Gatsby themes provide support for [Mapbox](https://www.mapbox.com/), more precisely Mapbox maps added either via [Jetpack Gutenberg block (Mapbox)](https://jetpack.com/support/jetpack-blocks/map-block/) or with the WP Mapbox GL JS Maps WordPress plugin (unfortunately the latter seems to be no longer maintained). You will need to activate Mapbox on your Gatsby website (it's disabled by default) - [see Mapbox support](#activate-mapbox)

## Installing your Gatsby starter

You will receive a link to download your starter .zip file by email after purchase. You will also receive your secret authentication token tht you will need to run the installation.

1. Unzip your starter.
2. Open the `.nprmc` file and replace `YOU_SECRET_API_KEY` string by your token.
3. Run `yarn` command from your starter directory
4. [Configure your Gatsby site.](#gatsby-config) Most importantly, provide the url of your WordPress source website.
5. Run `gatsby develop` to [start the developement server](https://www.gatsbyjs.org/docs/gatsby-cli/#develop)

## Configure your Gatsby site - config.js <a name="gatsby-config"></a>

In order to setup your Gatsby website, you will need to edit its configuration file, `config.js` located in the root of your project.

The default options for the Ginger theme are listed below. We discuss each one in details in the Options section.

```javascript
const config = {
  wordPressUrl: ``,
  pathPrefix: "",
  paginationPrefix: `page`,
  addWordPressComments: true,
  addDisqusComments: false,
  menuName: "main",
  slideMenuWidgets: [`SocialFollow`, `RecentPosts`, `Categories`, `Tags`],
  siteUrl: "https://example.com",
  social: [
    {
      name: `twitter`,
      url: `https:twitter.com/gatsbyjs`,
    },
  ],
  fonts: ["Abril Fatface", "Fira Sans"],
  gaTrackingId: 0,
  googleTagManagerId: 0,
  addSiteMap: false,
  siteMapOptions: {},
  addColorModes: true,
  skipTitle: [],
  mailchimpEndpoint: "",
}
```

### Options

**wordPressUrl** (required)
Provide a url to your WordPress source website. Make sure that your WordPress setup meets [our requirements](#wp-requirements).

---

**pathPrefix** (optional)
`(default: "")`

This setting is highly optional, use only if you know what you are doing

Typically, your Gatsby website will be hosted at the root of its domain. In that case, the pathPrefix is an empty string and you can skip this setting.
You will need to set the pathPrefix though, if your gatsby website is hosted at something other than the root (/), for example `https://example.com/demo`

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

What is the url structure of any paginated content on your WordPress website? By default, WordPress uses `page` as the prefix, that means it preceeds page numbers by the `page` keyword (`page/2`, `page/3`, ...).
You should skip this setting, unless your changed the pagination url format on your WordPress site.

---

**addWordPressComments** (optional)
`(type: Boolean, default: true)`

Whether WordPress comments should be activated.

If left `true`, the comments will be displayed for posts that have comments status set to "Allow Comments".
Commenting on your Gatsby site work similarily to commenting on your WordPress site. The main difference is that **we only support two levels of comments nesting.** Under the hood, comments are fetched from WordPress and updated on WordPress (and refetched if necessary) with Apollo Client. Consequently, some of your WordPress Discussion settings applies to your Gatsby comments, in particular: email notifications, moderation and blocking rules.

---

**disqus** (optional)
`(type: String, default: "")`

Whether Discqus comments should be activated.

Alternatively to comments powered natively by WordPress, Ginger theme supports [Disqus comments.](https://disqus.com/)
Typing your Disqus shortname (the unique identifier fo your website on Disqus) will activate Disqus comments for all posts.

---

**menuName** (optional)
`(type: String, default: "main")`

The WordPress name of the navigation menu that will be used.

Ginger theme comes with one menu location. The navigation menu is displayed in the slide-in sidebar.
You can choose any of the menus that you had created on your WordPress site by passing its name to the **menuName** option.

![Menu name set to Main Menu on WordPress](https://wptemplates.pehaa.com/docs/gatsby-themes/assets/menuname.png)

example:

```javascript
menuName: "Main Menu"
```

---

**slideMenuWidgets** (optional)
`(type: Array, default: ['SocialFollow', 'RecentPosts', 'Categories', 'Tags'])`

Ginger theme comes with one widget area in the slide-in sidebar. Widgets are displayed below the navigation menu.
There are 4 widgets available: **SocialFollow**, **RecentPosts**, **Categories**, **Tags** and **Newsletter**.

- The **SocialFollow** widget displays links to your social profiles (see [`social setting`](#social))
- The **RecentPosts** widget lists links to 5 most recent posts (thumbnail, title and are displayed).
- The **Categories** widget lists links to first-level post categories.
- The **Tags** widget lists links to post tags. They are ordered alphabetically and include the number of posts per tag.
- The **Newsletter** widget adds a subscription form to your MailChimp profile, (see [`MailChimp Profile`](#mailchimp))

You can easily reorder the widgets. They will be displayed as specified in the **slideMenuWidgets** order.

example:

```javascript
menuName: ["Newsletter", "Social Follow", "Tags"]
```

---

**siteUrl** (obligatory for a production website)
`(type: Url, default: "https://example.com")`

You can use the placeholder value `https://example.com` in the developement phase but once your site is built for production, you should provide the url of your destination site.

This is an essential setting for social share buttons (in Posts), SEO open graph data, and twitter card image ([see **twitterSummaryCard**](#twittercard)). It's also necessary if you opt for an xml sitemap.

---

**social** (optional) <a name="social"></a>
`(type: Array, default: social: [{name:`twitter`, url:`https:twitter.com/gatsbyjs`}])`

You can list your social profiles here. They will be displayed in the SocialFollows widget.

The supported profiles are: Behance, Codepen, Dev, Discord, Dribbble, Facebook, Github, GitLab, Instagram, Linkedin, Mastodon, Medium, Pinterest, Reddit, Slack, Slideshare, Snapchat, Soundcloud, StackOverflow, Telegram, Tumblr, Twitter, Vimeo, Youtube.

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

**fonts**<a name="config-fonts"></a>
`(type: Array, default: ["Abril Fatface", "Fira Sans"])`

Here you decide which fonts should be installed.
Ginger theme uses two typefaces **Abril Fatface** for headings and **Fira Sans** for the body text. Both of them are Google fonts.
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

Whether you want to create a site map. If set to `true`, make sure that you provide your production gatsby website url in the SiteUrl option.

---

**siteMapOptions** (optional)
`(type: Object, default: {})`

These options are passed to the [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/) options so please refer to [gatsby-plugin-sitemap options](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#options) for the details.

---

**addColorModes** (optional, experimental)
`(default: true)`

If you want to add dark mode switcher.

---

**skipTitle** (optional)
`(default: [])`

List slugs of the pages when you don't want to display the page title. Useful when you want to start your page with a Gutenberg cover blog and an `h1` heading.

example:

```javascript
skipTitle: ["home", "about-us"],
```

**mailchimpEndpoint** <a name="mailchimp"></a>

The mailchimEndpoint used in the Newsletter widget.

Ginger theme uses [`gatsby-mailchimp-plugin`](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp) for the MailChimp subscriptions.
Check [the plugin documentation](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/#mailchimp-endpoint) for more information on how to locate your Mailchimp endpoint.

example:

```javascript
mailchimpEndpoint: "https://gmail.us20.list-manage.com/subscribe/post?u=264367957087f30a2e5e30279&amp;id=338936df19",
```

---

## Favicon

In order to replace the default Gatsby favicon, you need to create your own favicon.ico file and replace it with the default one in the `/static` folder.

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

## Components Shadowing

### Activating Mapbox support <a name="activate-mapbox"></a>

In order to activate Mapbox you will have to override one of the theme's component.
Go to your project folder. It contains a `gatsby-theme-wp-ginger` directory, create a `utils` folder in it and paste the `ParsedContent.js` file from the theme `packages/gatsby-theme-wp-ginger/src/utils/ParsedContent.js`

Make sure to uncomment the lines:

`import mapboxParserFunction from "gatsby-plugin-wp-mapbox"`
and
`parserFunctions.push(mapboxParserFunction)`

It should he something like that:

```javascript
/* utils/ParsedContent.js */
import React from "react"
import ContentParser from "@gatsbywpthemes/gatsby-plugin-wordpress-parser"
import { cf7ParserFunction } from "@gatsbywpthemes/gatsby-plugin-wpcf7"
import { lightboxParserFunction } from "@gatsbywpthemes/gatsby-plugin-wordpress-lightbox"
import useThemeOptions from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks/useThemeOptions"

const ParsedContent = ({ content }) => {
  const options = useThemeOptions()
  const parserFunctions = [cf7ParserFunction, lightboxParserFunction]
  // uncomment the next line to activate Mapbox
  parserFunctions.push(mapboxParserFunction)
  return <ContentParser content={content} customFn={parserFunctions} />
}

export default ParsedContent
```

It's already set in the `ginger-kitchen` starter.
