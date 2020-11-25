import React from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { useCollapse } from '../ui-components/useCollapse'
import { MenuItem } from './MenuItem'
import { LinkItem } from './LinkItem'
export const SubMenu = ({ menuItem, sub }) => {
  const [showClass, handler] = useCollapse()
  return (
    <li
      className="nav-item menu-item dropdown d-flex flex-wrap align-items-center"
      key={menuItem.id}
    >
      <LinkItem menuItem={menuItem} sub={sub} />
      <button
        type="button"
        aria-label="Open menu item"
        onClick={handler}
        className="btn btn-sm pl-0 border-none lh-1 ml-auto "
      >
        {showClass ? <FiChevronDown /> : <FiChevronRight />}
      </button>
      <ul className={`dropdown-menu w-100 collapse ${showClass}`}>
        {menuItem.children.map((item) => (
          <MenuItem key={item.id} menuItem={item} sub={true} />
        ))}
      </ul>
    </li>
  )
}
