const sharedIconStyles = {
  width: '3rem',
  height: '3rem',
  lineHeight: '3rem',
  borderRadius: '50%',
  textAlign: 'center',
  p: 0,
  border: 0,
  boxShadow: 'inset 0 0 0 0 transparent',
  transition: 'box-shadow .6s, background .6s',
  cursor: 'pointer',
  svg: {
    verticalAlign: 'middle',
    width: '1.25rem',
    height: '1.25rem',
  },
  ':hover': {
    boxShadow: 'inset 0 0 0 30px currentColor',
    background: 'currentColor',
  },
}

export default {
  raw: {
    cursor: 'pointer',
    bg: 'transparent',
    border: 'none',
    boxShadow: 'none',
    svg: {
      verticalAlign: 'middle',
    },
  },
  icon: {
    ...sharedIconStyles,
    color: 'background',
    bg: 'text',
    ':hover svg': {
      color: 'text',
    },
  },
}
