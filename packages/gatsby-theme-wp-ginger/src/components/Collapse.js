/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Collapsible } from 'grommet'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'

const Collapse = props => {
  const [openMenu, setOpenMenu] = React.useState(false)
  return (
    <>
      <button
        sx={{ variant: 'buttons.raw', color: 'inherit' }}
        type="button"
        aria-label="Open menu item"
        onClick={() => {
          const newOpenMenu = !openMenu
          setOpenMenu(newOpenMenu)
        }}
        className="collapse"
      >
        {openMenu ? <FiChevronDown /> : <FiChevronRight />}
      </button>
      <Collapsible open={openMenu}>{props.children}</Collapsible>
    </>
  )
}

export default Collapse
