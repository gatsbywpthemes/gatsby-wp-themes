/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import normalize from 'normalize-path'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import moment from 'moment/moment'

export const PageHit = ({ hit }) => (
  <Box>
    <Styled.h4>
      <Link to={`/${hit.slug}`}>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </Link>
    </Styled.h4>

    <Snippet attribute="content" hit={hit} tagName="mark" />
  </Box>
)

export const PostHit = ({ hit }) => {
  const { postsPrefix } = useThemeOptions()
  return (
    <Box>
      <Styled.h4>
        <Link to={normalize(`/${postsPrefix}/${hit.slug}`)}>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </Link>
      </Styled.h4>

      <Box>
        {moment(hit.date).format(`MMMM D, YYYY`)} {''} by {''}
        <Highlight attribute="author.name" hit={hit} tagName="mark" />
      </Box>
      <Snippet attribute="content" hit={hit} tagName="mark" />
    </Box>
  )
}
