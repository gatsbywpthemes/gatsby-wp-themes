import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { chakra } from '@chakra-ui/react'
import { SearchContext } from 'gingerThemeSrc/context'

export const SearchResults = ({ posts }) => {
  const { setFromSearch } = useContext(SearchContext)
  return (
    !!posts.length && (
      <chakra.ul textStyle="listRaw" mb="4" letterSpacing=".5px" fontSize="md">
        {posts.map((post) => {
          return (
            <chakra.li key={post.slug} mb="2">
              <Link
                onClick={() => setFromSearch(true)}
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
