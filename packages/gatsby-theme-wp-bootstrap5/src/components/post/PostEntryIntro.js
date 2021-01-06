import React from 'react'
import {
  PublicationDate,
  PostEntryTitle,
  PostEntryExcerpt,
  Categories,
} from './index'
import { Link } from 'gatsby'

export const PostEntryIntro = ({ ctx, post, location = 'archive' }) => {
  return (
    <>
      <div className="p-3 ">
        <Categories className="mb-3" post={post} />
        <PostEntryTitle {...{ post, location }} />
        <PublicationDate {...{ post, location }} />
        <PostEntryExcerpt {...{ post, location }} />
      </div>
      <div className="mt-auto mx-3 mb-3">
        <Link
          to={post.uri}
          className="btn btn-sm btn-outline-dark text-uppercase ms-auto"
        >
          Read more&hellip;
        </Link>
      </div>
    </>
  )
}
