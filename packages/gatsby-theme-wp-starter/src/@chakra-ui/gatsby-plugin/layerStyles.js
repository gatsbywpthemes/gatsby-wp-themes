const layerStyles = {
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
  info: {
    px: 4,
    py: 1,
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: 'sm',
    borderRadius: 0,
    color: 'white !important',
    display: 'inline-block',
    lineHeight: 'shorter',
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
}

export default layerStyles
