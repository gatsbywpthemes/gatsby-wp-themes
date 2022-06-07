import React, { useState } from "react"
import { Menu } from "~/components/menu"
import { Widget } from "~/components/widgets"
import { GiHamburgerMenu as Hamburger } from "react-icons/gi"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"
import { SlidePanelHorizontal } from "@gatsbywpthemes/gatsby-theme-ui-components/src"
import { MdClose as Close } from "react-icons/md"
import clsx from "clsx"

export const SlideMenu = ({ ...props }) => {
  const [open, setOpen] = useState(false)
  const { widgetAreas } = useThemeOptions()
  const widgets = widgetAreas.slideMenuWidgets || []
  return (
    <div {...props}>
      <button aria-label="open menu">
        <Hamburger
          className={clsx("text-[24px] text-text dark:text-dark-text")}
          onClick={() => setOpen(true)}
        />
      </button>
      <SlidePanelHorizontal open={open} setOpen={setOpen}>
        {/* Panel content */}
        <div
          className={clsx(
            "flex flex-col",
            "h-screen",
            "overflow-y-scroll",
            "shadow-xl",
            "p-5",
            "bg-mobileMenuBg dark:bg-dark-mobileMenuBg ",
            "text-mobileMenuColor dark:text-dark-mobileMenuColor"
          )}
        >
          <div className="flex justify-end mb-5">
            <button aria-label="close menu">
              <Close
                className="text-[24px] text-mobileMenuColor dark:text-dark-mobileMenuColor"
                onClick={() => setOpen(false)}
              />
            </button>
          </div>

          <Menu orientation="V" />
        </div>
        {/* End of panel content */}

        {widgets?.length > 0 &&
          widgets.map((widget, i) => (
            <div key={i} css={{ ".widget": { my: 10 } }}>
              <Widget widget={widget} />
            </div>
          ))}
      </SlidePanelHorizontal>
    </div>
  )
}
