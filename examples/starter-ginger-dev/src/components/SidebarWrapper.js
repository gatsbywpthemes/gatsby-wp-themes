import React, { useEffect, useContext, useRef } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { SlideSidebar } from 'gingerThemeComponents'
import {
  DispatchSearchContext,
  NavigateFromSearchContext,
} from 'gingerThemeComponents/search/context'

export const SidebarWrapper = (props) => {
  const { children, location } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const fromSearch = useContext(NavigateFromSearchContext)
  const dispatch = useContext(DispatchSearchContext)
  const prevFromSearch = useRef(false)
  const opened = useRef(false)

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
    dispatch({ fromSearch: false })
  }, [opened, location, onClose, dispatch])

  return (
    <>
      <SlideSidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {children}
    </>
  )
}
