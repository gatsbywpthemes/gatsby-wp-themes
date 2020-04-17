/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Collapsible } from 'grommet'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'

const Collapse = ({ menuItem, children }) => {
  const [openMenu, setOpenMenu] = React.useState(false)
  const openStyle =
    menuItem.url === '#'
      ? {
          width: '100%',
          textAlign: 'right',
        }
      : ''
  return (
    <>
      <button
        sx={{ variant: 'buttons.raw', color: 'inherit', ...openStyle }}
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
      <Collapsible open={openMenu}>{children}</Collapsible>
    </>
  )
}

export default Collapse
