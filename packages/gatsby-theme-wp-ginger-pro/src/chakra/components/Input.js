export const Input = {
  baseStyle: {
    background: 'transparent',
    borderWidth: 0,
    borderBottomWidth: '1px',
    boxShadow: 'currentcolor 0px 0px 0px inset',
    transition: '0.6s',
    px: 0,
    fontSize: 'md',
    borderRadius: 0,
    WebkitAppearance: 'none',
    '&:focus': {
      boxShadow: 'currentcolor 0px -3px 0px inset',
    },
    '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':
      {
        WebkitAppearance: 'auto!important',
      },
  },
}
