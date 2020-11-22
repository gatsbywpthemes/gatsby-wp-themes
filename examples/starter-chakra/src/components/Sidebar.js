import React from 'react'
import { Box, useColorModeValue as colorMode } from '@chakra-ui/react'
import { Card } from 'starterUiComponents'
import { Widgets } from 'starterComponents'

export const Sidebar = ({ widgets, ...props }) => {
  const bgColor = colorMode('white', 'ultraDark')
  return (
    <>
      {widgets && widgets.length > 0 && (
        <Card p={6} className="sidebar" {...props}>
          {widgets.map((widget, i) => (
            <Box key={i} sx={{ '.widget': { my: 10 } }}>
              <Widgets widget={widget} />
            </Box>
          ))}
        </Card>
      )}
    </>
  )
}

export default Sidebar
