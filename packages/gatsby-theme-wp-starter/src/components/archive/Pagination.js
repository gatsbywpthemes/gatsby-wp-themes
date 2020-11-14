/** @jsx jsx */
import {
  jsx,
  Flex,
  Box,
  Link as ChakraLink,
  useColorModeValue as colorMode,
} from '@chakra-ui/react'
import { Link } from 'gatsby'

const renderPreviousLink = (previousPagePath) => {
  if (previousPagePath) {
    return (
      <ChakraLink
        as={Link}
        textAlign="left"
        sx={{ ...linkStyles }}
        className="newer"
        to={previousPagePath}
      >
        <span>Previous</span>
      </ChakraLink>
    )
  } else {
    return <span />
  }
}

const renderNextLink = (nextPagePath) => {
  if (nextPagePath) {
    return (
      <ChakraLink
        as={Link}
        textAlign="right"
        sx={{ ...linkStyles }}
        className="older"
        to={nextPagePath}
      >
        <Box as="span">Next</Box>
      </ChakraLink>
    )
  } else {
    return <span />
  }
}

export const Pagination = ({ ctx }) => {
  const { humanPageNumber, nextPagePath, previousPagePath } = ctx
  // return empty string if there is only one page
  if (humanPageNumber === 1 && !nextPagePath) {
    return ''
  }
  return (
    <Flex
      as="nav"
      textStyle="special"
      justify="space-between"
      _hover={{
        '.page-numbers.current': { color: colorMode('dark', 'light') },
      }}
      mt={10}
      sx={{ '>*': { flex: 1 } }}
    >
      {renderPreviousLink(previousPagePath)}
      <Box
        as="span"
        textAlign="center"
        aria-current="page"
        fontWeight="bold"
        className="page-numbers current"
      >
        {humanPageNumber}
      </Box>
      {renderNextLink(nextPagePath)}
    </Flex>
  )
}

const linkStyles = {
  transition: '.6s',
  fontWeight: 'bold',
  '&.older': {
    transform: 'translate3d(1.75rem, 0, 0)',
    mr: [4, 0],
  },
  '&.newer': {
    transform: 'translate3d(-1.75rem, 0, 0)',
    ml: [4, 0],
  },
  ':hover': {
    transform: 'translate3d(0, 0, 0)',
    textDecoration: 'none',
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
}
