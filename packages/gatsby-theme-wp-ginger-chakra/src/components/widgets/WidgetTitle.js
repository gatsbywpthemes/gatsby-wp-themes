import React from 'react'
import { Box } from '@chakra-ui/react'

export const WidgetTitle = ({ children, props }) => {
  return (
    <Box
      as="h2"
      sx={{
        fontSize: 'l',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        ':after, :before': {
          content: '""',
          height: '1px',
          borderTop: '1px solid',
          flex: '1 0',
        },
        ':after': {
          ml: 3,
        },
        ':before': {
          mr: 3,
        },
      }}
      className="widget-title"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
