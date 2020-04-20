export const search = {
  box: {
    variant: 'form',
    mb: 0,
    flex: 2,
    p: 0,
    display: 'block',
    boxShadow: 'none',
    'form, input[type="search"]': {
      m: 0,
    },
    'form > svg': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      m: 'auto',
    },
    'form > svg + input[type="search"]': {
      px: theme => theme.fontSizes['l'],
    },
    'input[type="search"]': {
      minWidth: 0,
    },
    '.input-wrapper': {
      position: 'relative',
      width: '100%',
    },
    '.input-wrapper input[type="search"]': {
      height: '100%',
    },
    '[type="reset"]': {
      variant: 'buttons.raw',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      padding: 0,
      width: '2rem',
      color: 'inherit',
      svg: {
        fill: 'currentColor',
        left: 0,
        right: 0,
      },
    },
    form: {
      display: 'flex',
      position: 'relative',
    },
    container: {
      alignItems: 'center',
      position: 'relative',
      mb: '2rem',
      svg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        m: 'auto',
      },
      'form input[type="search"]': {
        pl: '1.5rem',
      },
    },
  },
}

export const results = {
  h3: {
    fontSize: 'm',
  },
  h4: {
    fontSize: 's',
    mb: '0.25rem',
  },
  mb: '2rem',
  '.post-metadata': {
    variant: 'special',
    fontSize: 'xxs',
  },
  header: {
    display: 'flex',
    mb: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > *': {
      mb: 0,
    },
    '.stats': {
      textAlign: 'right',
    },
  },
  '.results + header': {
    mt: '2rem',
  },
  a: { color: 'inherit' },
  'a:hover': { opacity: '0.6' },
  'a[aria-current]': {
    fontStyle: 'italic',
  },
  fontSize: 'xs',
  ul: {
    variant: 'list.raw',
  },
  li: {
    mb: '0.75rem',
    letterSpacing: '0.5px',
  },
  '.results:after': {
    content: '""',
    display: 'block',
    height: 0,
    width: '100%',
    borderBottom: '3px solid',
  },
}

export const searchAlgolia = {
  box: {
    variant: 'form',
    mb: 0,
    flex: 2,
    p: 0,
    display: 'block',
    boxShadow: 'none',
    'form, input[type="search"]': {
      m: 0,
    },
    'input[type="search"]': {
      minWidth: 0,
    },
    '.input-wrapper': {
      position: 'relative',
      width: '100%',
    },
    '.input-wrapper input[type="search"]': {
      height: '100%',
    },
    '[type="reset"]': {
      variant: 'buttons.raw',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      padding: 0,
      width: '2rem',
      color: 'inherit',
      svg: {
        fill: 'currentColor',
        left: 0,
        right: 0,
      },
    },
    form: {
      display: 'flex',
      position: 'relative',
    },
  },
  container: {
    alignItems: 'center',
    position: 'relative',
    mb: '2rem',
    '[type="submit"]': {
      display: 'none',
    },
    svg: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      m: 'auto',
    },
    'form input[type="search"]': {
      pl: '1.5rem',
    },
  },
}
export const resultsAlgolia = {
  '.search-results': {
    ...results,
  },
}
