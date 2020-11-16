import React from 'react'
import {
  IconButton,
  useDisclosure,
  Collapse as Collapsible,
} from '@chakra-ui/react'

import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'

export const Collapse = ({ menuItem, children }) => {
  const { isOpen, onToggle } = useDisclosure()
  const openStyle =
    menuItem.url === '#'
      ? {
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }
      : ''
  return (
    <>
      <IconButton
        icon={isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
        aria-label="Open menu item"
        variant="unstyled"
        size="sm"
        onClick={onToggle}
        sx={{
          position: 'absolute',
          top: '4px',
          right: 0,
          ...openStyle,
          svg: {
            width: '1.5rem',
            height: '1.5rem',
            stroke: 'white',
          },
        }}
      />
      {menuItem.label}
      <Collapsible in={isOpen}>{children}</Collapsible>
    </>
  )
}
