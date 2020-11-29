import React from 'react'
import SearchWrapper from './context'

const WrapRootElement = ({ element }) => {
  return <SearchWrapper element={element} />
}
export default WrapRootElement
