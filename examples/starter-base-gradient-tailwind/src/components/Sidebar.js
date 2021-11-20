import React from "react"
import { Widget } from "./widgets"
import clsx from "clsx"

export const Sidebar = ({ widgets, className, ...props }) => {
  return (
    <>
      {widgets && widgets.length > 0 && (
        <aside
          className={clsx(
            "sidebar",
            "px-5 py-10 sm:p-10  card space-y-5",
            className
          )}
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
