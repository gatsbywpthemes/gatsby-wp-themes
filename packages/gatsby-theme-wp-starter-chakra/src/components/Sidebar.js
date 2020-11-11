/** @jsx jsx */
import { jsx, Box, useColorModeValue as colorMode } from '@chakra-ui/core'
import React from 'react'
import { Widgets } from 'starterComponents'

export const Sidebar = ({ widgets, ...props }) => {
  const bgColor = colorMode('white', 'ultraDark')
  return (
    <>
      {widgets && widgets.length > 0 && (
        <Box
          bg={bgColor}
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          className="sidebar"
          {...props}
        >
          {widgets.map((widget, i) => (
            <Box key={i} sx={{ '.widget': { my: 10 } }}>
              <Widgets widget={widget} />
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}

export default Sidebar