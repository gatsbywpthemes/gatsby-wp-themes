# gatsby-theme-algolia

## Description

the `gatsby-theme-algolia` provide instant search with agolia

## How to use

in your file gatsby-config.js:
`gatsby-theme-algolia`

in your package json:
`"gatsby-theme-algolia": "*"`

import the search component where you want to use it
`import Search from 'gatsby-theme-algolia/src/components/Search'`

also add this in your component to define the search indices

`const searchIndices = [ { name:`Pages`, title:`Pages`, hitComp:`PageHit`}, { name:`Posts`, title:`Blog Posts`, hitComp:`PostHit`}, ]`

change the styles in `gatsby-plugin-theme-ui/components/search.js`
