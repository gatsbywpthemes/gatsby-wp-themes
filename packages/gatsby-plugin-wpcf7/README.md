# @gatsbywpthemes/gatsby-plugin-wpcf7

## Description

`@gatsbywpthemes/gatsby-plugin-wpcf7` parses your content and replaces each instance of the Contact Form 7 generated form by a react component.
Then it uses axios to send the data from the form back to WordPress, so that your form is actually sent.`

### Caveats

The exclusive checkboxes don't work the same way - consider using radios instead.

## How to install (in the working project)

```bash
cd packages
git clone git@github.com:pehaa/@gatsbywpthemes/gatsby-plugin-wpcf7.git
```

```javascript
/* in the theme/site gatsby-config.js */
{
  resolve: '@gatsbywpthemes/gatsby-plugin-wpcf7',
  options: {
    wordPressUrl: 'https://mydomain.com/',
  },
},

/* in the theme/sit package.json */
"dependencies": {
/* ... */
  "@gatsbywpthemes/gatsby-plugin-wpcf7": "*",
/* ... */
},
```

## Options

`wordPressUrl` contain URLs of the source WordPress site (required)

## How to Use

This plugin works best in combo with [`@gatsbywpthemes/gatsby-plugin-wordpress-parser`](https://github.com/pehaa/@gatsbywpthemes/gatsby-plugin-wordpress-parser).

Wherever you need to display the post content:

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

Or, if you do not use the @gatsbywpthemes/gatsby-plugin-wordpress-parser, wherever you need to display the post content:

```javascript
import { ContentParserCF7 } from "@gatsbywpthemes/gatsby-plugin-wpcf7"
```

replace `<div dangerouslySetInnerHTML={{ __html: content }} />` with:

```javascript
<div>
  <ContentParserCF7 content={content} />
</div>
```
