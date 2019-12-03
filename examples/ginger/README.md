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

(default `""`)

The prefix for the posts. If you change it, make sure to set the permalinks structure on your WordPress site accordingly.

**postsPath** (optional)

(default `""`)

This is an important settings. It should be left empty if your WordPress homepage displays your latest posts. This corresponds to the default setting in Settings > Reading > Your homepage displays.
If you choose a static page and set a Posts page, you should use the Posts page slug as your postsPath.

Example postsPath: 'blog'

**paginationPrefix** (optional)

(default `page`)

The page number prefix for paginated content.
You should not modify it unless you changed this on your WordPress site.

**postsPerPage** (optional)

(type Integer, default `10`)

This setting will disappear - we will retrieve this value from your WordPress settings.
The number of posts per archive page.

Example postsPath: 'blog'

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in your project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https:prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https:www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https:www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https:www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https:www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https:www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https:www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https:www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https:www.netlify.com/img/deploy/button.svg)](https:app.netlify.com/start/deploy?repository=https:github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
