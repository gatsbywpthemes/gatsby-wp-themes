/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import algoliaLogo from "../images/algolia-logo.svg"

const SearchFooter = () => {
  return (
    <footer sx={{ px: `m`, pt: `xxs`, mt: `xxs`, borderTop: `1px solid #666` }}>
      <Flex
        sx={{
          justifyContent: `flex-end`,
          fontSize: `xs`,
          fontWeight: 300
        }}
      >
        search by{" "}
        <a
          href="https://www.algolia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={algoliaLogo}
            alt="Algolia logo"
            sx={{ width: 60, ml: `xxs`, mt: 6, mb: 6 }}
          />
        </a>
      </Flex>
    </footer>
  )
}

export default SearchFooter
