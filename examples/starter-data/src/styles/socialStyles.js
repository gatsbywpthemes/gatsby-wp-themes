export default {
  follow: {
    justifyContent: 'center',
    color: 'text',
    '.inverse &': {
      color: 'textInverse',
    },

    a: {
      color: 'text',
      '.inverse &': {
        color: 'textInverse',
      },

      p: 'xxs',
      mx: 4,
      transition: '.6s',
      '&:hover': { opacity: 0.6 },
    },
    svg: {
      width: '18px',
      height: '18px',
    },
  },
  share: {
    icon: {
      border: '1px solid',
      borderColor: 'text',
      display: 'flex',
      width: '1.5rem',
      height: '1.5rem',
      mx: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      // bg: 'primary',

      borderRadius: '50%',
      svg: {
        color: 'text',
      },
    },
    name: {
      variant: 'text.special',
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      '&>*': {
        variant: 'special.link',
        mx: 4,
        cursor: 'pointer',
      },
    },
  },
}
