const Container = {
  baseStyle: {
    px: [5, 5, 6, 10],
    mx: 'auto',
  },
  sizes: {
    sm: {
      maxW: 'container.sm',
    },
    md: {
      maxW: 'container.md',
    },
    lg: {
      maxW: '960px',
    },
    xl: {
      maxW: 'container.xl',
    },
  },
  defaultProps: {
    size: 'xl',
  },
}

export default Container
