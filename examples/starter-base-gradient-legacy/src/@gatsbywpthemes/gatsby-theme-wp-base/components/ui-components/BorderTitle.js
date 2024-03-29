import React from "react"
import { Flex, chakra } from "@chakra-ui/react"

export const BorderTitle = ({ children, ...props }) => (
  <Flex
    justify="center"
    align="center"
    textAlign="center"
    textTransform="uppercase"
    letterSpacing="2px"
    fontSize="lg"
    fontWeight="bold"
    sx={{
      ":after, :before": {
        content: '""',
        height: "1px",
        borderTop: "1px solid",
        flex: "1 0",
      },
      ":after": {
        ml: 4,
      },
      ":before": {
        mr: 4,
      },
    }}
    {...props}
  >
    <chakra.span textStyle="gradientTextPurple">{children}</chakra.span>
  </Flex>
)
