import React from 'react'
import { Button } from '@chakra-ui/react'

export const LoadMoreButton = ({ loadMore }) => {
  return (
    <Button
      size="sm"
      variant="link"
      color="inherit"
      onClick={loadMore}
      type="button"
    >
      Load More
    </Button>
  )
}
