# Build your awesome website with Gatsby, WordPress and Ginger theme.

Introduction comes here...

## 🚀All that you need to get it running.

## Setting up your WordPress Website.

You will need a running WordPress installation. Gatsby will fetch the data from your WordPress website. There are some configuration options that you need to follow:

## Requirements<a name="wp-requirements"></a>

### Mandatory Plugins

You need to install and activate the [wpgraphql plugin.](https:www.wpgraphql.com/) You can download the latest release [here.](https:github.com/wp-graphql/wp-graphql/releases) Install it on your WordPress site from the .zip file.

### Permalinks structure

In order that the plugin works correctly, your WordPress installation must have pretty permalinks enabled (commonly oprovided by the majority of hosting servives). Also, The permalink structure **must not** be the default (plain, `http://example.com/?p=123.`) WordPress permalink structure. This can be done via your WordPress admin area in Settings > Permalinks.

### Redirecting your WordPress website

If you want to redirect all non logged-in users accessing your WordPress site URL to your gatsby website, we recommend installing the [Headless Node](https://wordpress.org/plugins/headless-mode/) WordPress plugin.

### Forms

Ginger theme is compatible with Contact Form 7 WordPress plugin. If you want to have a form on your website, make sure to install Contact Form 7. Next proceed as you would normally do, create your form(s) and add them within your pages(s).

### Fancybox Galleries

Ginger theme comes with fancybox galleries (clicking a photo opens a fullscreen-mode slideshow). This feature is optional, enabled by default (you can turn it off here).
There is also a particular configuration required for the gallery itself, that needs to be set up on your WordPress website.

Edit your WordPress page.  
Select the gallery blog. In the gallery settings make sure to choose Link to: Media File.

![Gallery Box setting - choose Link to Media File](https://wptemplates.pehaa.com/docs/gatsby-themes/assets/gallery-settings.png)

### Mapbox

Our Gatsby themes provide support for Mapbox cards.

## Configure your Gatsby site - config.js

In order to setup your Gatsby website, you will need to edit its configuration file, `config.js` located in the root of your project.

The default options for the Ginger theme are listed below. We discuss each one in details in the Options section.

```javascript
const config = {
  wordPressUrl: ``,
  uploadsPath: `wp-content/uploads`,
  pathPrefix: "",
  postsPath: ``,
  paginationPrefix: `page`,
  addWordPressComments: true,
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
  addAlgoliaSearch: false,
  addColorModes: true,
  addFancyBox: true,
  skipTitle: [],
}
```

### Options

**wordPressUrl** (required)  
Provide a url to your WordPress source website. Make sure that your WordPress setup meets [our requirements](#wp-requirements).

---

**uploadsPath** (optional)  
`(default: wp-content/uploads)`

A relative path to your uploads directory. `wp-content/uploads` is default for any WordPress installation.  
Unless you redefined your uploads destination, skip this setting.

---

**pathPrefix** (optional)  
`(default: "")`

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

**postsPath** (optional)  
`(default: "")`

This is an important setting. It should reflect your WordPress _Reading > Your homepage_ displays settings, otherwise your Gatsby website may not work properly.

That is:

- `postsPath` should be left empty if your WordPress homepage displays your latest posts. This corresponds to the default in Settings > Reading > Your homepage displays.

- If you chose a static page and set a Posts page, you should use the Posts page slug as your `postsPath`.

- If your WordPress website doesn't display blog page (homepage displays a static page and Posts page is not defined), you should set `postsPath` to `false`.

example:

```javascript
postsPath: "blog"
```

or

```javascript
postsPath: false
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

Whether WordPress comments funcionality should be activated.

If left `true`, the comments will be displayed for posts that have comments status set to "Allow Comments".
Commenting on your Gatsby site work similarily to commenting on your WordPress site. The main difference is that **we only support two levels of comments nesting.** Under the hood, comments are fetched from WordPress and updated on WordPress (and refetched if necessary) with Apollo Client. Consequently, some of your WordPress Discussion settings applies to your Gatsby comments, in particular: email notifications, moderation and blocking rules.

---

**menuName** (optional)  
`(type: String, default: "main")`

The Ginger theme comes with one menu location, in the slide-in sidebar. You can use any of the menus that you had created on your WordPress site. Just paste the name that you had given to your WordPress menu here.

example:

```javascript
menuName: "Main Menu"
```

---

**gingerWidgets** (optional)  
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

**addAlgoliaSearch** (optional, experimental)  
`(default: false)`

If you want to use Algolia with your project, make sure to include `.env` file in the project root:

```
GATSBY_ALGOLIA_APP_ID=your-app-id
GATSBY_ALGOLIA_SEARCH_KEY=your-algolia-search-key
ALGOLIA_ADMIN_KEY=your-algolia-admin-key
```

---

**addColorModes** (optional, experimental)  
`(default: true)`

If you want to add dark mode switcher.

---

**addFancyBox** (optional)
`(default: true)`

Adds fancybox functionnality to the galeries. It will work for any gallery built with the Gutenberg gallery block that has "Link To" set to "Media File"

---

**skipTitle** (optional, experimental)  
`(default: [])`

List slugs of the pages when you don't want to display the page title. Useful when you want to start your page with a Gutenberg cover blog and an h1 heading.

example:

```javascript
skipTitle: ["home", "about-us"],
```

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
