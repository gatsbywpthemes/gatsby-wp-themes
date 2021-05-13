const beforeAfter = {
  content: '""',
  width: '1.5rem',
  height: '1px',
  mx: 1,
  bg: 'currentColor',
  display: 'inline-block',
  verticalAlign: 'middle',
  transition: '0.6s',
  transform: `scaleX(0)`,
}

const special = {
  textTransform: 'uppercase',
  textDecoration: 'none',
  letterSpacing: 'loose',
  fontSize: 'sm',
  '&:hover': {
    textDecoration: 'none',
    color: 'accentLight',
  },
}

export const textStyles = {
  special,
  specialLinkUnderline: {
    ...special,
    d: 'inline-block',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '1px',
      background: 'currentColor',
      transition: '.6s',
      opacity: 0,
      transform: 'scaleX(0)',
    },
    '&:hover:after': {
      opacity: 1,
      transform: 'scaleX(1)',
    },
  },
  specialLeft: {
    ...special,
    transition: 'transform 0.6s',
    textAlign: 'left',
    transform: 'translate3d(-1.75rem, 0, 0)',
    '&:hover': {
      ...special['&:hover'],
      transform: `translate3d(0, 0, 0)`,
    },
    '&::before': { ...beforeAfter },
    ':hover::before': {
      transform: `scaleX(1)`,
    },
  },
  specialRight: {
    ...special,
    transition: 'transform .6s',
    textAlign: 'right',
    transform: 'translate3d(1.75rem, 0, 0)',
    '&:hover': {
      ...special['&:hover'],
      transform: `translate3d(0, 0, 0)`,
    },
    '&::after': { ...beforeAfter },
    ':hover::after': {
      transform: `scaleX(1)`,
    },
  },
  specialLink: {
    ...special,
    fontWeight: 'bold',
    d: 'block',
    position: 'relative',
    py: 3,
    '&:before': {
      content: "''",
      opacity: 0.2,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottomWidth: '1px',
    },
  },
  h1Archive: {
    textAlign: 'center',
    my: 10,
    div: {
      fontFamily: 'body',
    },
    '&:after': {
      content: '""',
      w: '10',
      d: 'block',
      borderBottom: '1px solid',
      mx: 'auto',
      mt: 4,
    },
  },
  listRaw: {
    listStyle: 'none',
    m: 0,
    p: 0,
    ul: {
      listStyle: 'none',
      m: 0,
      p: 0,
    },
  },
  linkHoverOpacity: {
    color: 'inherit',
    transition: 'opacity 0.5s',
    '&:hover': {
      color: 'inherit',
      opacity: 0.6,
    },
  },
  separateWithMiddots: {
    display: 'flex',
    alignItems: 'center',
    '&:not(:last-of-type):after': {
      content: '"·"',
      mx: 1,
    },
  },
  separateWithSlashes: {
    display: 'flex',
    alignItems: 'center',
    '&:not(:last-of-type):after': {
      content: '"/"',
      mx: 1,
    },
  },
}
