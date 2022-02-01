import React from 'react'
import { Input } from 'gingerThemeUiComponents/Input'

export const SearchInput = (props) => {
  return (
    <Input
      w="full"
      py="2"
      pl="8"
      h="100%"
      placeholder="search here..."
      aria-label="Search here"
      {...props}
    />
  )
}
