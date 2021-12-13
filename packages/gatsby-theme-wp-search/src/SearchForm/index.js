import React, { useState, useContext } from "react"
import { SearchQueries } from "./../SearchQueries"
import { SearchContext, DispatchSearchContext } from "./../context"
import { Form } from "./Form"

import { ResetButton } from "./ResetButton"
import { SearchInput } from "./SearchInput"

export const SearchForm = () => {
  const search = useContext(SearchContext)
  const [value, setValue] = useState(search)
  const dispatch = useContext(DispatchSearchContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ search: value })
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    if (e.target.value === "") {
      dispatch({ search: "" })
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          value={value}
          type="search"
          onChange={handleChange}
          onFocus={() => dispatch({ escInSearch: true })}
          onBlur={() => dispatch({ escInSearch: false })}
          placeholder="search here..."
          aria-label="Search here"
        />
        {value.length > 0 && (
          <ResetButton
            type="reset"
            onClick={() => {
              setValue("")
              dispatch({ search: "" })
            }}
          />
        )}
      </Form>

      {/* value && search so that results are reset on Escape */}
      {value && search && <SearchQueries search={search} />}
    </>
  )
}
