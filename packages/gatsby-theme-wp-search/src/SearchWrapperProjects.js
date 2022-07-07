import React from "react";
import { SearchStats } from "./SearchStats";

export const SearchWrapperProjects = ({ children }) => {
  return (
    <section className="search-results-projects">
      <header>
        <h3>Projects</h3>
        <SearchStats type="PROJECT" />
      </header>
      {children}
    </section>
  );
};
