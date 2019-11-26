# Gatsby Theme WordPress Starter

This is a gatsby theme using WordPress as source and allowing to build a standard blog.
See the [live demo](https://gatsby-theme-wordpress-blog.netlify.com/)

## Dependencies

-This theme uses GraphQL API to source WordPress content. Therefore the source WordPress site must use the [WPGraphQL](https://www.wpgraphql.com/) plugin.

- Twenty nineteen themes needs to be activated in order to have the right meny location
- You can use this plugins to directly new posts from WordPress https://fr.wordpress.org/plugins/webhook-netlify-deploy/

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save @alexadark/gatsby-theme-wordpress-blog
    ```

    or

    ```sh
    yarn add @alexadark/gatsby-theme-wordpress-blog
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: [
        {
      resolve: `@alexadark/gatsby-theme-wordpress-blog`,
      options: {
        wordPressUrl: `http://alexandraspalato.com/webstantly/`,
        postsPrefix: `posts`,
        postsPath: ``,
        paginationPrefix: `blog`,
        postsPerPage: 8,
      },
      ]
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Options

`wordPressUrl` - source site.

`postsPath` - the path for your posts, let it empty if you want them as home page
in your WordPress installation if you want the blog as home page, then make sure to not have any page with slug 'home'.
if you want the blog to another page, then create a custom link in your menu, with the postsPath as url (example : /blog), and make sure to not have any page with slug = postsPath
create a page with slug: 'home' in this case

`paginationPrefix` - the prefix of the pages

`postsPrefix`

`postsPrePage`

## Features

- 2 levels menu
- pagination on posts page
- categories, tags and users
- Works with twenty nineteen theme to have the right menu location

## How to contribute

This is a WIP and any contribution, feedback and PRs are very welcome. Issues is a preferred way of submitting feedback, but you can also email to [alexaspalato@gmail.com](mailto:alexaspalato@gmail.com).
