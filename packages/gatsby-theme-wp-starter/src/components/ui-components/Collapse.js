/** @jsx jsx */
import {
  jsx,
  IconButton,
  useDisclosure,
  Collapse as Collapsible,
} from '@chakra-ui/core'

import React from 'react'

import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'

export const Collapse = ({ menuItem, children }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <IconButton
        icon={isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
        aria-label="Open menu item"
        variant="unstyled"
        size="sm"
        onClick={onToggle}
      />
      <Collapsible in={isOpen}>{children}</Collapsible>
    </>
  )
}
