// eslint-disable-next-line no-unused-vars
import React from 'react'
import ParsedContent from '../../utils/ParsedContent'
import { ActivatePostScripts } from '../../utils/'

export const PostEntryContent = ({ content, location = 'archive' }) => {
  return (
    <>
      {location === 'single' && (
        <div
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className="entry-content mb-4"
        >
          <ActivatePostScripts />
          <ParsedContent content={content} />
        </div>
      )}
    </>
  )
}
