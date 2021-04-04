import React from 'react'
import { Box } from '@chakra-ui/react'
import { Card } from 'baseUiComponents'
import { Widget } from 'baseComponents'

export const Sidebar = ({ widgets, ...props }) => {
  return (
    <>
      {widgets && widgets.length > 0 && (
        <Card className="sidebar" sx={{ p: [5, 10], pt: [0, 0] }} {...props}>
          {widgets.map((widget, i) => (
            <Box
              key={i}
              sx={{ '.widget': { my: 10 } }}
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-easing="ease"
            >
              <Widget widget={widget} />
            </Box>
          ))}
        </Card>
      )}
    </>
  )
}

export default Sidebar
