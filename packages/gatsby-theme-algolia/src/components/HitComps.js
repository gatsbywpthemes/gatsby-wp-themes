/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx, Box, Styled } from "theme-ui"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"
import normalize from "normalize-path"
import moment from "moment/moment"

export const PageHit = ({ hit }) => (
  <>
    <Styled.h4>
      <Link to={`/${hit.slug}`}>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </Link>
    </Styled.h4>

    <Snippet attribute="content" hit={hit} tagName="mark" />
  </>
)

export const PostHit = ({ hit }) => {
  return (
    <>
      <Styled.h4>
        <Link to={normalize(`/${hit.uri}`)}>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </Link>
      </Styled.h4>

      <Box className="post-metadata">
        {moment(hit.date).format(`MMMM D, YYYY`)} {""} by {""}
        <Highlight attribute="author.name" hit={hit} tagName="mark" />
      </Box>
      <Snippet attribute="content" hit={hit} tagName="mark" />
    </>
  )
}
