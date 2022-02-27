import React, { useState } from "react"
import { Menu } from "~/components/menu"
import { Widget } from "~/components/widgets"
import { GiHamburgerMenu as Hamburger } from "react-icons/gi"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"
import { SlidePanelHorizontal } from "@gatsbywpthemes/gatsby-theme-ui-components/src"
import clsx from "clsx"

export const Slidemenu = ({ className, ...props }) => {
  const [open, setOpen] = useState(false)
  const { widgetAreas } = useThemeOptions()
  const widgets = widgetAreas.slideMenuWidgets || []
  return (
    <>
      <button aria-label="open menu">
        <Hamburger
          className={clsx("text-[24px] text-text dark:text-dark-text")}
          onClick={() => setOpen(true)}
        />
      </button>
      <SlidePanelHorizontal open={open} setOpen={setOpen}>
        <Menu orientation="V" />

        {widgets?.length > 0 &&
          widgets.map((widget, i) => (
            <div key={i} css={{ ".widget": { my: 10 } }}>
              <Widget widget={widget} />
            </div>
          ))}
      </SlidePanelHorizontal>
    </>
  )
}
