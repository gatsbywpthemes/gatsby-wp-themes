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

import { cardStyles } from '../../styles/'

export const PostEntryIntro = ({
  ctx,
  post,
  location = 'archive',
  variant = 'blog',
}) => {
  return (
    <>
      <div className="p-3 ">
        <PublicationDate {...{ post, location }} />
        <PostEntryTitle {...{ post, location }} />
        <PostEntryExcerpt {...{ post, location }} />

        {location === 'single' && (
          <PrevNextPostNavigation
            ctx={ctx}
            style={{ margin: '2rem 0 0', fontSize: 'xxs' }}
          />
        )}
      </div>
      <div className="mt-auto mx-3 mb-3">
        <Link className="btn btn-sm btn-outline-dark text-uppercase ml-auto">
          Read more&hellip;
        </Link>
      </div>
    </>
  )
}
