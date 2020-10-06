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
        <div className="sidebar" sx={sidebarStyles} {...props}>
          {widgets.map((widget, i) => (
            <div sx={{ my: `l` }} key={i}>
              <Widgets widget={widget} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Sidebar
