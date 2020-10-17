import React from "react"
import { LightboxContext } from "./src/context"

export const Root = ({ element }, options) => {
  const { buttons, ...rest } = options
  const lightBoxOptions = {
    buttons: {
      ...buttons,
      // download button is not supported and needs to be deactivated
      showDownloadButton: false,
    },
    ...rest
  }
  return (
    <LightboxContext.Provider value={lightBoxOptions}>
      {element}
    </LightboxContext.Provider>
  )
}
