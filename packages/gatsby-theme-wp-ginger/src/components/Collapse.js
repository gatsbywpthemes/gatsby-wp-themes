/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Button, Collapsible } from 'grommet'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'

const Collapse = props => {
  const [openMenu, setOpenMenu] = React.useState(false)
  return (
    <>
      <Button
        icon={openMenu ? <FiChevronDown /> : <FiChevronRight />}
        a11yTitle="Open menu item"
        onClick={() => {
          const newOpenMenu = !openMenu
          setOpenMenu(newOpenMenu)
        }}
        className="collapse"
      />
      <Collapsible open={openMenu}>{props.children}</Collapsible>
    </>
  )
}

export default Collapse
