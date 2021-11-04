import React from 'react'
import { format } from 'date-fns'
import { Box } from '@chakra-ui/layout'
const PostDate = ({ date }) => {
  const formatDate = date.split(' ').join('T')
  return (
    <Box fontStyle="italic" fontSize="xs">
      <time className="entry-date published updated" dateTime={date}>
        {format(new Date(formatDate), 'MMMM dd, yyyy')}
      </time>
    </Box>
  )
}

export { PostDate as Date }
