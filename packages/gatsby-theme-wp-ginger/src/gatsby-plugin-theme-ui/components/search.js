export const search = {
  results: {
    header: {
      display: 'flex',
      mb: '1rem',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > *': {
        mb: 0,
      },
    },
    '.results + header': {
      mt: '2rem',
    },
    a: { color: 'inherit' },
    fontSize: 'xs',
    ul: {
      variant: 'list.raw',
    },
    li: {
      mb: '0.75rem',
    },
    '&:after, li:after': {
      content: '""',
      display: 'block',
      height: 0,
      width: '100%',
      mt: '2rem',
    },
    'li:after': {
      borderBottom: '1px solid',
      opacity: 0.15,
    },
    '&:after': {
      borderBottom: '3px solid',
      mb: '2rem',
    },
  },
  box: {
    variant: 'form',
    flex: 2,
    p: 0,
    display: 'block',
    '&, form, input[type="search"]': {
      m: 0,
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
