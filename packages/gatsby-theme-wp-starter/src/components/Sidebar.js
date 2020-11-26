import React from 'react'
import { Box } from '@chakra-ui/react'
import { Card } from 'starterUiComponents'
import { Widget } from 'starterComponents'

export const Sidebar = ({ widgets, ...props }) => {
  return (
    <>
      {widgets && widgets.length > 0 && (
        <Card p={6} pb={16} className="sidebar" {...props}>
          {widgets.map((widget, i) => (
            <Box key={i} sx={{ '.widget': { my: 10 } }}>
              <Widget widget={widget} />
            </Box>
          ))}
        </Card>
      )}
    </>
  )
}

export default Sidebar
