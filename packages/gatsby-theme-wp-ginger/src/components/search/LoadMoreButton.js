import React from 'react'
import { Button } from '@chakra-ui/react'

export const LoadMoreButton = ({ clickable, loadMore }) => {
  return clickable ? (
    <Button size="sm" variant="link" color="inherit" onClick={loadMore}>
      Load More
    </Button>
  ) : (
    <p>Loading...</p>
  )
}
