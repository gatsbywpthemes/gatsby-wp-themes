import React, { useEffect, useContext, useRef, useCallback } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { SlideSidebar } from 'gingerThemeComponents'
import {
  DispatchSearchContext,
  NavigateFromSearchContext,
} from 'gingerThemeComponents/search/context'

export const SidebarWrapper = (props) => {
  const { children } = props
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
  }, [opened, children, onClose, dispatch])

  const onOpenCallback = useCallback(onOpen, [])
  const onCloseCallback = useCallback(onClose, [])

  return (
    <>
      <SlideSidebar
        isOpen={isOpen}
        onOpen={onOpenCallback}
        onClose={onCloseCallback}
      />
      {children}
    </>
  )
}
