import React from "react"
import { Box } from "@chakra-ui/react"
import { Card } from "baseUiComponents"
import { Widget } from "baseComponents"
import clsx from "clsx"

export const Sidebar = ({ widgets, className, ...props }) => {
  return (
    <>
      {widgets && widgets.length > 0 && (
        <Card
          className={clsx("sidebar", className)}
          sx={{ p: [5, 10], pt: [0, 0] }}
          {...props}
        >
          {widgets.map((widget, i) => (
            <Box key={i} sx={{ ".widget": { my: 10 } }}>
              <Widget widget={widget} />
            </Box>
          ))}
        </Card>
      )}
    </>
  )
}

export default Sidebar
