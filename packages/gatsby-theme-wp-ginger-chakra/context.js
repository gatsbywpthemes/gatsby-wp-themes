import React, { useState } from 'react'
export const SearchContext = React.createContext()

const Wrapper = ({ element }) => {
  const [search, setSearch] = useState('')
  const [fromSearch, setFromSearch] = useState(false)
  return (
    <SearchContext.Provider
      value={{ search, setSearch, fromSearch, setFromSearch }}
    >
      {element}
    </SearchContext.Provider>
  )
}

export default Wrapper
