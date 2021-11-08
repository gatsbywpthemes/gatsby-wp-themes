import React from "react"
import { format } from "date-fns"
export const CommentDate = ({ date }) => {
  const formatDate = date.split(" ").join("T")
  return (
    <em>
      <time className="entry-date published updated" dateTime={date}>
        {format(new Date(formatDate), "MMMM dd, yyyy")}
      </time>
    </em>
  )
}
