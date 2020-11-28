import React, { useEffect, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { SlideSidebar } from './index'
import { SearchContext } from '../../context'

export const SidebarWrapper = (props) => {
  const { children } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { fromSearch, setFromSearch } = useContext(SearchContext)

  useEffect(() => {
    ;(!fromSearch || window.innerWidth < 600) && onClose()
    setFromSearch(false)
  }, [children])

  return (
    <>
      <SlideSidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {children}
    </>
  )
}
