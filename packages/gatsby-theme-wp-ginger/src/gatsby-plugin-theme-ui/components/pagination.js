export const pagination = {
  variant: 'special',
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  fontSize: 1,
  mb: 4,
  '&> :first-child, &> :last-child': {
    flex: 1,
  },
  '.left': {
    textAlign: 'left',
  },
  '.right': {
    textAlign: 'right',
  },
  '> span': {
    textAlign: 'center',
  },
}

export const paginationLink = {
  transition: '.6s',
  '&.right': {
    transform: 'translate3d(1.75rem, 0, 0)',
  },
  '&.left': {
    transform: 'translate3d(-1.75rem, 0, 0)',
  },
  ':hover': {
    transform: `translate3d(0, 0, 0)`,
  },
  '&.left::before,&.right::after': {
    content: '""',
    width: '1.5rem',
    height: '1px',
    mx: '0.25rem',
    bg: 'currentColor',
    display: 'inline-block',
    verticalAlign: 'middle',
    transition: '0.6s',
    transform: `scaleX(0)`,
  },
  ':hover::before, :hover::after': {
    transform: `scaleX(1)`,
  },
}
