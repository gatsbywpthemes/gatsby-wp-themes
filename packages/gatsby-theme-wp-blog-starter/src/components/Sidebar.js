/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import Widgets from './widgets/Widgets'
import sidebarStyles from '../styles/sidebarStyles'

const Sidebar = ({ widgets, ...props }) => {
  return (
    <>
      {widgets && widgets.length > 0 && (
        <Box className="sidebar" sx={sidebarStyles} {...props}>
          {widgets.map((widget, i) => (
            <Box sx={{ my: `l` }} key={i}>
              <Widgets widget={widget} />
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}

export default Sidebar
