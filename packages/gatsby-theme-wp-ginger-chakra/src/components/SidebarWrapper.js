import React, { useEffect, useContext, useRef } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { SlideSidebar } from 'gingerThemeComponents'
import { SearchContext } from '../../context'

export const SidebarWrapper = (props) => {
  const { children } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { fromSearch, setFromSearch } = useContext(SearchContext)
  const prevFromSearch = useRef(false)

  useEffect(() => {
    prevFromSearch.current = fromSearch
  }, [fromSearch])

  useEffect(() => {
    if (!prevFromSearch.current || window.innerWidth < 600) {
      onClose()
    }
    setFromSearch(false)
  }, [children, setFromSearch, onClose])

  return (
    <>
      <SlideSidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {children}
    </>
  )
}
