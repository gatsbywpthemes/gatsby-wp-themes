import React from 'react'
import { useState, Fragment } from 'react'
import { Button, Collapsible } from 'grommet'
import { FormNext, FormDown } from 'grommet-icons'

export const Collapse = ({ menuItem, children }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const openStyle =
    menuItem.url === '#'
      ? {
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }
      : ''
  return (
    <Fragment>
      <Button
        icon={openMenu ? <FormDown /> : <FormNext />}
        a11yTitle="Open menu item"
        focusIndicator={false}
        onClick={() => {
          const newOpenMenu = !openMenu
          setOpenMenu(newOpenMenu)
        }}
      />
      <Collapsible open={openMenu}>{children}</Collapsible>
    </Fragment>
  )
}
