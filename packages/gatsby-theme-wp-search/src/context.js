import React, { createContext, useCallback, useReducer } from "react"
export const SearchContext = createContext()
export const NavigateFromSearchContext = createContext()
export const DispatchSearchContext = createContext()
export const EscapeInSearchContext = createContext()

const reducer = (state, action) => {
  return {
    ...state,
    ...action,
  }
}

const Wrapper = ({ element }) => {
  const [searchState, dispatch] = useReducer(reducer, {
    fromSearch: false,
    escInSearch: false,
    search: "",
  })
  const dispatchValue = useCallback(dispatch, [dispatch])
  return (
    <NavigateFromSearchContext.Provider value={searchState.fromSearch}>
      <DispatchSearchContext.Provider value={dispatchValue}>
        <SearchContext.Provider value={searchState.search}>
          <EscapeInSearchContext.Provider value={searchState.escInSearch}>
            {element}
          </EscapeInSearchContext.Provider>
        </SearchContext.Provider>
      </DispatchSearchContext.Provider>
    </NavigateFromSearchContext.Provider>
  )
}

export default Wrapper
