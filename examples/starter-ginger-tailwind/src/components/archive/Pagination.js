import React from "react";
import { Link } from "gatsby";

const renderPreviousLink = (previousPagePath) => {
  if (previousPagePath) {
    return (
      <Link className="specialLeft" to={previousPagePath}>
        <span>Previous</span>
      </Link>
    );
  } else {
    return <span />;
  }
};
const renderNextLink = (nextPagePath) => {
  if (nextPagePath) {
    return (
      <Link className="specialLeft" to={nextPagePath}>
        <span>Next</span>
      </Link>
    );
  } else {
    return <span />;
  }
};
export default function Pagination({ ctx }) {
  const { humanPageNumber, nextPagePath, previousPagePath } = ctx;
  // return empty string if there is only one page
  if (humanPageNumber === 1 && !nextPagePath) {
    return "";
  }
  return (
    <>
      <div className="page-content mt-12 mb-8">
        <nav className="nav items-center justify-between flex overflow-hidden">
          {renderPreviousLink(previousPagePath)}
          <span
            aria-current="page"
            className="page-numbers current text-clip text-center"
          >
            {humanPageNumber}
          </span>
          {renderNextLink(nextPagePath)}
        </nav>
      </div>
    </>
  );
}
