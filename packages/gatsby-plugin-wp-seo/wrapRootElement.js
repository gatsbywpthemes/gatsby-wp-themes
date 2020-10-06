import React from "react"

import { SeoOptionsContext } from "./src/context"

export const Root = ({ element }, options) => {
  return (
    <SeoOptionsContext.Provider value={{ ...options }}>
      {element}
    </SeoOptionsContext.Provider>
  )
}
