/** @jsx jsx */
import { jsx } from 'theme-ui'
import algoliaLogo from 'gatsby-theme-algolia/src/images/algolia-logo.svg'

const SearchFooter = () => {
  return (
    <footer sx={{ fontSize: 'xxs', textAlign: 'right', mb: '1.5rem' }}>
      search by{' '}
      <a
        href="https://www.algolia.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={algoliaLogo}
          alt="Algolia logo"
          sx={{ width: '3rem', m: 0, verticalAlign: 'middle' }}
        />
      </a>
    </footer>
  )
}

export default SearchFooter
