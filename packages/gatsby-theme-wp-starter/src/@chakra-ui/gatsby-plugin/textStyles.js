const textStyles = {
  special: {
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: 'xs',
    '&:hover': {
      textDecoration: 'none',
      color: 'accentLight',
    },

    link: {
      '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '1px',
        background: 'currentColor',
        transition: '.6s',
        opacity: 0,
        transform: 'scaleX(0)',
      },
      '&:hover:after': {
        opacity: 1,
        transform: 'scaleX(1)',
      },
    },
  },
}

export default textStyles
