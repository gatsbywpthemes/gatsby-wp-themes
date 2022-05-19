import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { chakra } from '@chakra-ui/react'
import { DispatchSearchContext } from '@gatsbywpthemes/gatsby-theme-wp-search/src/context'

export const SearchResults = ({ posts }) => {
  const dispatch = useContext(DispatchSearchContext)
  return (
    !!posts.length && (
      <chakra.ul
        textStyle="listRaw"
        mb="4"
        letterSpacing=".5px"
        fontSize="md"
        sx={{ a: { textDecoration: 'none' } }}
      >
        {posts.map((post) => {
          return (
            <chakra.li key={post.slug} mb="2">
              <Link
                onClick={() => dispatch({ fromSearch: true })}
                to={post.uri}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
            </chakra.li>
          )
        })}
      </chakra.ul>
    )
  )
}
