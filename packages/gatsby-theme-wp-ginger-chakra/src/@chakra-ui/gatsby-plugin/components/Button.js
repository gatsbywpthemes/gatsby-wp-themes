export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    cursor: 'pointer',
  },
  // Two sizes: sm and md
  sizes: {
    sm: {},
    md: { p: 3, height: 'auto', minWidth: 'auto' },
  },
  // Two variants: outline and circle
  variants: {
    circle: {
      width: '3.25rem',
      height: '3.25rem',
      lineHeight: '3.25rem',
      borderRadius: '50%',
      p: 0,
      border: 0,
      boxShadow: 'inset 0 0 0 0 transparent',
      transition: 'box-shadow .6s, background .6s',
      svg: {
        width: '1.5rem',
        height: '100%',
        m: 'auto',
      },
      ':hover': {
        boxShadow: 'inset 0 0 0 30px currentColor',
        background: 'currentColor',
      },
    },
    outline: {
      border: '1px solid',
      borderColor: 'currentColor',
      bg: 'transparent',
      boxShadow: 'currentcolor 0px 0px 0px 0px inset',
      borderRadius: 0,
      ':hover': {
        boxShadow: 'inset 0 0 0 2px currentColor',
        bg: 'transparent',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}
