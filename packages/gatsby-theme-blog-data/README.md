# @gatsbywpthemes/gatsby-theme-blog-data

## Description

This theme provide all the necessary configuration to get the raw data from a wordpress source
it brings all the necessary data to build blog and pages, including pagination for all archives

## Dependencies

-This theme uses GraphQL API to source WordPress content. Therefore the source WordPress site must use the [WPGraphQL](https://www.wpgraphql.com/) plugin.

- Twenty twenty theme needs to be activated in order to have the right meny location

- You can use this plugin to directly deploy new posts from WordPress https://fr.wordpress.org/plugins/webhook-netlify-deploy/

- This theme is already installed in all of our themes, but you can use it as standalone if you need to build a totally custom markup and styling
  in this case we recommend to take our starter-data starter, and to modify it
  or to take as structure model

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    copy the theme files into `packages`
    in your json file add `"@gatsbywpthemes/gatsby-theme-blog-data": "*"`

2.  Add the theme to your `gatsby-config.js`:

    ```{
       resolve: `@gatsbywpthemes/gatsby-theme-blog-data`,
       options: {
         wordPressUrl: ``,
         paginationPrefix: `page`,
         postsPerPage: 10,
         disqus: ``,
         addWordPressComments: 1,
         gaTrackingId: 0,
         googleTagManagerId: 0,
         addSiteMap: false,
         siteMapOptions: {},
           widgetAreas: {
             slideMenu: {
               widgets: [`SocialFollow`, `RecentPosts`, `Categories`, `Tags`],
                       },
             sidebar: {
               widgets: [],
               position: 'right',
               location: {
               archive: false,
               single: false,
                 pages: false, //options: all for all pages or array of page slugs
                   },
               },
             },
           },
         }
    ```

3.  Start your site
    ```sh
    yarn workspace yourSiteName develop
    ```

## Options

`wordPressUrl` - source site. mandatory

`paginationPrefix` - the prefix of the pages

`postsPerPage`

`addWordPressComments` : write false or 0 if you don't want comments

`widgetAreas`: 2 areas slideMenu and sidebar, they will be active only if you have widgets inside
the available widgets are `socialFollow`,`recentPosts`, `Categories`,`Tags` , just write them in the order you want them to appear
for the sidebar widget area you can also define the the position: `right` or `left`, and the location : `archive`: it will appear on blog, category, Tag, and Author archives
`single`: it will appear on single posts
`pages`: write the slugs where you want to see the sidebar in an array

## Features

- 3 levels menu
- pagination on all archives
- categories, tags and users
- Works with twenty nineteen theme to have the right menu location.
