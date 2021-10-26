import React from "react"
import { Widget } from "./widgets"
import clsx from "clsx"

export const Sidebar = ({ widgets, className, ...props }) => {
  return (
    <>
      {widgets && widgets.length > 0 && (
        <aside
          className={clsx("sidebar", "p-5 sm:p-10 pt-0 card", className)}
          {...props}
        >
          {widgets.map((widget, i) => (
            <div key={i} css={{ ".widget": { my: 10 } }}>
              <Widget widget={widget} />
            </div>
          ))}
        </aside>
      )}
    </>
  )
}
