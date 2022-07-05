import React from "react"
import slashes from "remove-trailing-slash"
import { createLocalLink } from "~/utils"
import { Link } from "gatsby"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-wp-data/src/hooks"

export const MenuLink = React.forwardRef((allProps, ref) => {
  let { menuItem, ...props } = allProps

  const { wordPressUrl } = useThemeOptions()
  let url = menuItem.url

  if (
    !url.includes(wordPressUrl) &&
    (url.startsWith("https://") || url.startsWith("http://"))
  ) {
    const targetRelAttrs =
      menuItem.target === "_blank"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {}
    return (
      <a ref={ref} href={menuItem.url} {...targetRelAttrs} {...props}>
        {menuItem.label}
      </a>
    )
  } else {
    return menuItem.url !== "#" ? (
      menuItem.url === wordPressUrl ? (
        <Link
          to="/"
          ref={ref}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
          {...props}
        />
      ) : (
        <Link
          ref={ref}
          to={createLocalLink(menuItem.url, slashes(wordPressUrl))}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
          {...props}
        />
      )
    ) : (
      menuItem.label
    )
  }
})
