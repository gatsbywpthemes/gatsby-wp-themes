/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Widgets } from './widgets'
import { sidebarStyles } from '../styles/sidebarStyles'

export const Sidebar = ({ widgets, ...props }) => {
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
