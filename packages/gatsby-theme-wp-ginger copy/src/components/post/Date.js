import React from 'react'
import moment from 'moment/moment'
const Date = ({ date }) => {
  return (
    <>
      <time className="entry-date published updated" dateTime={date}>
        {moment(date).format(`MMMM DD, YYYY`)}
      </time>
    </>
  )
}

export default Date
