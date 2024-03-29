import React from "react"
import { Link } from "gatsby"
import { Image } from "../ui-components/Image"

const WithLink = ({ post, location, children }) =>
  location === "single" ? (
    children
  ) : (
    <Link to={`${post.uri}`} aria-label="View the entire post">
      {children}
    </Link>
  )

export const PostEntryMedia = ({
  imageLoading = "lazy",
  post,
  location,
  ...props
}) => {
  const img = post.featuredImage?.node

  return (
    <>
      {img && (
        <WithLink location={location} post={post}>
          <Image img={img} loading={imageLoading} {...props} />
        </WithLink>
      )}
    </>
  )
}
