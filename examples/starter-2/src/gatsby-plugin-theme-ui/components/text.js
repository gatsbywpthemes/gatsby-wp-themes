import { rem } from 'polished'

const specialSharedStyles = {
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontSize: 'xxs',
  color: 'text',
  a: {
    color: 'inherit',
    textDecoration: 'none',
    position: 'relative',
  },
}

export const text = {
  gradient: {
    primary: {
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      variant: ['gradients.primary'],
    },
    secondary: {
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      variant: ['gradients.secondary'],
    },
    blue: {
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      variant: ['gradients.blue'],
    },
  },
  branding: {
    fontSize: ['s', 'm', 'l'],
    textTransform: 'uppercase',
    fontFamily: 'heading',
    textAlign: 'center',
    fontWeight: 500,
    letterSpacing: 4,
    lineHeight: 1.5,
    variant: ['text.gradient.primary', 'transitions.m'],

    m: 0,
    a: {
      color: 'headerColor',

      '&:hover': {
        color: 'headerColorHover',
      },
    },
  },
  headingGradient: {
    textTransform: 'uppercase',
    variant: 'gradients.primary',
    color: 'white',
    py: 's',
    px: 's',
    fontWeight: 300,
    borderRadius: 's',
    textAlign: 'center',
  },
  headingBorders: {
    fontSize: 's',
    textAlign: 'center',
    color: 'text',
    '.inverse &': {
      color: 'textInverse',
    },
    variant: 'text.gradient.secondary',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textTransform: 'uppercase',
    alignItems: 'center',
    letterSpacing: '2px',
    borderRadius: '50px',
    py: 12,
    ':after, :before': {
      content: '""',
      height: '1px',
      borderTop: '1px solid',
      flex: '1 0',
    },
    ':after': {
      ml: 'xs',
    },
    ':before': {
      mr: 'xs',
    },
  },

  info: {
    display: 'inline-block',
    lineHeight: 'tight',
    fontFamily: 'neutral',
    bg: 'infoBg',
    py: 5,
    px: 's',
    width: 'auto',
    fontStyle: 'italic',
    borderRadius: '50px',
    mb: 'l',
  },
  special: {
    ...specialSharedStyles,
    a: {
      ...specialSharedStyles.a,
    },
    link: {
      ...specialSharedStyles,
      ...specialSharedStyles.a,
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
    title: {
      a: {
        ...specialSharedStyles.a,
        transition: '0.6s',
      },
      'a:hover': {
        color: 'primary',
      },
    },
    archiveTitle: {
      ...specialSharedStyles,
      fontSize: 'm',
      fontWeight: 500,
      bg: 'archiveTitleBg',
      color: 'white',
      py: 's',
      px: 'l',
      mb: 'xl',
      width: 'auto',
      display: 'inline-block',
      borderRadius: 's',
      mx: ['auto', 'auto', 0],
    },
  },
}
