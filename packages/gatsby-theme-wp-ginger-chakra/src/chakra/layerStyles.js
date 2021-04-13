export const layerStyles = {
  info: {
    textAlign: 'center',
    p: [4, 8],
    borderWidth: ['0.5rem', `0.75rem`],
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
