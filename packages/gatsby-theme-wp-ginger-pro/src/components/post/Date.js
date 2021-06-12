import React from 'react'
import { format } from 'date-fns'
const PostDate = ({ date }) => {
  const formatDate = date.split(' ').join('T')
  return (
    <>
      <time className="entry-date published updated" dateTime={date}>
        {format(new Date(formatDate), 'MMMM dd, yyyy')}
      </time>
    </>
  )
}

export { PostDate as Date }
