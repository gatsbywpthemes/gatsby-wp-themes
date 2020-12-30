import React, { useState, createContext } from 'react'
export const SearchContext = createContext()

const Wrapper = ({ element }) => {
  const [search, setSearch] = useState('')
  const [fromSearch, setFromSearch] = useState(false)
  const [escInSearch, setEscInSearch] = useState(false)
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        fromSearch,
        setFromSearch,
        escInSearch,
        setEscInSearch,
      }}
    >
      {element}
    </SearchContext.Provider>
  )
}

export default Wrapper
