export const layerStyles = {
  info: {
    textAlign: 'center',
    p: [4, 8],
    borderWidth: ['0.5rem', `0.75rem`],
  },
  input: {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid',
    borderRadius: 0,
    boxShadow: 'currentcolor 0px 0px 0px inset',
    transition: '0.6s',
    px: 0,
    '&:focus': {
      boxShadow: 'currentcolor 0px -3px 0px inset',
    },
  },
  overlay: {
    position: 'relative',
    zIndex: 0,
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      bg: 'currentColor',
      opacity: 0.03,
      zIndex: -1,
    },
  },
}
