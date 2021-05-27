const Input = {
  baseStyle: {
    fontSize: 'md',
    background: 'transparent',
    borderWidth: 0,
    borderBottomWidth: '1px',
    borderColor: 'currentcolor',
    boxShadow: 'currentcolor 0px 0px 0px inset',
    transition: '0.6s',
    px: 0,
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

export default Input
