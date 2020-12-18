# @gatsbywpthemes/gatsby-plugin-wordpress-parser

## Description

### Motivation

The `gatsby-source-graphql` plugin does not process internal links or images (neither self-hosted videos or audios or background-images in wp-block-cover) in the posts content. Within the posts content, all links to `wp-content/uploads` assets as well as internal links between pages are left unprocessed.

This plugin was inspired by [gatsby-wpgraphql-inline-images](https://github.com/progital/gatsby-wpgraphql-inline-images). The `src/createResolvers.js` file is a copy from that plugin.
Our `src/sourceParser.js` comes with important changes. It does not use cheerio.js to parse the entire content. Using cheerio.js here, results in broken markup in case of empty html tags (textarea, empty divs such as gutenberg spacer, etc.). Also, our solution supports self-hosted videos and audios and elements with `background-image` property.
Our `src/content/ContentParser.js` allows to extend the parser replace options.

### Solution

On build, this plugin:

- downloads `wp-content/uploads` files to Gatsby `static` folder
- modifies the post content by:
  - changing the `href` and `src` attributes to new static values
  - changing the `background-image` url to new static values

You can also use `<ContentParser>` component to:

- Replace `<a>` wp internal links to relative path using `<Link>` component
- Replace `<img>` with Gatsby `<Img>` component leveraging all of the [gatsby-image](https://www.gatsbyjs.org/docs/using-gatsby-image/) rich functionality
- Add custom replacement rules (see Contact Form 7)

### Dependencies

This plugin works with `gatsby-source-graphql` plugin and your source WordPress site must use [WPGraphQL](https://github.com/wp-graphql/wp-graphql).
Also, the `gatsby-plugin-sharp` and `gatsby-transformer-sharp` plugins have to be installed and added to your `gatsby-config.js`

## How to install (in the working project)

```bash
cd packages
git clone git@github.com:pehaa/@gatsbywpthemes/gatsby-plugin-wordpress-parser.git
```

```javascript
/* in the theme gatsby-config.js */
{
  resolve: '@gatsbywpthemes/gatsby-plugin-wordpress-parser',
  options: {
    wordPressUrl: 'https://mydomain.com/',
    uploadsUrl: 'https://mydomain.com/wp-content/uploads/',
    processPostTypes: ['Page', 'Post'], /* default:  ['Page', 'Post'] */
    graphqlTypeName: 'WP', /* default:  'WPGraphQL' */
  },
},

/* in the theme package.json */
"dependencies": {
/* ... */
  "@gatsbywpthemes/gatsby-plugin-wordpress-parser": "*",
/* ... */
},
```

## Available options

`wordPressUrl` and `uploadsUrl` contain URLs of the source WordPress site and it's `uploads` folder respectively.

`processPostTypes` determines which post types to process. You can include [custom post types](https://docs.wpgraphql.com/getting-started/custom-post-types) as defined in WPGraphQL.

`graphqlTypeName` should contain the same `typeName` used in `gatsby-source-graphql` parameters.

`generateWebp` _(boolean)_ adds [WebP images](https://www.gatsbyjs.org/docs/gatsby-image/#about-withwebp).

(optional, not tested) `httpHeaders` Adds extra http headers to download request if passed in.

```javascript
httpHeaders: {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
}
```

## How to Use

Wherever you need to display the post content:

```javascript
import ContentParser from "@gatsbywpthemes/gatsby-plugin-wordpress-parser"
```

replace `<div dangerouslySetInnerHTML={{ __html: content }} />` with this

```javascript
<div>
  <ContentParser content={content} />
</div>
```

## How to Extend for Contact Form 7

Use [`@gatsbywpthemes/gatsby-plugin-wpcf7`](https://github.com/pehaa/@gatsbywpthemes/gatsby-plugin-wpcf7)

```javascript
import ContentParser from "@gatsbywpthemes/gatsby-plugin-wordpress-parser"
import { cf7ParserFunction } from "@gatsbywpthemes/gatsby-plugin-wpcf7"
```

replace `<div dangerouslySetInnerHTML={{ __html: content }} />` with:

```javascript
<div>
  <ContentParser content={content} customFn={[cf7ParserFunction]} />
</div>
```
