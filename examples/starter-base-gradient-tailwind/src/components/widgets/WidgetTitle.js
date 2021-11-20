import React from "react"

export const WidgetTitle = ({ title, className = "", ...props }) => {
  const borderStyle =
    "h-[1px] border-t flex-1 border-text dark:border-dark-text "
  return (
    <div className={`flex items-center space-x-4 mb-5 ${className}`} {...props}>
      <div className={borderStyle} />
      <h3 className="widget-title font-bold tracking-widest text-center text-lg uppercase mb-0">
        {title}
      </h3>
      <div className={borderStyle} />
    </div>
  )
}
