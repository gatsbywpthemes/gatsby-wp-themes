import React from "react"
import { Widget } from "baseComponents"
import clsx from "clsx"

export const Sidebar = ({ widgets, className, ...props }) => {
  return (
    <>
      {widgets && widgets.length > 0 && (
        <div
          className={clsx("sidebar", "p-5 sm:p-10 pt-0", className)}
          {...props}
        >
          {widgets.map((widget, i) => (
            <div key={i} css={{ ".widget": { my: 10 } }}>
              <Widget widget={widget} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Sidebar
