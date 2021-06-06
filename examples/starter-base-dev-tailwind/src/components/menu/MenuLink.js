import React from "react"
import slashes from "remove-trailing-slash"
import { createLocalLink } from "baseUtils"
import { Link as GatsbyLink } from "gatsby"
import { Box, chakra } from "@chakra-ui/react"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

export const MenuLink = ({ menuItem, ...props }) => {
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
      <chakra.a href={menuItem.url} {...targetRelAttrs} {...props}>
        {menuItem.label}
      </chakra.a>
    )
  } else {
    return menuItem.url !== "#" ? (
      menuItem.url === wordPressUrl ? (
        <Box
          as={GatsbyLink}
          to="/"
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
          {...props}
        />
      ) : (
        <Box
          as={GatsbyLink}
          to={createLocalLink(menuItem.url, slashes(wordPressUrl))}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
          {...props}
        />
      )
    ) : (
      menuItem.label
    )
  }
}
