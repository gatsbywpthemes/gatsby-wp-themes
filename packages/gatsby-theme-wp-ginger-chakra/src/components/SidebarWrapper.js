import React, { useEffect, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { SlideSidebar } from './index'
import { SearchContext } from '../../context'

export const SidebarWrapper = (props) => {
  const { children } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { search, fromSearch, setFromSearch } = useContext(SearchContext)

  useEffect(() => {
    onOpen()
    //!fromSearch && onClose()
    //setFromSearch(false)
  }, [children])

  return (
    <>
      <SlideSidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {children}
    </>
  )
}
