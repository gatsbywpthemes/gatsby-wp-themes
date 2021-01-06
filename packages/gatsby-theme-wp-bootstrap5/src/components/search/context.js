import React, { useState, createContext } from 'react'
export const SearchContext = createContext()

const Wrapper = ({ children }) => {
  const [search, setSearch] = useState('')
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default Wrapper
