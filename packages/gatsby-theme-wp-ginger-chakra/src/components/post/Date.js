import React from 'react'
import { format } from 'date-fns'
const PostDate = ({ date }) => {
  return (
    <>
      <time className="entry-date published updated" dateTime={date}>
        {format(new Date(date), 'MMMM dd, yyyy')}
      </time>
    </>
  )
}

export { PostDate as Date }
