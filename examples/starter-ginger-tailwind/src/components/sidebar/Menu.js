import React from "react";
import { useMenuItems } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks";
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";
export default function Menu({ location = "PRIMARY" }) {
  const menuItems = useMenuItems(location);
  return (
    menuItems && (
      <nav className="menu font-medium" aria-label="main">
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role */}
        <ul role="menu">
          {menuItems.map((menuItem) => {
            if (menuItem.children.length) {
              return <SubMenu key={menuItem.id} menuItem={menuItem} />;
            } else {
              return <MenuItem key={menuItem.id} menuItem={menuItem} />;
            }
          })}
        </ul>
      </nav>
    )
  );
}
