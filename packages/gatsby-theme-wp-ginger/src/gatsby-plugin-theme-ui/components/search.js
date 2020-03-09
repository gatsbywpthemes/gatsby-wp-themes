export const search = {
  results: {
    h3: {
      fontSize: 'm',
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
    'ul:after': {
      content: '""',
      display: 'block',
      height: 0,
      width: '100%',
      borderBottom: '3px solid',
      mb: '2rem',
    },
  },
  box: {
    variant: 'form',
    flex: 2,
    p: 0,
    display: 'block',
    boxShadow: 'none',
    mb: '2rem',
    'form, input[type="search"]': {
      m: 0,
    },
    'form > svg': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      m: 'auto',
    },
    'form > svg + input[type="search"]': {
      px: theme => theme.fontSizes['l'],
    },
    '[type="submit"]': {
      display: 'none',
    },
    '[type="reset"]': {
      variant: 'buttons.raw',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      color: 'inherit',
      svg: {
        fill: 'currentColor',
      },
    },
    form: {
      display: 'flex',
      position: 'relative',
    },
    container: {
      mb: '2rem',
      alignItems: 'center',
    },
  },
}
