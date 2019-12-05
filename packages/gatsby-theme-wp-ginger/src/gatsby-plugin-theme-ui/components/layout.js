import { a } from './typo'
export default {
  display: 'block',
  color: 'text',
  '.entry-content a': {
    transition: 'color .5s',
    '&:hover': {
      color: 'primary',
    },
  },
}
