import React, { useEffect, useContext, useRef } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { SlideSidebar } from 'gingerThemeComponents'
import { SearchContext } from 'gingerThemeComponents/search/context'

export const SidebarWrapper = (props) => {
  const { children } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { fromSearch, setFromSearch } = useContext(SearchContext)
  const prevFromSearch = useRef(false)
  const opened = useRef()

  useEffect(() => {
    prevFromSearch.current = fromSearch
  }, [fromSearch])

  useEffect(() => {
    opened.current = isOpen
  }, [isOpen])

  useEffect(() => {
    if (
      opened.current &&
      (!prevFromSearch.current || window.innerWidth < 600)
    ) {
      onClose()
    }

    setFromSearch(false)
  }, [opened, children, setFromSearch, onClose])

  return (
    <>
      <SlideSidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {children}
    </>
  )
}
