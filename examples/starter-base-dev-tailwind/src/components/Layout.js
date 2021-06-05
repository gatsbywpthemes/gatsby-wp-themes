import React from "react"
import { Footer, Header } from "baseComponents"
import { Box, Flex } from "@chakra-ui/react"
import Headroom from "react-headroom"
import "baseStyles/wp-styles/styles.scss"
import { HelmetForFavicon } from "./HelmetForFavicon"
import clsx from "clsx"

export const Layout = ({ children, page, type = "page", ...props }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ""
  const pageTemplate = page?.headlesswp?.pageTemplate

  const fullWidthClass = pageTemplate === "full width" ? "fullWidth" : ""
  return (
    <>
      <HelmetForFavicon />

      <div
        className={clsx(
          "flex min-h-full flex-col",
          `${layoutClass}-${type}`,
          fullWidthClass
        )}
        css={{
          "&.fullWidth": {
            ".mainContainer": {
              maxWidth: `100%`,
              form: {
                marginBottom: 10,
              },
              padding: 0,
            },
          },
        }}
        {...props}
      >
        <Box as={Headroom} sx={{ "&>div": { zIndex: "2!important" } }}>
          <Header />
        </Box>
        <Box
          as="main"
          flex={1}
          py={16}
          sx={{
            ".fullWidth &": {
              py: 0,
              // mt: '-32px',
            },
          }}
        >
          {children}
        </Box>
        <Footer />
      </div>
    </>
  )
}
