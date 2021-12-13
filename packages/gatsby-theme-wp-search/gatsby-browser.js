import * as React from "react"
import Wrapper from "./src/context"

export const wrapRootElement = ({ element }, pluginOptions) => {
  return <Wrapper element={element} {...pluginOptions} />
}
