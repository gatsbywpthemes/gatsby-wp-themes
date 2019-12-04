export const share = {
  titleicon: {
    mb: 2,
    display: 'flex',
    width: '1.5rem',
    height: '1.5rem',
    mx: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    bg: 'text',
    color: 'white',
    borderRadius: '50%',
    svg: {
      width: '.75rem',
    },
  },
  list: {
    variant: 'list.raw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    mb: 6,
    li: {
      variant: 'special',
      fontWeight: 'bold',
      display: 'flex',
      '&:not(:last-of-type):after': {
        content: '"/"',
        px: 1,
      },
      '&>*': {
        variant: 'special.link',
        mx: 1,
        cursor: 'pointer',
      },
    },
  },
}

export const follow = {
  justifyContent: 'center',
  color: 'inherit',
  mb: 7,
  a: {
    color: 'inherit',
    p: 2,
    mx: 1,
    transition: '.6s',
    '&:hover': { opacity: 0.6 },
  },
  svg: {
    width: '18px',
    height: '18px',
  },
}
