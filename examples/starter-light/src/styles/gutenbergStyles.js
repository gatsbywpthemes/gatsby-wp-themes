export const gutenbergStyles = {
  "& > *": {
    marginLeft: "auto",
    marginRight: "auto",
  },
  "& > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide):not(.entry-content)":
    {
      maxWidth: `4xl`,
      width: [`calc(100% - 3rem)`, `calc(100% - 4rem)`],
    },

  '[class*="__inner-container"] > [style*="width: 100vw"], [class*="__inner-container"] > [style*="width:100vw"]':
    {
      maxWidth: "100%!important",
    },

  '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright):not(.is-style-wide)':
    {
      maxWidth: `4xl`,
      width: "100%",
    },

  ".alignnone,.aligncenter,.alignleft,.alignright,.alignwide": {
    mx: "auto",
  },
  ".aligncenter > .gatsby-image-wrapper": {
    marginLeft: "auto",
    marginRight: "auto",
  },
  '[class*="__inner-container"] > *:not(.alignwide):not(.alignfull):not(.alignleft):not(.alignright)':
    {
      marginLeft: "auto",
      marginRight: "auto",
    },
  /* Full */
  ".alignfull": {
    margin: "3rem auto",
    position: "relative",
    width: "100%",
  },
  ".alignfull:first-of-type": {
    marginTop: 0,
  },

  '[class*="__inner-container"] > .alignfull': {
    maxWidth: "100%",
  },
  "&> .wp-block-group.alignfull.has-background": {
    padding: ["2rem", "4rem", "6rem"],
  },
  "& > .wp-block-cover.alignfull:last-of-type": {
    marginBottom: 0,
  },
  /* Wide */
  ".alignwide": {
    maxWidth: "75rem",
    position: "relative",
    width: "calc(100% - 4rem)",
  },
  '[class*="__inner-container"] > .alignwide': {
    width: "100%",
  },
  ".wp-block-cover h1, .wp-block-cover h2": {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  ".has-background": {
    padding: "1.5rem",
  },
  ".wp-block-media-text .wp-block-media-text__content": {
    pt: ["1.5rem", 0, 0],
    px: [0, "8%"],
  },
  '.dark-color-mode & .has-background:not(.has-text-color),.dark-color-mode & .wp-block-media-text[style*="background"],.dark-color-mode & .wp-block-table.is-style-stripes tbody tr:nth-of-type(odd)':
    {
      // bgGradient: (theme) => {
      //   return `linear-gradient(${theme.colors.overlay}, ${theme.colors.overlay})`
      // },
      backgroundBlendMode: "multiply",
    },
  '[class^="wp-block"]': {
    ".gatsby-image-wrapper": {
      boxShadow: `none`,
      borderRadius: 0,
    },
  },
  "&.entry-content": {
    borderBottom: `1px solid transparent`,
  },
  ".blocks-gallery-grid": {
    maxWidth: "100%",
  },
}
