import { Heading, Link as ChakraLink } from "@chakra-ui/react"
import React from "react"
import { Link } from "gatsby"

export const PostEntryTitle = ({ post, location, ...props }) => {
  const { title, uri } = post

  return (
    <>
      {location === "single" ? (
        <Heading
          as="h1"
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
          {...props}
        />
      ) : (
        <Heading className="entry-title" {...props}>
          <ChakraLink
            as={Link}
            to={`${uri}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Heading>
      )}
    </>
  )
}
