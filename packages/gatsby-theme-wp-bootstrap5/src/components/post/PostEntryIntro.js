import React from 'react'
import {
  PublicationDate,
  PostEntryTitle,
  PostEntryExcerpt,
  Categories,
  Author,
  PrevNextPostNavigation,
} from './index'
import { Link } from 'gatsby'

export const PostEntryIntro = ({ ctx, post, location = 'archive' }) => {
  return (
    <>
      <div className="p-3 ">
        <PublicationDate {...{ post, location }} />
        <PostEntryTitle {...{ post, location }} />
        <PostEntryExcerpt {...{ post, location }} />
      </div>
      <div className="mt-auto mx-3 mb-3">
        <Link
          to={post.uri}
          className="btn btn-sm btn-outline-dark text-uppercase ml-auto"
        >
          Read more&hellip;
        </Link>
      </div>
    </>
  )
}
