import React from "react";
import LinkItem from "./LinkItem";
import SubMenu from "./SubMenu";

export default function MenuItem({ menuItem }) {
  if (menuItem.children.length) {
    return <SubMenu menuItem={menuItem} />;
  } else {
    return (
      <li key={menuItem.id}>
        <LinkItem menuItem={menuItem} />
      </li>
    );
  }
}
