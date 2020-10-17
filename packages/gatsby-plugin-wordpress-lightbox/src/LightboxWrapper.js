import React, { useContext } from "react"
import { LightboxContext } from "./context"
import { SRLWrapper } from 'simple-react-lightbox'

const LightboxWrapper = ({ children }) => {
  const options = useContext(LightboxContext)
  return (
    <SRLWrapper options={{ ...options }}>
      {children}
    </SRLWrapper>
  )
}

export default LightboxWrapper