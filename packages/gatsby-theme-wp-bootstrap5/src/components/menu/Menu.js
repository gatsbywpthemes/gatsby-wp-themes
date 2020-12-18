import React from 'react'
import { useMenusQuery } from '@gatsbywpthemes/gatsby-theme-blog-data/src/hooks'
import { useCollapse } from '../ui-components/useCollapse'
import { SubMenu } from './SubMenu'
import { MenuItem } from './MenuItem'
import { ToggleButton } from './ToggleButton'

import { flatListToHierarchical } from './index'

export const Menu = ({ menuName }) => {
  const menuEdges = useMenusQuery()
  const menuEdge = menuEdges.find((n) => menuName === n.name)
  const menuItems = menuEdge ? menuEdge.menuItems : null
  const [showClass, handler] = useCollapse()
  if (menuItems) {
    const menuNodes = flatListToHierarchical(menuItems.nodes, { idKey: 'id' })
    return (
      <nav
        className="navbar navbar-expand-lg text-left text-uppercase border sticky-top bg-light"
        aria-label="main"
      >
        <div className="container">
          <ToggleButton handler={handler} />
          <div className={`collapse navbar-collapse ${showClass}`}>
            <ul className="navbar-nav">
              {menuNodes.map((menuItem) => {
                if (menuItem.children.length) {
                  return <SubMenu key={menuItem.id} menuItem={menuItem} />
                } else {
                  return <MenuItem key={menuItem.id} menuItem={menuItem} />
                }
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
  } else {
    return null
  }
}
