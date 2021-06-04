import React from "react"
import { Footer, Header } from "baseComponents"
import { Box, Flex } from "@chakra-ui/react"
import Headroom from "react-headroom"
import { HelmetForFavicon } from "./HelmetForFavicon"

export const Layout = ({ children, page, type = "page", ...props }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ""
  const pageTemplate = page?.headlesswp?.pageTemplate

  const fullWidthClass = pageTemplate === "full width" ? "fullWidth" : ""
  return (
    <>
      <HelmetForFavicon />
      <Flex
        minHeight="100vh"
        flexDirection="column"
        sx={{
          "&.fullWidth": {
            ".mainContainer": {
              maxWidth: `100%`,
              form: {
                mb: 10,
              },
              px: 0,
            },
          },
        }}
        className={`${layoutClass}-${type} ${fullWidthClass}`}
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
      </Flex>
    </>
  )
}
