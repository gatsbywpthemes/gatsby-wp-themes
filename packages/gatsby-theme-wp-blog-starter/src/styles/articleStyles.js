import gutenberg from './theme-gutenberg'
export default {
  mb: `l`,
  width: `100%`,
  '.gatsby-image-wrapper': {
    maxHeight: 400,
    boxShadow: `small`,
    borderRadius: `5px 5px 0 0`,
  },

  '.content': {
    '.fullWidth &': {
      variant: `card.remove`,
    },
    variant: `card.default`,

    borderRadius: `0 0 5px 5px`,
    '&.page-content, &.no-img': {
      borderRadius: `s`,
    },

    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    hyphens: 'auto',
    '.entry-title': {
      a: {
        color: `text`,
        '&:hover': {
          color: `accent`,
        },
      },
    },
  },
  '.entry-content': {
    pb: `m`,
    my: `l`,
    borderBottom: t => `1px solid ${t.colors.border}`,
  },
  '.entry-title': {
    textTransform: `uppercase`,
    fontSize: [`m`, `l`],

    a: {},
  },
}
