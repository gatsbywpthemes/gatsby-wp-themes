import React from 'react'
import { Widgets } from './widgets'

export const Sidebar = ({ widgets, ...props }) => {
  return (
    <>
      {widgets && widgets.length > 0 && (
        <div className="sidebar" {...props}>
          {widgets.map((widget, i) => (
            <div key={i}>
              <Widgets widget={widget} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Sidebar
