# @gatsbywpthemes/gatsby-plugin-wordpress-parser

## Description

Adds custom replacement rules (see Contact Form 7)

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
