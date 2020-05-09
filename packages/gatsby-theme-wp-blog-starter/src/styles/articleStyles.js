export const articleStyles = {
  mb: 'l',
  '.fullWidth &': {
    mb: -33,
  },
  width: '100%',
  '.gatsby-image-wrapper': {
    maxHeight: 400,
    boxShadow: 'small',
    borderRadius: '5px 5px 0 0',
  },

  '.content': {
    '.fullWidth &': {
      variant: 'card.remove',
      boxShadow: 'none',
    },
    variant: 'card.default',

    borderRadius: ['0 0 5px 5px'],
    '&.page-content, &.no-img': {
      borderRadius: ['s'],
    },

    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    hyphens: 'auto',
    '.entry-title': {
      a: {
        color: 'text',
        '&:hover': {
          color: 'accent',
        },
      },
    },
  },
  '.entry-content': {
    my: 'l',
  },
  '.entry-title': {
    textTransform: 'uppercase',
    fontSize: ['m', 'l'],

    a: {},
  },
}
