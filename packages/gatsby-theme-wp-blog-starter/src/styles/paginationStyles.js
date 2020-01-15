import { rem } from 'polished'

export default {
  variant: 'text.special',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 'xs',
  mb: 's',
  '> *': {
    flex: 1,
  },
  '.newer': {
    textAlign: 'left',
  },
  '.older': {
    textAlign: 'right',
  },
  '> span': {
    textAlign: 'center',
  },
  links: {
    transition: '.6s',
    variant: 'text.special.a',
    fontSize: [rem('10px'), 'xxs'],
    mt: ['xs', 0],
    '&.older': {
      transform: 'translate3d(1.75rem, 0, 0)',
      mr: ['m', 0],
    },
    '&.newer': {
      transform: 'translate3d(-1.75rem, 0, 0)',
      ml: ['m', 0],
    },
    ':hover': {
      transform: 'translate3d(0, 0, 0)',
    },
    '&.newer::before,&.older::after': {
      content: '""',
      width: '1.5rem',
      height: '1px',
      mr: '0.25rem',
      bg: 'currentColor',
      display: 'inline-block',
      verticalAlign: 'middle',
      transition: '0.6s',
      transform: 'scaleX(0)',
    },
    ':hover::before, :hover::after': {
      transform: 'scaleX(1)',
    },
  },
}
