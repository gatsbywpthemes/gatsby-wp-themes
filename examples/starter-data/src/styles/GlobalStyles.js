import { css } from '@emotion/core'
import Typography from 'typography'
import theme from '../gatsby-plugin-theme-ui/'
const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: theme.lineHeights.body,
  scaleRatio: 2.15,
  blockMarginBottom: 0.75,
  headerFontFamily: theme.fonts.heading.split(',').map(el => {
    return el.trim()
  }),

  bodyFontFamily: theme.fonts.body.split(',').map(el => {
    return el.trim()
  }),
  headerWeight: theme.fontWeights.heading,
  bodyWeight: theme.fontWeights.body,
  boldWeight: theme.fontWeights.bold,
})
const globalStyles = css`
  body {
    margin: 0;
    overflow-x: hidden;
  }
  body[style*='overflow'] {
    height: 100vh;
  }
  nav {
    a {
      text-decoration: none;
    }
  }
  /**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
 * Correct the inability to style clickable types in iOS and Safari.
 */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  .u-hidden-visually,
  .screen-reader-text {
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
  }
  img,
  figure,
  .gatsby-image-wrapper {
    max-width: 100%;
    height: auto;
  }
  iframe {
    width: 100%;
  }
  ${typography.toString()}
  /* fix for wp gallery */
  .blocks-gallery-grid {
    width: 100%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  .wp-block-gallery {
    margin-left: 0;
  }
  html {
    overflow-y: initial;
  }
  .wp-block-embed__wrapper {
    position: relative;
  }
  .wp-block-embed__wrapper:before {
    content: '';
    display: block;
    padding-top: 50%;
  }
  .wp-embed-aspect-21-9 .wp-block-embed__wrapper:before {
    padding-top: 42.85%;
  }

  .wp-embed-aspect-18-9 .wp-block-embed__wrapper:before {
    padding-top: 50%;
  }

  .wp-embed-aspect-16-9 .wp-block-embed__wrapper:before {
    padding-top: 56.25%;
  }

  .wp-embed-aspect-4-3 .wp-block-embed__wrapper:before {
    padding-top: 75%;
  }

  .wp-embed-aspect-1-1 .wp-block-embed__wrapper:before {
    padding-top: 100%;
  }

  .wp-embed-aspect-9-16 .wp-block-embed__wrapper:before {
    padding-top: 177.78%;
  }

  .wp-embed-aspect-1-2 .wp-block-embed__wrapper:before {
    padding-top: 200%;
  }

  .wp-block-embed__wrapper iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default globalStyles
