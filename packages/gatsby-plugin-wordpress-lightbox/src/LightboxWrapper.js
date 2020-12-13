import React, { useContext } from "react"
import { LightboxContext } from "./context"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

const LightboxWrapper = ({ children }) => {
  const options = useContext(LightboxContext)
  return (
    <SimpleReactLightbox>
      <SRLWrapper options={{ ...options }}>{children}</SRLWrapper>
    </SimpleReactLightbox>
  )
}

export default LightboxWrapper
