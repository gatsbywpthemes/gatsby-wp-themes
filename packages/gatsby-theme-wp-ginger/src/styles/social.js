export const share = {
  titleicon: {
    mb: '0.75rem',
    display: 'flex',
    width: '1.5rem',
    height: '1.5rem',
    mx: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    bg: 'cardColor',
    color: 'cardBg',
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
    mb: '2rem',
    li: {
      variant: 'special',
      fontWeight: 'bold',
      display: 'flex',
      '&:not(:last-of-type):after': {
        content: '"/"',
        px: '0.25rem',
      },
      '&>*': {
        ':hover': {
          color: 'LinkHover',
        },
        variant: 'special.underlineOnHover',
        mx: '0.25rem',
        cursor: 'pointer',
      },
    },
  },
}

export const follow = {
  justifyContent: 'center',
  color: 'inherit',
  mb: '3rem',
  a: {
    color: 'inherit',
    p: '0.5rem',
    mx: '0.25rem',
    transition: 'opacity .6s',
    '&:hover': { opacity: 0.6 },
  },
  svg: {
    width: '1.125rem',
    height: '1.125rem',
    verticalAlign: 'middle',
  },
}
