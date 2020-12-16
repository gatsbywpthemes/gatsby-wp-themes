# @gatsbywpthemes/gatsby-plugin-wordpress-lightbox

## Description

`@gatsbywpthemes/gatsby-plugin-wordpress-lightbox` parses your content and adds lightbox functionnality to each instance of the `.wp-block-gallery` that contains links to images.
It uses the [`simple-react-lightbox`](https://github.com/michelecocuccio/simple-react-lightbox) library.

## How to install (in the working project)

```javascript
/* in the theme/site gatsby-config.js */
plugins: [
  ...,
  '@gatsbywpthemes/gatsby-plugin-wordpress-lightbox',
  ...
],

/* in the theme/sit package.json */
"dependencies": {
/* ... */
  "@gatsbywpthemes/gatsby-plugin-wordpress-lightbox": "*",
/* ... */
},
```

## How to Use

This plugin works in combo with [`@gatsbywpthemes/gatsby-plugin-wordpress-parser`](https://github.com/pehaa/@gatsbywpthemes/gatsby-plugin-wordpress-parser).

Wherever you need to display the post content:

```javascript
import ContentParser from "@gatsbywpthemes/gatsby-plugin-wordpress-parser"
import { lightboxParserFunction } from "@gatsbywpthemes/gatsby-plugin-wordpress-lightbox"
```

replace `<div dangerouslySetInnerHTML={{ __html: content }} />` with:

```javascript
<div>
  <ContentParser content={content} customFn={[lightboxParserFunction]} />
</div>
```

or if you use ContentParser already, for example with `@gatsbywpthemes/gatsby-plugin-wpcf7`

```javascript
import React from "react"
import ContentParser from "@gatsbywpthemes/gatsby-plugin-wordpress-parser"
import { cf7ParserFunction } from "@gatsbywpthemes/gatsby-plugin-wpcf7"
import { lightboxParserFunction } from "@gatsbywpthemes/gatsby-plugin-wordpress-lightbox"

const ParsedContent = ({ content }) => {
  const parserFunctions = [cf7ParserFunction, lightboxParserFunction]
  return <ContentParser content={content} customFn={parserFunctions} />
}

export default ParsedContent
```
