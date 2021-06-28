import React, { useRef, useContext, useCallback } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useThemeColorModeValue as useColorModeValue } from 'gingerThemeSrc/hooks/useThemeColorModeValue'
import { OpenButton } from 'gingerThemeComponents'
import {
  DispatchSearchContext,
  EscapeInSearchContext,
} from 'gingerThemeComponents/search/context'

export const SlideSidebarWrapper = ({ isOpen, onOpen, onClose, children }) => {
  const menuBtn = useRef()
  const dispatch = useContext(DispatchSearchContext)
  const escInSearch = useContext(EscapeInSearchContext)
  const onEscape = useCallback(() => {
    if (!escInSearch) {
      onClose()
    } else {
      dispatch({ search: '' })
    }
  }, [escInSearch, onClose, dispatch])

  return (
    <>
      <OpenButton
        ref={menuBtn}
        onClick={() => {
          onOpen()
        }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={menuBtn}
        size="md"
        closeOnEsc={false}
        onEsc={onEscape}
      >
        <DrawerOverlay>
          <DrawerContent
            bg={useColorModeValue('sidebarBg')}
            color={useColorModeValue('sidebarColor')}
            sx={{
              boxShadow: 'rgba(0, 0, 0, 0.3) -10px 0px 40px',
              '[aria-current]': {
                fontStyle: 'italic',
                fontWeight: 'body',
              },
            }}
          >
            <DrawerCloseButton sx={{ right: 6 }} />
            <DrawerBody px={[8, 12]} py="12">
              {children}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
