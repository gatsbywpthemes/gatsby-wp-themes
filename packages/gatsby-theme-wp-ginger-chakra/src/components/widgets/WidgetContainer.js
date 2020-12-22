import React from 'react'
import { WidgetTitle } from './index'
import { Box } from '@chakra-ui/react'

export const WidgetContainer = ({ children, title, sx, ...props }) => {
  return (
    <Box
      as="section"
      className="widget"
      {...props}
      mb={12}
      sx={{
        '[aria-current]': {
          fontStyle: 'italic',
          fontWeight: 'body',
        },
        ...sx,
      }}
    >
      {title && <WidgetTitle>{title}</WidgetTitle>}
      {children}
    </Box>
  )
}
