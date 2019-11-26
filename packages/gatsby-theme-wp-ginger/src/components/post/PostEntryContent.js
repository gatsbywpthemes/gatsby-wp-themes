/** @jsx jsx */
import { jsx } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ParsedContent from '../../utils/ParsedContent'

const PostEntryContent = ({ content, location = 'archive' }) => {
  return (
    <>
      {location === 'single' && (
        <div
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className="entry-content"
          sx={{ mb: 6 }}
        >
          <ParsedContent content={content} />
        </div>
      )}
    </>
  )
}

export default PostEntryContent
