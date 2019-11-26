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
