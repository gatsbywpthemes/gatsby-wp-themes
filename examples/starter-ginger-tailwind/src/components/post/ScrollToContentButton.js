import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { FiChevronsDown } from "react-icons/fi";
export default function ScrollToContentButton() {
  return (
    <button aria-label="Scroll to content" onClick={() => scrollTo("#content")}>
      <FiChevronsDown />
    </button>
  );
}
