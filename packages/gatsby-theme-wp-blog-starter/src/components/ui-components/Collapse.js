/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, Fragment } from 'react'
import { Button, Collapsible } from 'grommet'
import { FormNext, FormDown } from 'grommet-icons'

export const Collapse = props => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Fragment>
      <Button
        icon={openMenu ? <FormDown /> : <FormNext />}
        a11yTitle="Open menu item"
        onClick={() => {
          const newOpenMenu = !openMenu
          setOpenMenu(newOpenMenu)
        }}
        sx={{
          position: 'absolute',
          top: '4px',
          right: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          svg: {
            width: '1.5rem',
            height: '1.5rem',
            stroke: 'white',
          },
        }}
      />
      <Collapsible open={openMenu}>{props.children}</Collapsible>
    </Fragment>
  )
}
