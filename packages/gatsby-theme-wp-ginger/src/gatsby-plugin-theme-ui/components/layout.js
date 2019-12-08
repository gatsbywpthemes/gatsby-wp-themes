import { a } from './typo'
export default {
  bg: 'transparent',
  color: 'text',
  '.entry-content a': {
    textDecoration: 'underline',
    transition: 'color .5s',
    '&:hover': {
      color: 'linkHover',
      textDecoration: 'none',
    },
  },
}
