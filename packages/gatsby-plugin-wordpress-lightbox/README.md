# gatsby-plugin-wordpress-fancybox

## Description

`gatsby-plugin-wordpress-fancybox` parses your content and adds fancybox functionnality to each instance of the `.wp-block-gallery` that contains links to images.
It uses the `@fancyapps/fancybox` jQuery plugin.

## How to install (in the working project)

```bash
cd packages
git clone git@github.com:pehaa/gatsby-plugin-wordpress-fancybox.git
```

```javascript
/* in the theme/site gatsby-config.js */
plugins: [
  ...,
  'gatsby-plugin-wordpress-fancybox',
  ...
],

/* in the theme/sit package.json */
"dependencies": {
/* ... */
  "gatsby-plugin-wordpress-fancybox": "*",
/* ... */
},
```

## How to Use

This plugin works in combo with [`gatsby-plugin-wordpress-parser`](https://github.com/pehaa/gatsby-plugin-wordpress-parser).

Wherever you need to display the post content:

```javascript
import ContentParser from "gatsby-plugin-wordpress-parser"
import fancyBoxParserFunction from "gatsby-plugin-wordpress-fancybox"
```

replace `<div dangerouslySetInnerHTML={{ __html: content }} />` with:

```javascript
<div>
  <ContentParser content={content} customFn={[fancyBoxParserFunction]} />
</div>
```

or if you use ContentParser already, for example with `gatsby-plugin-wpcf7`

```javascript
import ContentParser from "gatsby-plugin-wordpress-parser"
import { cf7ParserFunction } from "gatsby-plugin-wpcf7"
import fancyBoxParserFunction from "gatsby-plugin-wordpress-fancybox"
```

```javascript
<div>
  <ContentParser
    content={content}
    customFn={[cf7ParserFunction, fancyBoxParserFunction]}
  />
</div>
```
